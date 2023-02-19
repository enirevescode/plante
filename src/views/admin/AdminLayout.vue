<template>
   
   <div class="admin">
      
      <AdminHeader/>
      <AdminNavbar/>
      
      <router-view/>
   </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import AdminNavbar from '@/components/AdminNavbar.vue'

export default {
   name: 'AdminLayout',
   components: {
      AdminHeader,
      AdminNavbar
   }
   }

</script>

<style>

</style>
