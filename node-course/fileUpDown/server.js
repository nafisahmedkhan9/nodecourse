var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
//app.use(express.static(path.join(__dirname, '\\uploads')));
//app.use(__dirname+'\\uploads', express.static('uploads'));

app.use(bodyParser.urlencoded({
  extended: false
})); //for encoded request

app.use(bodyParser.json()); // for json request

app.use(bodyParser.text()); // for text/html

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui.html'));
});
app.get('/download', function(req, res) {
  var filename = req.query.filename;
  console.log("Bodydata : " + filename + " DataType : " + typeof filename);
  /*res.setHeader('Content-disposition', 'attachment; filename=document.pdf');
  res.setHeader('Content-type', 'application/pdf');*/
  res.download(__dirname + '\\uploads\\' + filename, function(err) {
    if (err) {
      res.send("error with file");
    } else {
      console.log('success');
    }
  });
});
app.post('/upload', function(req, res) {
  // create an incoming form object
  var form = new formidable.IncomingForm();
  console.log('Formdata  : ' + JSON.stringify(form));

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/uploads');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    console.log('working');
    console.log("Field :  " + field);
    console.log("file :  " + JSON.stringify(file));
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });
  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });
  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    console.log('success');
  });
  // parse the incoming request containing the form data
  form.parse(req);
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});