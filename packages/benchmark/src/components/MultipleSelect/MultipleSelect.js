import React, { useContext, createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Box, Flex } from '../Base';
import Option from '../Option';
import Stack from '../Stack';
import { numberToLetter, getNumberLabel } from '../../util/helpers.js';

const MultipleSelectContext = createContext({
  selected: [],
  eliminated: [],
  isGroupDisabled: false,
  labelType: 'letters',
  getChoiceId: () => {},
  onClear: () => {},
  onChange: () => {},
  onEliminate: () => {}
});

function useMultipleSelectContext() {
  const context = useContext(MultipleSelectContext);
  if (!context) {
    throw new Error(
      'Option compound components cannot be rendered outside the MultipleSelect component'
    );
  }
  return context;
}

function MultipleSelect({
  id,
  children,
  selected = [],
  eliminated = [],
  isDisabled = false,
  labelType = 'letters',
  onChange,
  onClear,
  onEliminate
}) {
  let choiceCount = 0;
  function getChoiceId() {
    choiceCount += 1;
    return choiceCount;
  }

  return (
    <MultipleSelectContext.Provider
      value={{
        selected,
        isGroupDisabled: isDisabled,
        getChoiceId,
        labelType,
        onClear,
        onChange,
        onEliminate,
        eliminated
      }}
    >
      <Flex id={id}>
        <Stack spacing={4}>
          <Stack>{children}</Stack>
          <ClearButton>Clear Answer</ClearButton>
        </Stack>
      </Flex>
    </MultipleSelectContext.Provider>
  );
}

export function ClearButton({ children }) {
  const { onClear, isGroupDisabled } = useMultipleSelectContext();
  return (
    <Box>
      <Button variant="secondary" onClick={onClear} disabled={isGroupDisabled}>
        {children === null ? 'Clear Answer' : children}
      </Button>
    </Box>
  );
}

export function MultipleSelectChoice({ value, children, isDisabled }) {
  const {
    selected,
    eliminated,
    getChoiceId,
    labelType,
    onChange,
    onEliminate,
    isGroupDisabled
  } = useMultipleSelectContext();

  // We generate a unique ID to each choice for this
  // SingleSelect instance. This ID is used to generate the
  // labels and also to assign a default choice value.
  const [choiceId, setChoiceId] = useState(0);
  useEffect(() => {
    setChoiceId(getChoiceId());
  }, []);

  // If no value is defined, set it useding the choice ID.
  value = value || numberToLetter(choiceId);

  const label = getNumberLabel(choiceId, labelType);

  return (
    <Box>
      <Option
        variant="checkbox"
        isDisabled={isDisabled || isGroupDisabled}
        isSelected={selected.includes(value)}
        isEliminated={eliminated.includes(value)}
        label={label}
        onChange={onChange}
        onEliminate={onEliminate}
        value={value}
      >
        {children}
      </Option>
    </Box>
  );
}

MultipleSelect.propTypes = {
  // dom
  id: PropTypes.string,
  children: PropTypes.node,
  isDisabled: PropTypes.bool,

  // display
  labelType: PropTypes.oneOf(['letters', 'numbers', 'none']),

  // data
  selected: PropTypes.array,
  eliminated: PropTypes.array,
  // events
  onClear: PropTypes.func,
  onChange: PropTypes.func,
  onEliminate: PropTypes.func
};

MultipleSelect.Choice = MultipleSelectChoice;

export default MultipleSelect;
