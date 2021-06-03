//File system 2(creating a folder)
fs = require('fs');
fs.mkdir('my node js folder', (err)=>{
    if(err)
    console.log(err);
    else
    console.log('My node js folder successfully created');
        
})

//Delete a folder
fs.rmdir('my node js folder',(err)=>{
    if (err)
    console.log(err);
    else
    console.log('folder successfully deleted')
});