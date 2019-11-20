const db = require("../models");
const aws = require("aws-sdk");
const s3 = new aws.S3();

module.exports = {
  upload: function(req, res, next) {
    console.log("Going to upload");
    console.log(req.files);
    let uploadFile = req.files.file;
    const s3PutParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: uploadFile.name,
      Body: uploadFile.data,
      ACL: "public-read"
    };

    const s3GetParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: uploadFile.name
    };

    console.log(s3PutParams);
    s3.putObject(s3PutParams, function(err, response) {
      if (err) {
        console.error(err);
      } else {
        console.log("Response is", response);
        var url = s3.getSignedUrl("getObject", s3GetParams);
        console.log("The URL is", url);
        res.json({
          returnedUrl: url,
          publicUrl: `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${uploadFile.name}`
        });
      }
    });
  } 
};
