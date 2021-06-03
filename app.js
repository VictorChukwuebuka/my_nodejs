//pipe chaining:create zip file:(shorter way of creating a new file and 
//transfering the content of the old file to new one)
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('./exapmle2.txt.gz')
readStream.pipe(gzip).pipe(writeStream);


//Create unzip
const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./exapmle2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt')
readStream.pipe(gunzip).pipe(writeStream);
