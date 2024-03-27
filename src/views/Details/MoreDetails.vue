<template>
    <div class="flex flex-col mt-16 gap-8 items-center justify-center w-[90%] m-auto">
        <h1 class="font-wt-logo text-color-sec text-sz-logo">{{title}}</h1>
        <p>{{details}}</p>
        <a href="/" class="font-wt-logo text-color-sec hover:text-color-main">
            Voltar
        </a>
    </div>
</template>
<script lang="ts">
import store from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MoreDetails',
    data(){
        return{
            title: '',
            details: ''
        }
    },
    mounted(){
        const param = this.$route.params.id || 0
        const task = store.state.tasks.find((task) => task.id == param)        

        const localstorage = localStorage.getItem('tasks')
        const localstorageParse = localstorage? JSON.parse(localstorage):[]

        const local = localstorageParse.find((task:any)=> task.id == param)
                
        this.title = task?.input.toUpperCase() || local.input.toUpperCase()
        this.details = task?.textArea || local.textArea
        
    },
    
})
</script>



