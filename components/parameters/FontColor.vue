<template>
  <div>
    <label class='flex text-left'>
      <div class='w-full lg:w-1/2'>Font Color</div>
      <select
        v-model='selectedFonts'
        class='w-full lg:w-1/2'
        @change='changeFontColor'
      >
        <option v-for='font in optionFonts'
          :key='font.id'
          :value='font.name'>
          {{ font.name }}
        </option>
      </select>
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedFonts: this.$store.state.parameter.font.color,
      optionFonts: [
        { id: 1, name: 'white' },
        { id: 2, name: 'blue' },
        { id: 3, name: 'gray' }
      ],
    }
  },
  methods: {
    changeFontColor (e) {
      this.$store.commit('parameter/changeFontColor', e.target.value)
    },
  },
}
</script>
<style lang='scss'>

</style>
