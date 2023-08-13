const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

if (!admin.apps.length) { // Only initialize if not already initialized
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

module.exports = admin;