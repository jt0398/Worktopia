const db = require("../models");
var md5 = require("md5");

module.exports = {
  upload: function(req, res, next) {
    console.log("Going to upload");
    let uploadFile = req.files.file;
    const name = uploadFile.name;
    const md5Extension = md5(name);
    const saveAs = `${md5Extension}_${name}`;
    console.log(saveAs);
    uploadFile.mv(`${__dirname}/public/files/${saveAs}`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).json({ status: "uploaded", name, saveAs });
    });
  }
};
