<template>
  <div class='container mx-auto text-gray-700 text-2xl'>
    <ul class="list-disc list-inside font-bold flex flex-wrap flex-col h-screen">
      <li v-for="({ title }, index) in list" :key="index" class="flex justify-between my-3 items-center group">
        <span class="inline-block items-center font-bold">{{ index+1 }}. {{ title }}</span>
        <button
          class="hover:bg-gray-400 text-white font-bold py-1 px-4 rounded opacity-0 group-hover:opacity-100"
          @click="remove(index)"
        >
          Remove
        </button>
      </li>
      <InputTitle/>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    list () {
      return this.$store.state.list.setList
    }
  },
  methods: {
    remove (index) {
      this.$store.commit('list/remove', index)
    },
    ...mapMutations(['increment']),
  }
}
</script>
