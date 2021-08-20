//const chalk = require('chalk');
//const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
    //console.log('Listing out all notes');
    notes.listNotes();
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});
yargs.parse();
//console.log(chalk.italic.bold.green.bgMagenta('SUCCESS'));
//console.log(process.argv);
//const command = process.argv[2];
//if (command === 'add'){
//console.log('adding notes');
//}
//else if (command === 'remove'){
// console.log('removing notes');
//}
//console.log(chalk.italic.bold.red('ERROR'));
//const getNotes = require('./notes.js');
//const validator = require('validator');
//getNotes();
//console.log(validator.isEmail('abcd@gmail.com'));
//console.log(validator.isURL('http://abcdgmail.com'));
//const add = require('./utils.js');
//const sum = add (8 , -4);
//console.log(sum);
