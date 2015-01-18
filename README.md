Description
-----------

This is minimum starter code for my front-end TypeScript projects. It is targeted toward complex front end object-oriented applications.

Set Up
------
Run the following:

`npm install`
  
to install project dependencies

And then:

`npm run-script run`

To compile all TypeScript, and launch a python SimpleHTTPServer in the src directory. You can instead run:

`npm run-script make`

To just compile all TypeScript.

GitIgnore
---------

The project is initially setup to ignore common ide files, and built JavaScript / map files. JavaScript files in the `src/js/vendor` directory are not ignored.

Development Style
-----------------

The application development style I follow is similar to many Java applications:

- Every class resides in their own TypeScript file
- Every class TypeScript file ends with an `export = ClassName;` statement to make itself available for import
- Every class that depends on another class, imports that class via `import ClassName = require('/path-to-class/ClassName');`
- Every class TypeScript file is named as `ClassName.ts`
- There is a single entrypoint class which is required and constructed by `bootstrap.ts`
- `bootstrap.ts` can be thought of the equivalent to Java's `public static void main(...) {}`