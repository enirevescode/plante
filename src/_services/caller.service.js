//fichier qui va gérer axios qui dispose d'outils + adaptés pr gérer la com avec api et le système d'authentification
//c'est 1 client web
/* import des modules né<cessaires*/

import axios from 'axios'
import { accountService} from '@/_services'
import router from '@/router'

const Axios = axios.create({
   baseURL: 'http://localhost:8989'
})

// Interceptors pr injection du token
Axios.interceptors.request.use(request => {
   //Si connecté on ajoute le token ds l'entête
   if(accountService.isLogged()) {
         request.headers.Authorization = 'Bearer'+ accountService.getToken()
      }
      return request
})

// Intercepter les réponses de l'APi
Axios.interceptors.response.use(response =>{
   return response
}, error => {
   console.log(error)
   
   if(error.response.status == 401){
      accountService.logout()
      router.push('/login')
   }
})

export default Axios