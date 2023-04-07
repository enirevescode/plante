<template>
   <v-form @submit.prevent="login">
      <v-card class="mx-auto mt-12" max-width="344" title="Connexion">
         <v-container>

            <v-text-field v-model="user.email" color="primary" label="Email" variant="underlined"
               prepend-inner-icon="$email"></v-text-field>

            <v-text-field v-model="user.password" label="mot de passe" prepend-inner-icon="$password" color="primary"
               variant="underlined"></v-text-field>

           <!--  <v-checkbox v-model="terms" color="secondary" label="I agree to site terms and conditions"></v-checkbox> -->
         </v-container>

         <v-divider></v-divider>

         <v-card-actions>
            
            <v-btn
            color="success"
            variant="text"
            type="submit"
          >          
            Connexion
            <v-icon  color="success" icon="$connexion" end></v-icon>
         </v-btn>
          <v-spacer></v-spacer>
            <v-btn icon>
               <router-link to='/'><v-icon color="warning" icon="$fermer"></v-icon></router-link>                  
            </v-btn>
         </v-card-actions>
      </v-card>
   </v-form>
   
</template>

<script>
import { accountService } from '@/_services'
export default {
   name: 'Login',
   data() {
      return {
         user: {
            email: '',
            password: '',
         }
      }
   },
   // la méthode fetch pose pb car modifier ttes les url du site plombe la maintenabilité de celui-ci. best use axios
   methods: {
      login() {
         console.log(this.user);
         accountService.login(this.user)
            .then(res => {
               accountService.saveToken(res.data.access_token)
               this.$router.push('/admin/dashboard')
            })
            .catch(err => console.log(err))

      }
   }
}
</script>

<style>
form {
   max-width: 300px;
   margin: 0 auto;
}

.formGroup {
   display: flex;
   justify-content: space-between;
   margin-bottom: 8px;
}
</style>