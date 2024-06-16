import { generaToken } from "../../auth/index.js"
import { checkToken } from "../../auth/index.js"

function checkAuthentication (){
   return function middleware (req, res, next) {
        const id =  req.body.id
        checkToken.confirmToken(req, id)
        next()
    }
}


export {checkAuthentication}