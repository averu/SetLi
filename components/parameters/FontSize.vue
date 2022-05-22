<template>
  <div>
    <label class='flex text-left'>
      <div class='w-full lg:w-1/2'>Font Size</div>
      <select
        v-model='selectedFonts'
        class='w-full lg:w-1/2'
        @change='changeFontSize'
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
      selectedFonts: this.$store.state.parameter.font.fontSize,
      optionFonts: [
        { id: 1, name: '16px' },
        { id: 2, name: '32px' },
        { id: 3, name: '48px' }
      ],
    }
  },
  methods: {
    changeFontSize (e) {
      this.$store.commit('parameter/changeFontSize', e.target.value)
    },
  },
}
</script>
<style lang='scss'>

</style>
