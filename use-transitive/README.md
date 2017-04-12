This example attempts to use a custom eyeglass module with a transitive eyeglass module dependency.

`npm run sass` uses node-sass with eyeglass-wrapped options to compile the Sass sample file.

It appears that eyeglass doesn't handle transitive dependencies seamlessly, possibly requiring you to list as direct dependencies all the transitive dependencies of any Sass eyeglass module you use.

Or not. Make sure:

1. (Maybe??) You aren't using a `file:` dependency.
2. Your direct dependency with a transitive dependency has the dependency listed in `dependencies` **not** `devDependencies`.
