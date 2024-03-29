const admin = require('../services/firebase');

const checkIfAuthenticated = async (req, res, next) => {
    try {
        const {authToken} = req;
        const userInfo = await admin.auth().verifyIdToken(authToken);
        req.authId = userInfo.uid;
        next();
        
    } catch (err) {
        return res.status(401).json({
            error,
        })
    }
};

module.exports = checkIfAuthenticated;