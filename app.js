//1.modules
/*const { SomeMathObject } = require('./tutorial');
const tutorial = require('./tutorial');


console.log(tutorial.sum(15,11));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());*/


//2. Event module
/*const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2) => {
    console.log('The sum of two numbers are ' + (num1 + num2));
});


eventEmitter.emit('tutorial',20,11);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let Victor = new Person('Chukwuebuka');
let chidi = new Person('Kruga');
let chidimma = new Person('Wifi')
let chukwudi = new Person('Nwatakwocha')

chukwudi.on('name',()=>{
    console.log("Chidi's boss A.K.A " + chukwudi.name);
})
chidimma.on('name',()=>{
    console.log('Chidimma is populary known as ' + chidimma.name);
})
chidi.on('name',()=>{
    console.log('Chidi Ede is also known as ' + chidi.name);
})
Victor.on('name', ()=>{
    console.log('my name is ' + Victor.name);
})

Victor.emit('name');
chidi.emit('name');
chidimma.emit('name');
chukwudi.emit('name');
*/



//3.Readline module
/*const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
                           output: process.stdout})
let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }? \n`,
(userInput)=>{
    if (userInput.trim() == answer){
        rl.close();
    } else {
        rl.setPrompt('Wrong input response please try again \n');
        rl.prompt();
        rl.on('Line',()=>{
            if(userInput.trim() == answer)
            rl.close();
            else{
                rl.setPrompt(`Your input + ${userInput} + is incorrect please try again \n`);
                rl.prompt();
            }
        })

    }
})

rl.on('close', ()=>{
    console.log('Correct!!!');
}); */




//File system module
//Create a file
const fs = require('fs');
fs.writeFile('tutorial.txt', 'An example of how to create files',(err)=>{
    if (err)
    console.log(err);
    else{
        console.log('File successfully created');

// Read a file
        fs.readFile('tutorial.txt','utf8',(err,file)=>{
            if(err)
            console.log(err);
            else
            console.log(file);
        });
    }
});


//Rename a file
fs.rename('tutorial.txt', 'example.txt',(err)=>{
    if (err)
    console.log(err);
    else
    console.log('File successfully renamed');
});


//Append a file(updating a file)
fs.appendFile('example.txt','. Appending data to example.txt file',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully appended data to the file');
});
 
//Delete a file
fs.unlink('example.txt', (err)=>{
    if(err)
    console.log(err);
    else
    console.log('File successfully delete');
});