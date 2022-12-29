const {user} = require("../../db/handlers");
const logger = require("../../logger");
const jsonwebtoken = require("jsonwebtoken");
const { TOKEN_EXPIRY, TOKEN_CONFIG } = require("../../lib/constants");
const bcrypt = require ('bcrypt');

const config = require("../../config");


const createUser = async(initObj)=>{

    const modifiedPwd = modifyPwd(initObj.password);
    initObj.password = modifiedPwd;
    const userFromDb = await user.create(initObj);
    logger.info("user created !")
    return;
}

const performLogin = async({email,pwd})=>{

const userFromDb = await getUser(email);
if(bcrypt.compareSync(pwd,userFromDb.password)){

 const token = await createToken(userFromDb.id);
 
 return {
    token,
    email:userFromDb.email
 }

}
   



}

const getUser = async(email,cols=[])=>{
    const userFromDb = await user.findOne({email},cols);
    logger.info("user fetched !")
    return userFromDb;
}

const createToken=(identifier)=>{

const payLoad = {
    userId: identifier,
    ...TOKEN_CONFIG
}
const token = jsonwebtoken.sign(payLoad,config.get("/jwt/secret"));
return token;
}

const modifyPwd= (pwd)=>{
    
    return modifiedPwd = bcrypt.hashSync(pwd,10);
}

const getProfile=async(email)=>{
return (await getUser(email,['name','id','email']));
}

module.exports = {
    createUser,
    getUser,
    createToken,
    modifyPwd,
    performLogin,
    getProfile
}


