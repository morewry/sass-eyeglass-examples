This example attempts to use a custom eyeglass module with a transitive eyeglass module dependency.

`npm run sass` uses node-sass with eyeglass-wrapped options to compile the Sass sample file.

It appears that eyeglass doesn't handle transitive dependencies seamlessly, requiring you to list as direct dependencies all the transitive dependencies of any Sass eyeglass module you use.
