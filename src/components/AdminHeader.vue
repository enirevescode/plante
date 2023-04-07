<template>
   <div class="head">
      Header Admin
      <button @click="logout()">Logout</button>
   </div>
</template>

<script>
// pr stopper la connexion et supprimer le token :
import { accountService } from '@/_services'

export default {
   name: 'AdminHeader',
   methods:{
      logout(){
         accountService.logout()
         this.$router.push('/')
      }
   }
}
</script>

<style>
   .head {
      display: block !important;
      color: black;
      border-bottom: solid 1px green;
      font-size: xx-large;
   }

   button{
      float: right;
   }

</style>