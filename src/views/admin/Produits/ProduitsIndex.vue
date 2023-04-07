<template>
   <div>
      <h1>Liste des produits ({{ comptage }})</h1>
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Prix</th>
                    <th>Création</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(produit, index) in produits" :key="produit.id">
                    <td><span class="del_btn" @click="del(index)">X</span></td>
                    <td>{{ produit.id }}</td>
                    <td class="edit" @click="goEdit(produit.id)">{{ produit.nom }}</td>
                    <td>{{ produit.description }}</td>
                    <td>{{ produit.prix }}</td>
                    <td>{{ dateFormat[index] }}</td>
                </tr>
            </tbody>
        </table>
   </div>
</template>

<script>
import { produitService } from '@/_services'
export default {
   name: 'ProduitsIndex',
   data(){
      return {
        produits: []
      }
   },
   methods: {
        goEdit(uid){
            this.$router.push({name: 'cEdit', params:{id:uid}})
        },
        del(index){
            produitService.deleteProduit(this.produits[index].id)
                .then(res => this.produits.splice(index, 1))
                .catch(err => console.log(err))
        },
       
    },
    mounted(){
        produitService.getAllProduits()
            .then(res => {
                this.produits = res.data.data
            })
            .catch(err => console.log(err))
    },
    computed: {
        comptage(){
            return (this.produits.length == 0) ? ' Aucun produit ' : ` Il y en a ${this.produits.length} `
        },
        dateFormat(){
            return this.produits.map(c => c.createdAt.split('T')[0].split('-').reverse().join('/'))
        }
    }
}

</script>

<style>

</style>
