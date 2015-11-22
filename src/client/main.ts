// browserify.js (our library that clumps together all these javascript files)
// needs a "main file" to derive all dependencies from and package up.
// This is that file.

/// <reference path="../common/def/node.d.ts"/>

var React: any = require('react');
var AppComponent: any = require('./component/AppComponent.jsx');

React.render(
    React.createElement(AppComponent),
    document.getElementById('content')
);