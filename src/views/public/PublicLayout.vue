<template>
   <div class="backgrd">
            
      <Navbar/>
      <router-view/>
   </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
   name: 'PublicLayout',
   components: {
      Navbar
   }
}
</script>

<style>


.backgrd{
   background-image: url("@/assets/bg.jpg");
   height: 700px;
}
</style>
