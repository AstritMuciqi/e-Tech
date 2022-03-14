const admin = require('../services/firebase');
const setUserRole = require('../utils/setUserRole');
const registerUserSchema = require('../validator/userValidation/registerUserSchema'); 


const earlySupporters = ['bob@test.com'];

const userController = {
    register: async(req, res) => {

        const validationResult = registerUserSchema.validate(req.body)

        if(validationResult.error){
            return res.status(400).json({error: validationResult.error});
        }

        //register user
        const {email, password} = req.body;
    
        try{
        const user = await admin.auth().createUser({
            email,
            password
        })
    
        // check if it should be an admin
        if(user.email && user.email.includes('ubt-uni.net')) {
            setUserRole(user, { admin: true });
        }
        if(earlySupporters.includes(user.email)) {
            setUserRole(user, { earlySupporter: true });
        }
    
        return res.json({user});
    }catch(error){
        return res.status(403).json({ error: error.message });
    }
  }
}
module.exports = userController;


