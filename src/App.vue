<template>
  <header class="bg-color-main flex items-center ">    
    <nav class="text-center px-8 m-auto max-w-7xl w-[90%] sm:text-start">
      <router-link to="/">
        <h1 class="font-wt-logo text-sz-logo text-color-sec italic">Organiza</h1>
      </router-link>      <!-- <router-link to="/details">Detalhes</router-link> -->
    </nav>
    <div>
      <BaseNotification />
    </div> 
  </header>
  
  <main>
    <router-view/>
  </main>
  <footer class="bg-color-sec text-color-main flex items-center">
    <p class="m-auto">Desenvolvido por Nathália Rebouças</p>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BaseNotification from '@/components/BaseNotification.vue';

export default defineComponent({
  name: 'App',
  components:{
    BaseNotification,
  }
})
</script>

<style>
@import './index.css';
*{
  box-sizing: border-box;
}
#app {
  max-width: 100vw;
  height: 100vh;
  margin: 0;
  padding:0;
  display: grid;
  grid-template-rows: 15% auto 15%;
  font-family: Roboto, sans-serif;
}
</style>
