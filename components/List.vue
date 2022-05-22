<template>
  <div class='container mx-auto text-gray-700 text-2xl'>
    <ul class='list-disc list-inside font-bold flex flex-wrap flex-col h-screen'>
      <li v-for='({ title }, index) in list' :key='index' class='flex justify-between my-3 items-center group'>
        <span
          ref='fontContent'
          class='font-body inline-block items-center font-bold'
          :style='font'
        >{{ index+1 }}. {{ title }}</span>
        <button
          class='opacity-0 group-hover:opacity-100 transition ease-in-out duration-300'
          @click='remove(index)'
        >
          <svg class='fill-current text-red-200 h-6 w-6 hover:text-red-500 transition ease-in-out duration-300' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='circle-xmark' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path fill='currentColor' d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256C397.4 512 512 397.4 512 256S397.4 0 256 0zM336.1 303c9.375 9.375 9.375 24.56 0 33.94c-9.381 9.381-24.56 9.373-33.94 0L256 289.9l-47.03 47.03c-9.381 9.381-24.56 9.373-33.94 0c-9.375-9.375-9.375-24.56 0-33.94l47.03-47.03L175 208.1c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L256 222.1l47.03-47.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94l-47.03 47.03L336.1 303z'></path>
          </svg>
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
    },
    font () {
      return this.$store.state.parameter.font
    }
  },
  mounted() {
    this.setContent()
  },
  updated() {
    this.setContent()
  },
  methods: {
    remove (index) {
      this.$store.commit('list/remove', index)
    },
    setContent() {
      const targetElements = this.$refs.fontContent
      targetElements.forEach(element => {
        element.setAttribute('data-title', element.innerHTML)
      });
    },
    ...mapMutations(['increment']),
  },
}
</script>
<style scoped lang='scss'>
span {
  color: #fff;
  font-size: 32px;
  -webkit-text-stroke-width: 6px;
  -webkit-text-stroke-color: #666;
  &::before{
    content: attr(data-title);
    -webkit-text-stroke: 0;
    position: absolute;
  }
}

</style>
