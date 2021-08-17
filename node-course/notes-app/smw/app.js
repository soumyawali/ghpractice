const yargs = require('yargs');
//const chalk = require ('chalk');
//console.log(chalk.italic.bold.green.bgMagenta('SUCCESS'));
//console.log(process.argv);

//const command = process.argv[2];
//yargs.version('7.19.1');
//customise yargs version
yargs.version('1.1.0');
//create add command
yargs.command({
  command: 'add',
  describe: 'add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    console.log('Title:'+argv.title);
  }
});
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: function(){
    console.log('removing a new note!');
  }
});
yargs.command({
  command: 'list',
  describe: 'list a note',
  handler: function(){
    console.log('listing a new note!');
  }
});
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: function(){
    console.log('reading a new note!');
  }
});
console.log(yargs.argv);

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
