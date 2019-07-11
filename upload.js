//// Express server is limited in understanding formats.
//// The library formidable parses the multipart/form-data format. 

//// File with upload functionality.

//// Class called IncomingForm from the formidable library.

const IncomingForm = require('formidable').IncomingForm;

const fs = require('fs');

//// Function that is called everytime users hits the '/upload' URL. 
//// It is a call back function that gives us a request-object(req), 
//// that stores information about the request that hit the route.
//// We also get a response-object (res). This objects is used to send back a response. 


module.exports = function upload(req, res) {
   //// New form is created.
    var form = new IncomingForm();

    let readStream;

    //// registering callbacks. Called for every file in the form. 
    form.on('file', (field,file) => {
        // Do something with the file
        // e.g. save it to the database
        // you can access it using file.path

        //// Rigth now the uploaded files are stored in a temporary directory on my machine. 
        //// To do something with them, copy them from there using the node.js file-system API.
    
        console.log('file', file.name);
        readStream = fs.createReadStream(file.path);

    });

    //// fcallback when the file is completely parsed. 

    form.on('end', () => {
        res.json();
    });

    //// Trigger parsing of form. 
    form.parse(req);

};

