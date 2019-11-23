const db = require("../models");
const aws = require("aws-sdk");
const s3 = new aws.S3();
const fs = require("fs");

module.exports = {
  upload: function(req, res, next) {
    let uploadFile = req.files.file;
    fs.readFile(uploadFile.tempFilePath, (err, uploadedData) => {
      if (err) {
        throw err;
      }
      let body= fs.createReadStream(uploadFile.tempFilePath);

      const s3PutParams = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: uploadFile.name,
        Body: body,
        ACL: "public-read"
      };

      const s3GetParams = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: uploadFile.name
      };

      s3.putObject(s3PutParams, function(err, response) {
        if (err) {
          console.error(err);
        } else {
          var url = s3.getSignedUrl("getObject", s3GetParams);
          res.json({
            publicUrl: `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${uploadFile.name}`
          });
        }
      });
    });
  }
};
