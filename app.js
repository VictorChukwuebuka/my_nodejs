//pipes and pipe chaining(shorter way of creating a new file and 
//transfering the content of the old file to new one)
const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('./exapmle2.txt')
readStream.pipe(writeStream);
