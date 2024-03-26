import ITask from '../interfaces/ITask'
import INotification  from '@/interfaces/INotification'

import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [] as ITask[],  
    notifications:[] as INotification[]
  },
  
  mutations: {
    dataForm(state, data:ITask){
      state.tasks.push(data)  
    },

    editTask(state, data:ITask){
   
      const index = state.tasks.findIndex(task=> task.id == data.id)
      state.tasks[index] = {
        id: data.id,
        input:data.input,
        textArea: data.textArea,
        isCompleted: state.tasks[index].isCompleted
      } as ITask
      
    },

    deleteTask(state, data:ITask){
     state.tasks = state.tasks.filter(task =>task.id != data.id);
     localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },


    // Responsáveis pelo filtro
    isCompleted(state, data:ITask){
      state.tasks.filter((task)=>{   
        if(task.id == data.id){
          task.isCompleted=true
        }
      })
    },

    isIncomplete(state, data:ITask){
      state.tasks.filter((task)=>{
        if(task.id == data.id){
          data.isCompleted=false
        }
      })
    },
    // Notificações 
    showNotification(state, notification: INotification){
      state.notifications.push(notification);
      setTimeout(()=>{
        state.notifications = state.notifications.filter(not => not.id != notification.id)
      },4000)
    }

    

  },
  actions: {
  },
  modules: {
  }
})
