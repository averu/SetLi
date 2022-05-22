<template>
  <div class='my-3'>
    <input class='w-full py-1 px-2 text-2xl rounded placeholder-gray-300 focus:placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-75' placeholder='曲名を入力' @keyup.enter='add'>
  </div>
</template>
<script>
export default {
  methods: {
    add (e) {
      this.$store.commit('list/add', e.target.value)
      e.target.value = ''
    },
  }
}
</script>
