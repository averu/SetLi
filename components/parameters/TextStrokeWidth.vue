<template>
  <div>
    <label class='flex text-left'>
      <div class='w-full lg:w-1/2'>Text Stroke Width</div>
      <select
        v-model='selectedFonts'
        class='w-full lg:w-1/2'
        @change='changeTextStrokeWidth'
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
      selectedFonts: this.$store.state.parameter.font.TextStrokeWidth,
      optionFonts: [
        { id: 1, name: '1px' },
        { id: 2, name: '3px' },
        { id: 3, name: '6px' }
      ],
    }
  },
  methods: {
    changeTextStrokeWidth (e) {
      this.$store.commit('parameter/changeTextStrokeWidth', e.target.value)
    },
  },
}
</script>
<style lang='scss'>

</style>
