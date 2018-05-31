
//Reading a File Asynchronously using nodejs
/*
var fs=require('fs');

fs.readFile('Day2.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content :  " + data);
});

*/ 

//Reading a File Synchronously using node.js

var fs = require('fs');
var filename = 'Day2.txt'; //Name of the file to be read
var content = fs.readFileSync(filename);
console.log('Content : ' + content);

//Writing a File Synchronously using node.js

var fs = require('fs');

var content = "We are writing this file synchronously using node.js .";

fs.writeFileSync('content.txt', content);
console.log("File Written Successfully");


//file append operation in nodejs
var fs = require('fs');
var content = " We are Appending this file synchronously using node.js";
fs.appendFileSync('content.txt', content);
console.log("File Appended Successfully");

//you have to pass the Relative path of the file from the Current working directory.
fs.renameSync('input.txt', 'newData.txt');
console.log('File renamed successfully');

// Deleting the file Synchronously.
var fs = require('fs');
var filename = 'newData.txt';
fs.unlinkSync(filename);
console.log('File Deleted Successfully');
									
									
									
									