import React, { useState } from 'react';
import { useArrayToggle } from '../../util/hooks';
import { Box } from '../Base';
import SingleSelect, { SingleSelectChoice } from './SingleSelect';

export default {
  title: 'Item Types/SingleSelect',
  component: SingleSelect
};

export function Basic() {
  return (
    <>
      <SingleSelect>
        <SingleSelectChoice>Option A</SingleSelectChoice>
        <SingleSelectChoice>Option B</SingleSelectChoice>
        <SingleSelectChoice>Option C</SingleSelectChoice>
      </SingleSelect>
    </>
  );
}

export function OptionDisabled() {
  const [selected, setSelected] = useState();
  const [eliminated, toggleEliminated] = useArrayToggle();

  function handleEliminate(value) {
    toggleEliminated(value);
    if (selected === value) {
      setSelected();
    }
  }

  function handleChange(value) {
    setSelected(value);
    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return (
    <SingleSelect
      onClear={() => setSelected()}
      onEliminate={option => handleEliminate(option)}
      onChange={option => handleChange(option)}
      selected={selected}
      eliminated={eliminated}
    >
      <SingleSelectChoice>Option A</SingleSelectChoice>
      <SingleSelectChoice isDisabled>Option B</SingleSelectChoice>
      <SingleSelectChoice>Option C</SingleSelectChoice>
    </SingleSelect>
  );
}

export function Disabled() {
  const [selected, setSelected] = useState();
  const [eliminated, toggleEliminated] = useArrayToggle();

  function handleEliminate(value) {
    toggleEliminated(value);
    if (selected === value) {
      setSelected();
    }
  }

  function handleChange(value) {
    setSelected(value);
    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return (
    <SingleSelect
      onClear={() => setSelected()}
      onEliminate={option => handleEliminate(option)}
      onChange={option => handleChange(option)}
      selected={selected}
      eliminated={eliminated}
      isDisabled={true}
    >
      <SingleSelectChoice>Option A</SingleSelectChoice>
      <SingleSelectChoice>Option B</SingleSelectChoice>
      <SingleSelectChoice>Option C</SingleSelectChoice>
    </SingleSelect>
  );
}

export function LongLabels() {
  const [selected, setSelected] = useState();
  const [eliminated, toggleEliminated] = useArrayToggle();

  function handleEliminate(value) {
    toggleEliminated(value);
    if (selected === value) {
      setSelected();
    }
  }

  function handleChange(value) {
    setSelected(value);
    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return (
    <Box width="400px">
      <SingleSelect
        onClear={() => setSelected()}
        onEliminate={option => handleEliminate(option)}
        onChange={option => handleChange(option)}
        selected={selected}
        eliminated={eliminated}
      >
        <SingleSelectChoice>
          This is a really long label to test how well the text wraps
        </SingleSelectChoice>
        <SingleSelectChoice>
          It is in a really small container
        </SingleSelectChoice>
        <SingleSelectChoice>Small option</SingleSelectChoice>
      </SingleSelect>
    </Box>
  );
}
