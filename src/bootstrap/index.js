const path = require("path");
const glob = require("glob")
const logger = require("../logger");
const app = require("../app")
async function bootstrapApis(){
  const apiPath = path.join(__dirname,"../api/")
  console.log(apiPath);
const paths = glob.sync("**/index.js",{cwd:apiPath,absolute:true});

paths.forEach((path)=>{
const controller = require(path)
controller.init();
logger.info(`${controller.path} loaded`);
})

}

module.exports=bootstrapApis;