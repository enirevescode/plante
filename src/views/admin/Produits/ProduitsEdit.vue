<template>
   <div>
      <h1>Ajouter 1 produit à la base</h1>

      <form @submit.prevent="ajout">

         <div class="formGroup">
            <label for="produit_nom">Nom</label>
            <input type="text" id="produit_nom" v-model="produit.nom" />
         </div>
         <div class="formGroup">
            <label for="produit_description">Description</label>
            <input type="text" id="produit_description" v-model="produit.description" />
         </div>
         <div class="formGroup">
            <label for="produit.prix">Prix</label>
            <input type="text" id="produit.prix" v-model="produit.prix" />
         </div>
         <div class="formGroup">
            <button type="submit" class="button">Ajouter le produit</button>
         </div>
      </form>
   </div>
</template>

<script>
import { produitService } from '@/_services';
import { accountService } from '@/_services';
export default {
   name: 'ProduitsEdit',
   data() {
      return {
         produit: {
            user_id: 0,
            nom: '',
            description: '',
            prix: ''
         }
      }
   },
   methods:{
      ajout(){
        console.log(accountService.getToken())
         produitService.createProduit(this.produit)
            .then(res => this.$router.push({name: 'pList'}))
            .catch(err => console.log(err))
      }
   }
}

</script>

<style></style>
