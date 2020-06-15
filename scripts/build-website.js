const fs = require('fs-extra');

// This script copies all the benchmark sites into a single
// folder for publishing. Ensure that the latest sites are
// built by running "yarn build" in the project root.
async function main() {
  // clean dist
  await fs.remove('./dist');

  // copy
  await fs.copy('./packages/docs/public', './dist');
  await fs.copy('./packages/storybook/dist', './dist/storybook');
  await fs.copy('./packages/playroom/dist', './dist/playroom');
}

main();
