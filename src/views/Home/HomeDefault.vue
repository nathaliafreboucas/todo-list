<template>
  <div class="lg:w-[50%]">
      <formComponentVue :labelInput="labelInput" :placeholderInput="placeholderInput" :detailsLabel="detailsLabel" :placeholderTextArea="placeholderTextArea" />
  </div>
    
  <div class="flex flex-col h-[100%] lg:w-[50%] gap-3 border-solid border-neutral-500 border-t-2 pt-6 lg:pt-0 lg:pl-16 lg:border-l-2  lg:border-t-0 max-w-screen-2xl">
     <select name="filter" id="" @change="filter($event)" class="max-w-[150px] self-end p-2 rounded-xl">
          <option value="all" >Todas</option>
          <option value="completed" >Finalizadas</option>
          <option value="incomplete">Não Finalizadas</option>
      </select>
     <div class=" overflow-auto w-[100%] h-[952px] flex flex-col gap-3 max-h-96 bg-center bg-contain bg-no-repeat" :class="{'bg-main-texture':bgTasks()}" >
         <div v-for="(task) in filteredTasks" :key="task.id" class="w-[100%] ">  
              <TaskComponentVue :task="task" @editTask="takeEditTask"/> 
          </div>
     </div>
  </div>
</template>
<script lang="ts">
import formComponentVue from '@/components/formComponent.vue';
import TaskComponentVue from '@/components/TaskComponent.vue';
import ITask from '@/interfaces/ITask';
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  props:{
    id:{
      type: String,
      default:''
    }
  },
  components:{
    formComponentVue, 
    TaskComponentVue
    
  },
  mounted(){
    const localStorageTasks = localStorage.getItem('tasks');
    const tasks = localStorageTasks? JSON.parse(localStorageTasks):[]
    store.state.tasks = tasks
  },
  data(){
    return{
      labelInput: 'Atividade:',
      placeholderInput: 'Escreva sua atividade',
      detailsLabel: 'Detalhes',
      placeholderTextArea: 'Descreva sua atividade',  
      filterOption: 'all',
      class:'',
    }
  },
  computed: {
    filteredTasks(): ITask[] {
      if (this.filterOption === 'completed') {
        return store.state.tasks.filter(task => task.isCompleted);
      } else if (this.filterOption === 'incomplete') {
        return store.state.tasks.filter(task => !task.isCompleted);
      } else {
        return store.state.tasks;
      }
    },
    
  },
  
  methods:{
   
    filter(event: { target: { value: string; }; }){ //esse tipo aí foi só pro eslint não reclamar 
      
      this.filterOption = event.target.value;
    
    },
    bgTasks(){
      if(store.state.tasks.length<1){
        return true
      }
    } 
  }
})
</script>
    
