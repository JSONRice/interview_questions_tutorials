var fs = require('fs');

FileUploadController = function () {
};

FileUploadController.prototype.uploadFile = function (req, res) {
  // We are able to access req.files.file thanks to 
  // the multiparty middleware
  var file = req.files.file;
  fs.writeFile("/media/images/" + file.name, file, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file: " + file.name + " was saved!");
  });
};

module.exports = new FileUploadController();
