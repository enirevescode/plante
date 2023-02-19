<template>
<div>
  <ul>
         <li><router-link to='/'>Accueil</router-link></li>
         <li>&nbsp;</li>
         <li><router-link to='/admin/Dashboard'>Dashboard</router-link></li>
         <li>&nbsp;</li>
         <li><router-link to='/admin/Users/UserIndex'>User list</router-link></li>
         <li><router-link to='/admin/users/UserAdd'>User add</router-link></li>
         <li>&nbsp;</li>
         <li><router-link to='/admin/Plantes/PlantesIndex'>Plantes list</router-link></li>
         <li><router-link to='/admin/Plantes/PlantesEdit'>Plantes add</router-link></li>
  </ul>
</div>
</template>

<script>
  export default {
   name: 'AdminNavbar'
  }
</script>

<style>
ul{
        list-style: none;
        padding-left:50px;
        margin-right:10px;
        margin-top: 50px;
    }
    ul li{
        text-align:left;
        color: green;
        font-size: xx-large;
    }
</style>