This example attempts to use a custom eyeglass module with a transitive eyeglass module dependency.

`npm run sass` uses node-sass with eyeglass-wrapped options to compile the Sass sample file.

Make sure your direct dependency with a transitive dependency has the dependency listed in `dependencies` **not** `devDependencies`; otherwise this doesn't work.
