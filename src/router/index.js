import { createRouter, createWebHistory } from 'vue-router'

//ceci permet d'importer tout nouveau fichier
import * as Public from '@/views/public'
import * as Admin from '@/views/admin'
import Login from '@/views/auth/login.vue'
import { authGuard } from '@/_helpers/auth-guard'


const routes = [
  {
    path: '/',
    name: 'PublicLayout',
    component: Public.PublicLayout,
    children: [
      { path: '/Nosbest', name: 'Nosbest', component: Public.Nosbest },
      { path: '/Nosplantes', name: 'Nosplantes', component: Public.Nosplantes },
      { path: '/Contact', name: 'Contact', component: Public.Contact },
    ]
  },
  
{
    path: '/admin',
    name: 'AdminLayout',
    component: Admin.AdminLayout,
      children: [
        {path: 'Dashboard', name: 'Dashboard', component: Admin.Dashboard},
        {path: 'Users/UserAdd', name: 'UserAdd', component: Admin.UserAdd},
        {path: 'Users/UserEdit/:id(\\d+)', name: 'uEdit', component: Admin.UserEdit, props: true},
        {path: 'Users/UserIndex', name: 'uList', component: Admin.UserIndex},
        
        {path: 'Plantes/PlantesEdit', name: 'PlantesEdit', component: Admin.PlantesEdit, props: true},
        {path: 'Plantes/PlantesIndex', name: 'PlantesIndex', component: Admin.PlantesIndex},
        {path: '/:pathMatch(.*)*', redirect: '/admin/dashboard'}
        ]
},
{    path: '/login', name: 'Login', component: Login },
{    path: '/:pathmatch(.*)*', component: Public.notfound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//beforEach pr close les routes child d'admin (token)
router.beforeEach((to, from, next) => {
 if(to.matched[0].name == 'admin'){
   authGuard()
  }
  next()
})


export default router