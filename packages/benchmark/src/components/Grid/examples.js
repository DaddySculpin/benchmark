import React from 'react';
import { Text } from '../Base';
import Stack from '../Stack';
import Grid from './Grid';

export function GridCheckboxes() {
  return (
    <Stack>
      <Grid>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <Text>Text</Text>
              </th>
              <th>
                <Text>Text</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Text>Lorem ipsum dolor sit amet.</Text>
              </td>
              <td>
                <Grid.Checkbox inputId="1A" />
              </td>
              <td>
                <Grid.Checkbox inputId="1B" />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Consectetur adipiscing elit.</Text>
              </td>
              <td>
                <Grid.Checkbox inputId="2A" />
              </td>
              <td>
                <Grid.Checkbox inputId="2B" />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Aenean commodo ligula eget dolor.</Text>
              </td>
              <td>
                <Grid.Checkbox inputId="3A" />
              </td>
              <td>
                <Grid.Checkbox inputId="3B" />
              </td>
            </tr>
          </tbody>
        </table>
        <Grid.ClearButton>Clear Answer</Grid.ClearButton>
      </Grid>
    </Stack>
  );
}

export function GridRadioButtons() {
  return (
    <Stack>
      <Grid>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <Text>Text</Text>
              </th>
              <th>
                <Text>Text</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Text>Lorem ipsum dolor sit amet.</Text>
              </td>
              <td>
                <Grid.Radio inputId="A1" groupId="A" />
              </td>
              <td>
                <Grid.Radio inputId="A2" groupId="A" />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Consectetur adipiscing elit.</Text>
              </td>
              <td>
                <Grid.Radio inputId="B1" groupId="B" />
              </td>
              <td>
                <Grid.Radio inputId="B2" groupId="B" />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Aenean commodo ligula eget dolor.</Text>
              </td>
              <td>
                <Grid.Radio inputId="C1" groupId="C" />
              </td>
              <td>
                <Grid.Radio inputId="C2" groupId="C" />
              </td>
            </tr>
          </tbody>
        </table>
        <Grid.ClearButton>Clear Answer</Grid.ClearButton>
      </Grid>
    </Stack>
  );
}
