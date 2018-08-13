console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


// console.log( process.argv );// no longer necessary


console.log(yargs.argv);


const argv = yargs.argv;   // used yargs instead of process.argv to create an object from CL inputs
const command = argv._[0]; // we grabbed the first item in the array


if ( command === 'add') {
    notes.addNote( argv.title, argv.body );
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('command NOT recognized')
}


