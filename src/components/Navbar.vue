<template>
 <nav>
   <img v-bind:src="require('@/assets/logo.png')" />
   <router-link to="/">ACCUEIL</router-link> |
   <router-link to="/Nosbest">NOS MEILLEURES VENTES</router-link> |
   <router-link to="/Nosplantes">NOS PLANTES</router-link> |
   <router-link to="/Contact">Contact</router-link> |
   <router-link to="/admin/Dashboard">Admin</router-link>
 </nav>
</template>

<script>
  export default {
   name: 'Navbar'
  }
</script>

<style>
nav {
   font-weight: 300;
   font-size:xx-large;
}

nav a {
   color: #add981;
   text-decoration: none;
}

img {
   width: 150px;
   height: 120px;
   margin-top: 70px;
   margin-left: 85px;
}
</style>