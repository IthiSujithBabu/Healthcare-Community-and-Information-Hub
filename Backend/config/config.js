var { credential } = require("firebase-admin");
const { initializeApp: initializeAdminApp } = require("firebase-admin/app");
const { getAuth: getAdminAuth } = require("firebase-admin/auth");
const { getFirestore } = require("firebase-admin/firestore");

var serviceAccount = require("../serviceAccountKey.json");

const adminApp = initializeAdminApp({
  credential: credential.cert(serviceAccount),
});
const adminAuth = getAdminAuth(adminApp);
const firestore = getFirestore();

module.exports = { adminAuth };
