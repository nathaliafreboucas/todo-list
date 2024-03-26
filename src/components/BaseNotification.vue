<template>
  <div>
    <div role="alert" class="w-[250px] md:w-[300px] block fixed top-6 right-3 t-0" v-for="not in $store.state.notifications" :key="not.id">
      <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">
        {{not.title}}
      </div>
      <div class="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
        <p>{{not.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'BaseNotification',
})
</script>