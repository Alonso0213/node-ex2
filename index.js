const person = require ('./person')
console.log(person.Person);

const http = require('http')
const port = ++process.env.Port || 3000

// create a web server 
http.createServer((req,res)=>{
    res.end('firstName,lastName,Email')
}).listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})