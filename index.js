const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
  console.log('event: ', event);
  let bucketName = event.Records[0].s3.bucket.name;
  let key = event.Records[0].s3.object.key;
  let image = await s3.getObject({ Bucket: bucketName, Key: key }).promise();
  console.log('image:', image);

  let stringifiedImage = image.Body.toString();
  let myImage = JSON.parse(stringifiedImage);
  console.log('my image: ', myImage);
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};