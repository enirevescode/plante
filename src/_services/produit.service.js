// Import des modules nécessaires
import Axios from './caller.service'

let getAllProduits = () => {
    return Axios.get('/produits')
}

let getProduit = (pid) => {
    return Axios.get('/produits/'+pid)
}

let updateProduit = (produit) => {
    return Axios.patch('/produits/'+produit.id, produit)
}

let createProduit = (produit) => {
    return Axios.put('/produits', produit)
}

let deleteProduit = (pid) => {
    return Axios.delete('/produits/'+pid)
}

export const produitService = {
    getAllProduits,
    getProduit,
    updateProduit,
    createProduit,
    deleteProduit,
}