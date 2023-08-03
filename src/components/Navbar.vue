<template>
  
   <div>
      <v-toolbar :color="'green-lighten-4'" dark prominent height="150">
         <v-app-bar-nav-icon></v-app-bar-nav-icon>


         <v-toolbar-title><img v-bind:src="require('@/assets/logo.png')"
               alt="logo" /></v-toolbar-title><v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h5" to="/">ACCUEIL</router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h5" to="/Nosbest">NOS MEILLEURES VENTES</router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h5" to="/Nosplantes">NOS PLANTES</router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn>
            <router-link class="text-h5" to="/Contact">Contact</router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn icon>
            <router-link to="/admin/Dashboard"><v-icon class="text-h4" icon="$admin"></v-icon></router-link>
         </v-btn>
         <v-spacer></v-spacer>
         <v-btn icon>
            <router-link to="/login"><v-icon class="text-h4" icon="$connexion"></v-icon></router-link>
         </v-btn>
         <v-spacer></v-spacer>
      </v-toolbar>
   </div>
</template>

<script>

export default {
   name: 'Navbar',
}
</script>

<style>
nav {
   font-weight: 300;
   font-size: xx-large;
}

nav a {
   color: #add981;
   text-decoration: none;
}

a {
   color: #1B5E20;
   cursor: pointer;
   text-decoration: none;
}

img {
   width: 130px;
   height: 100px;
}
</style>