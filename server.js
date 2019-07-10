//// Express is a framework that makes creating API very easy.

const express = require('express');

//// Configuration of route for the file upload. 

const upload = require('./upload');

//// We want to access the API from an angular application.
//// CORS module enables that the server allows cross-origin request. 

const cors = require('cors');


const server = express()

//// Configuration to allow any domain by creating an option-object. 

var corsOption = {
    origin: '*',
    optionsSuccessStatus: 200,
}

//// Tell express server to use the cors-middleware with the specified configuartion. 

server.use(cors(corsOption));

//// Configuring a route for the file upload. 
//// Registering a route with the HTTP-post method. 

server.post('/upload', upload);

//// Start server using command line $ node server.js

server.listen(8000, () =>{
 console.log('Server started!')
})

//// domain 8000 is already active using the express framework. 
//// May change to specific local domain such as 3000. 