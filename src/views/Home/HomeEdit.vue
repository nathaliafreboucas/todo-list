<template>
   
    <formComponentVue :labelInput="labelInput" :placeholderInput="placeholderInput" :detailsLabel="detailsLabel" :placeholderTextArea="placeholderTextArea" class="w-[100%]"/>

</template>
<script lang="ts">
import formComponentVue from '@/components/formComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeEdit',
  props:{
    id:{
      type: String,
      default:''
    }
  },

  components:{
    formComponentVue, 
  },

  data(){
    return{
      labelInput: 'Atividade:',
      placeholderInput: 'Escreva sua atividade',
      detailsLabel: 'Detalhes',
      placeholderTextArea: 'Descreva sua atividade',
      filterOption: 'all',
    }
  },
}) 
  
</script>
