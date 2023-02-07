class UserController{
    constructor(){}

    home(req, res){
        let pageData = {
            title: "home page",
            pageName: "home",
        }
        res.render("template", pageData);
    }


}
module.exports = new UserController()