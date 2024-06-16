import jwt from "jsonwebtoken"
import { config } from "../config.js"

const secret = config.app.secret.jwt

function generaToken(data){
    return jwt.sign(data, secret)
    
}


function TokenVerific (token, ){
    return jwt.verify(token, secret)
}

const checkToken = {confirmToken: function(req, id){
    const decoded = decodedHeader(req)
    if(decoded.id !== id){
        throw new Error("No tienes permiso para hacer esto")
    }
}

}
function getToken(authorization){
    if (!authorization) {
        throw new Error("no hay token")
    }
    if (authorization.indexOf('Bearer') === -1){
        throw new Error("Formato invalido")
    }
    let token = authorization.replace('Bearer ', '')
    return token

}





function decodedHeader(req){
 const authorization = req.headers.authorization || ""
 console.log(authorization);
 const token = getToken(authorization)
 const decoded = TokenVerific(token)

 req.user = decoded
 return decoded
}
export {generaToken, checkToken}