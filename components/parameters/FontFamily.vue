<template>
  <div>
    <label class='flex text-left'>
      <div class='w-full lg:w-1/2'>Font Family</div>
      <select
        v-model='selectedFonts'
        class='w-full lg:w-1/2'
        @change='changeFontFamily'
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
      selectedFonts: this.$store.state.parameter.font.fontFamily,
      optionFonts: [
        { id: 1, name: 'Inter' },
        { id: 2, name: 'Hachi Maru Pop' },
        { id: 3, name: 'Potta One' }
      ],
    }
  },
  methods: {
    changeFontFamily (e) {
      this.$store.commit('parameter/changeFontFamily', e.target.value)
    },
  },
}
</script>
<style lang='scss'>

</style>
