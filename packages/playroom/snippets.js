export default [
  {
    group: 'Button',
    name: 'Primary',
    code: `
      <Button variant="primary">
        Primary Button
      </Button>
    `
  },
  {
    group: 'Toolbar',
    name: 'Default',
    code: '<Toolbar />'
  },
  {
    group: 'Single Select',
    name: 'Single Select',
    code: `
      <SingleSelect>
          <SingleSelectChoice>Option A</SingleSelectChoice>
          <SingleSelectChoice>Option B</SingleSelectChoice>
          <SingleSelectChoice>Option C</SingleSelectChoice>
        </SingleSelect>
    `
  },
  {
    group: 'Text Input',
    name: 'Text Input',
    code: `
          <Box width="500px">
            <TextInput/>
          </Box>
          `
  },
  {
    group: 'Layouts',
    name: '2 Column',
    code: `
        <Columns>
          <Column>Column 1</Column>
          <Column>Column 2</Column>
        </Columns>
    `
  },
  {
    group: 'Layouts',
    name: '3 Column',
    code: `<Columns>
          <Column>Column 1</Column>
          <Column>Column 2</Column>
          <Column>Column 3</Column>
        </Columns>`
  },
  {
    group: 'Typography',
    name: 'Paragraph',
    code: '<Paragraph>Paragraph Text</Paragraph>'
  }
];
