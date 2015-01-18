Description
-----------

This is starter code for a front-end TypeScript project. It is targeted toward complex front end object-oriented applications.

Set Up
------
Run the following:

`npm install`
  
to install project dependencies

And then:

`npm run-script make`

To make all TypeScript

Development Style
-----------------

The application development style I follow is similar to many Java applications:

- Every class resides in their own TypeScript file
- Every class TypeScript file ends with an `export = ClassName;` statement to make itself available for import
- Every class that depends on another class, imports that class via `import ClassName = require('/path-to-class/ClassName');`
- Every class TypeScript file is named as `ClassName.ts`
- There is a single entrypoint class which is required and constructed by bootstrap.ts