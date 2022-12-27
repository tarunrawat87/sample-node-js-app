
const BaseController = require("../base");
const controller = require("./controller")
class UserApi extends BaseController {

constructor(){
super("/api/v1/user");
}

init(){
    this._router.post("/login",controller.getUser)
}

}

module.exports= new UserApi();