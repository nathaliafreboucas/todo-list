<template>
    <form class="w-[100%] flex flex-col gap-6 lg:pr-16 justify-evenly max-w-[500px] m-auto">

        <div class="flex flex-col gap-3">
            <p class="text-color-sec font-wt-logo">{{labelInput}}</p>
            <div class="bg-form w-[100%] rounded-2xl flex h-auto">
              <input id="" v-model="inputInf" name="taskInput"  type="text" class="bg-transparent w-[90%] focus:outline-none m-4" :placeholder="placeholderInput" data-input-task required>
            </div>    
        </div>        
        <div class="flex flex-col gap-3" >
            <p class="text-color-sec font-wt-logo">{{detailsLabel}}</p>
            <div class="bg-form w-[100%] rounded-2xl h-32 flex ">
                <textarea v-model="textarea" name="details" id="textarea"  :placeholder="placeholderTextArea" class="w-[90%] m-4 resize-none focus:outline-none bg-transparent" data-textarea-details required @blurEventInput="onBlurInput" ></textarea>
            </div>
            <span class="text-red-700 font-wt-logo">{{messageError}}</span>
        </div>
        <button type="submit" class="w-32 rounded-2xl bg-color-sec p-2 text-color-main font-wt-logo self-end" @click.prevent="onClick(), setStorage()">Enviar</button>
    </form>

</template>
<script lang="ts">
import ITask from "../interfaces/ITask";
import { defineComponent, PropType } from "vue";
import store from "@/store";
   
export default defineComponent({
    
    name: 'formComponent',
    
    props:{
        labelInput:{
            type: String
        },
        placeholderInput:{
            type: String
        },
        placeholderTextArea:{
            type: String
        },
        detailsLabel:{
            type:String
        },
        taskParaEditar:{
            type: Object as PropType<ITask>,
            default: null as ITask | null
        }, 
      
    },
    mounted(){
        if(this.paramsId){
           
            const tasks = store.state.tasks.find(task => task.id == this.paramsId);
            this.inputInf = tasks?.input || '';
            this.textarea = tasks?.textArea || '';
            
        } 
    },
    
    data(){
        return{
            validationTextArea:'',
            validationInput:'',
            messageError:'',
            detalhes:'',
            task:{},
            inputInf:'',
            textarea:'',
            paramsId:this.$route.params.id || 0
        }
    },
   
        
    methods:{
        onClick(){
            let takeInput = document.querySelector('[data-input-task]') as HTMLInputElement;
            let takeTextArea = document.querySelector('[data-textarea-details]') as HTMLInputElement; 
            
            if(takeInput.value !='' && takeTextArea.value!=''){

                if(this.paramsId != 0){
                                    
                    this.task = {
                        id:this.paramsId,
                        input: takeInput?.value,
                        textArea: takeTextArea?.value,
                        
                    }
                    store.commit('editTask', this.task)
                    takeInput.value = ''
                    takeTextArea.value =''
                    store.commit('showNotification', 
                        {
                            id:new Date().toISOString(),
                            title:'Deletada',
                            desc:'Atividade editada com sucesso.'
                        }
                    )
                    setTimeout(()=>window.location.replace('/'), 3000)

                    
                }else{

                    this.task = {
                        id:new Date().toISOString(),
                        input: takeInput?.value,
                        textArea: takeTextArea?.value,
                        isCompleted: false
                    }
                    store.commit('dataForm', this.task)
    
                    this.messageError = ''
                    takeInput.value = ''
                    takeTextArea.value =''
                    this.inputInf=''
                    this.textarea=''
                    store.commit('showNotification', 
                        {
                            id:new Date().toISOString(),
                            title:'Sucesso',
                            desc:'Você adicionou mais uma atividade'
                        }
                    )
                }
            }else{
                this.messageError = "Os 2 campos devem estar preenchidos."
            }
          
        },   
        
        setStorage(){
            const tasksArray = store.state.tasks            
            localStorage.setItem('tasks', JSON.stringify(tasksArray))
            
        }
       
    }
})

</script>
