const admin = require('firebase-admin');

const serviceAccount = require('../credentials/e-tech-a48a8-firebase-adminsdk-psdnq-69291a5d87.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;