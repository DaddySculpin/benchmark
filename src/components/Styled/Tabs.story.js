import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from './Global.js';
import ThemeProvider from './ThemeProvider.js';

import { Tabs, Tab, TabsList } from './Tabs.js';
import { Box, Flex } from './Base';

storiesOf('Styled System', module).add('Tabs ', () => {
  let [selectedTab, setSelectedTab] = useState(0);

  return (
    <Global>
      <ThemeProvider>
        <Flex flexDirection="column" width="100%">
          <Box>
            <Tabs activeTab={selectedTab} onChange={setSelectedTab}>
              <TabsList>
                <Tab>1</Tab>
                <Tab>2</Tab>
                <Tab>3</Tab>
                <Tab>4</Tab>
                <Tab>5</Tab>
                <Tab>Review</Tab>
              </TabsList>
            </Tabs>
          </Box>
        </Flex>
      </ThemeProvider>
    </Global>
  );
});
