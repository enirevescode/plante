/*ce fichier gère la connection, le token,...*/

// import des modules necessaires qui remplace la méthode fetch
import Axios from './caller.service'

let login = (credentials) => {
   return Axios.post('/auth/login', credentials)
}

// définir la fonction logout

let logout = () => {
   localStorage.removeItem('token')
}

let getToken = () => {
   return localStorage.getItem('token')
}

// save token qd on se connecte
let saveToken = (token) => {
   localStorage.setItem('token', token)
}

// méthode pr vérif si je suis connectée ou pas
let isLogged = () => {
   let token = localStorage.getItem('token')
   return !!token // !! transforme 1 variable de caratères en boléen notnottoken si y a rien met true
}

export const accountService = {
   login,
   logout,
   saveToken,
   getToken,
   isLogged
}