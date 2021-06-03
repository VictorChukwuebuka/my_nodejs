//File system 2(creating a folder a folder and a file inside the folder)
fs = require('fs');
fs.mkdir('my node js folder', (err)=>{
    if(err)
    console.log(err);
    else
    fs.writeFile('./my node js folder/nodejs.txt','I created this file inside my folder', (err)=>{
        if (err)
        console.log(err);
        else
        console.log('The file nodejs.txt successfully created')
    });
        
});

//Deleting a folder with a file inside it
fs.unlink('./my node js folder/nodejs.txt',(err)=>{
    if (err)
    console.log(err);
    else
    fs.rmdir('my node js folder', (err)=>{
        if (err)
        console.log(err);
        else
        console.log('file and folder successfully deleted');
    });
});