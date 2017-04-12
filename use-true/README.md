This example attempts to use true as an eyeglass module in two ways.

1. `npm run true` uses mocha and true with eyeglass-wrapped options to compile the Sass test file. The tests run successfully, but only (so far as I can tell) because true adds itself to the `importPaths` after the options are passed on.

2. `npm run eyeglass` uses node-sass with eyeglass-wrapped options to compile the Sass test file. The tests error when trying to import true.
