import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { Option, Box, Flex, Stack, Button } from '../../index.js';
import { numberToLetter, getNumberLabel } from '../../util/helpers.js';
import { reducer, initialState } from './SingleSelect.reducer.js';

// We create a SingleSelect context to enable communication between the
// parent <SingleSelect> it's <Option> children.
// This allows us the flexibility to house the <Option> components deep
// inside a nested layout.
// todo: do we need the defaults?
const SingleSelectContext = createContext({
  selected: undefined,
  eliminated: [],
  isGroupDisabled: false,
  labelType: 'letters',
  getChoiceId: () => {},
  onClear: () => {},
  onChange: () => {},
  onEliminate: () => {}
});

function SingleSelect({
  id,
  children,
  isDisabled = false,
  selected,
  eliminated,
  labelType = 'letters',
  onChange,
  onClear,
  onEliminate
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fallback event handlers for when they are not
  // provided through props
  function handleChange(optionId) {
    dispatch({ type: 'MCSS_SELECT', optionId });
  }

  function handleEliminate(optionId) {
    dispatch({ type: 'MCSS_ELIMINATE', optionId });
  }

  function handleClear() {
    dispatch({ type: 'MCSS_CLEAR' });
  }

  let choiceCount = 0;
  function getChoiceId() {
    choiceCount += 1;
    return choiceCount;
  }

  selected = selected || state.selected;
  eliminated = eliminated || state.eliminated;
  onChange = onChange || handleChange;
  onEliminate = onEliminate || handleEliminate;
  onClear = onClear || handleClear;

  return (
    <SingleSelectContext.Provider
      value={{
        selected,
        isGroupDisabled: isDisabled,
        labelType,
        onClear,
        getChoiceId,
        onChange,
        onEliminate,
        eliminated
      }}
    >
      <Flex id={id}>
        <Stack spacing={4}>
          <Stack>{children}</Stack>
          <SingleSelectClear>Clear Answer</SingleSelectClear>
        </Stack>
      </Flex>
    </SingleSelectContext.Provider>
  );
}

export function SingleSelectChoice({ value, children, isDisabled }) {
  const {
    isGroupDisabled,
    selected,
    eliminated,
    labelType,
    onChange,
    getChoiceId,
    onEliminate
  } = useSingleSelectContext();

  // We generate a unique ID to each choice for this
  // SingleSelect instance. This ID is used to generate the
  // labels and also to assign a default choice value.
  //
  // todo: Find out how to prevent the double render caused
  // by this approach. The double render is cause by the
  // first pass then it is rendered again when choiceId is
  // updated.
  //
  // This would be easily solvable in class
  // components with a constructor but for functional
  // components there's no obvious solution.
  const [choiceId, setChoiceId] = useState(0);
  useEffect(() => {
    setChoiceId(getChoiceId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If no value is defined, set it useding the choice ID.
  value = value || numberToLetter(choiceId);

  const label = getNumberLabel(choiceId, labelType);

  return (
    <Box>
      <Option
        variant="radio"
        isSelected={selected === value}
        isEliminated={eliminated.includes(value)}
        onChange={onChange}
        onEliminate={onEliminate}
        label={label}
        value={value}
        isDisabled={isDisabled || isGroupDisabled}
      >
        {children}
      </Option>
    </Box>
  );
}

function useSingleSelectContext() {
  const context = useContext(SingleSelectContext);
  if (!context) {
    throw new Error(
      'Option compound components cannot be rendered outside the SingleSelect component'
    );
  }
  return context;
}

export function SingleSelectClear({ children }) {
  const { onClear, isGroupDisabled } = useSingleSelectContext();
  return (
    <Box>
      <Button variant="secondary" disabled={isGroupDisabled} onClick={onClear}>
        {children === null ? 'Clear Answer' : children}
      </Button>
    </Box>
  );
}

SingleSelect.propTypes = {
  // dom
  id: PropTypes.string,
  children: PropTypes.node,
  isDisabled: PropTypes.bool,

  // display
  labelType: PropTypes.oneOf(['letters', 'numbers', 'none']),

  // data
  selected: PropTypes.string,
  eliminated: PropTypes.array,
  // events
  onClear: PropTypes.func,
  onChange: PropTypes.func,
  onEliminate: PropTypes.func
};

// alternative exports
SingleSelect.initialState = initialState;
SingleSelect.reducer = reducer;
SingleSelect.Choice = SingleSelectChoice;
SingleSelect.ClearButton = SingleSelectClear;

export default SingleSelect;
