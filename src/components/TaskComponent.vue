<template>
    <div class="bg-form w-[100%] min-h-14 rounded-2xl flex justify-between items-center px-6" >
        <p class="text-color-sec font-wt-logo" :class="{'line-through decoration-1':completed}">{{task.input}}</p>
        <div class="flex gap-2 ">
          <router-link :to="`/${task.id}`">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(56,67,73)" class="w-6 h-6" >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
          </router-link>

          <svg @click="taskIsCompleted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="{'fill-green-500':task.isCompleted, 'fill-red-500':!task.isCompleted}" class="w-6 h-6">
            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
          </svg>
          <svg @click="delTask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(56,67,73)" class="w-6 h-6">
            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
          </svg>
          <router-link :to="`/details/${task.id}`">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(56,67,73)" class="w-6 h-6">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>

      </div>
</template>
<script lang="ts">
import ITask from "@/interfaces/ITask"
import store from "@/store"
import { defineComponent, PropType } from "vue"


export default defineComponent({

    name:"TaskComponentVue",
    
    props:{
        task:{ 
          type: Object as PropType<ITask>,
          required: true
          
        }
    },
    data(){
      return{
        colorTask:'rgb(56,67,73)',
        completed:false
      }
    },

    methods:{

      delTask(){        
        store.commit('deleteTask', this.task)
        store.commit('showNotification', 
                        {
                            id:new Date().toISOString(),
                            title:'Deletada',
                            desc:'Atividade excluída com sucesso.'
                        }
                    )
      },

      taskIsCompleted(){
        this.completed=!this.completed      
        if(this.completed){

          store.commit('isCompleted', this.task)
          localStorage.setItem('tasks', JSON.stringify(store.state.tasks))
          
        }else{
          store.commit('isIncomplete', this.task)
          localStorage.setItem('tasks', JSON.stringify(store.state.tasks))
         
        }
      }, 
      edtTask(){     
        store.commit('editTask', this.task);

      }

    }

})
</script>
