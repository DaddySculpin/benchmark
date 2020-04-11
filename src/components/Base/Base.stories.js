import React from 'react';
import { storiesOf } from '@storybook/react';
import { IoIosApps } from 'react-icons/io';
import Stack from '../Stack';
import Button from '../Button';
import ScrollButton from '../ScrollButton';
import {
  ToolbarButton,
  ToolbarToggleButton,
  NextButton,
  PrevButton
} from '../Toolbar/ToolbarButtons.js';
import ToolbarGroup from '../Toolbar/ToolbarGroup.js';
import ToolbarScratchButton from '../Toolbar/ToolbarScratchButton.js';
import ToolbarTimerButton from '../Toolbar/ToolbarTimerButton.js';
import { Box, Text, Flex } from './Base.js';

storiesOf('Styled System', module).add('Text', () => {
  return (
    <Stack>
      <Text fontSize={1}>Size 1</Text>
      <Text fontSize={2}>Size 2</Text>
      <Text fontSize={3}>Size 3</Text>
      <Text fontSize={4}>Size 4</Text>
      <Text fontSize={5}>Size 5</Text>
      <Text fontSize={6}>Size 6</Text>
      <Text fontSize={7}>Size 7</Text>
    </Stack>
  );
});

storiesOf('Styled System', module).add('Buttons', () => {
  return (
    <Stack spacing={3} p="3">
      <Stack spacing="2" direction="row">
        <Button>Primary</Button>
        <Button disabled>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
      </Stack>
      <Stack>
        <Box>
          <Button variant="secondary">Clear Answer</Button>
        </Box>
      </Stack>
      <Stack direction="row">
        <Box>
          <ScrollButton />
        </Box>
        <Box>
          <ScrollButton disabled />
        </Box>
        <Box>
          <ScrollButton direction="up" />
        </Box>
        <Box>
          <ScrollButton direction="up" disabled />
        </Box>
      </Stack>

      <Stack direction="row" bg="n.100" p={1}>
        <PrevButton />
        <PrevButton disabled />
        <NextButton />
        <NextButton disabled />
      </Stack>

      <Flex bg="n.100" p={1}>
        <ToolbarButton icon={IoIosApps} />
        <ToolbarButton icon={IoIosApps} disabled={true} />
      </Flex>
      <Flex bg="n.100">
        <ToolbarGroup>
          <ToolbarButton icon={IoIosApps} />
          <ToolbarButton icon={IoIosApps} />
          <ToolbarButton icon={IoIosApps} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton icon={IoIosApps} />
          <ToolbarButton icon={IoIosApps} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton icon={IoIosApps} />
        </ToolbarGroup>
      </Flex>
      <Stack direction="row" bg="n.100" p={1}>
        <ToolbarToggleButton icon={IoIosApps} isActive={false} />
        <ToolbarToggleButton icon={IoIosApps} isActive={true} />
        <ToolbarToggleButton icon={IoIosApps} isActive={false} disabled />
        <ToolbarToggleButton icon={IoIosApps} isActive={true} disabled />
      </Stack>
      <Stack direction="row" bg="n.100" p={1}>
        <ToolbarScratchButton isScratchActive={false} />
        <ToolbarScratchButton
          title="Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions."
          isScratchActive={true}
        >
          <ToolbarToggleButton
            id="pencil-btn"
            title="Pencil. Turns on write mode. This lets you write on the screen."
            size="sm"
          />
          <ToolbarToggleButton
            id="highlighter-btn"
            title="Highlighter. Turns on highlight mode. This lets you highlight parts of the screen."
            size="sm"
          />
          <ToolbarToggleButton
            id="eraser-btn"
            title="Eraser. Turns on erase mode. This lets you erase any of your drawings and highlights."
            size="sm"
          />
          <ToolbarButton
            id="clear-scratch-btn"
            title="Clear Scratchwork. Clears all scratchwork on the screen."
            size="sm"
          />
        </ToolbarScratchButton>
      </Stack>
      <Stack direction="row" bg="n.100" p={1}>
        <ToolbarTimerButton isTimerActive={false} />
        <ToolbarTimerButton isTimerActive={true} />
      </Stack>
    </Stack>
  );
});