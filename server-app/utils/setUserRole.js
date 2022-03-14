const admin = require('../services/firebase');

const dtb = admin.firestore();

module.exports = function setUserRole(user, newClaims) {
    admin.auth().setCustomUserClaims(user.uid, newClaims);

    dtb.collection("roles").doc(user.uid).set({
        email: user.email,
        role: newClaims
    });
}