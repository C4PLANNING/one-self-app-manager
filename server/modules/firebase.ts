const admin = require("firebase-admin");
if (!!process.env.CREDENTIAL_PATH) {
  const path = `${process.env.CREDENTIAL_PATH}`;
  console.info(`CREDENTIAL_PATH: ${process.env.CREDENTIAL_PATH}`);
  admin.initializeApp({
    credential: admin.credential.cert(path),
    databaseURL: "https://matching-app-sa.firebaseio.com/",
  });
} else {
  console.error(`Error: credential file is not found`);
}

export default admin;
