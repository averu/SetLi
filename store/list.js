export const state = () => ({
  setList: [
    { title: '夜に駆ける' },
    { title: '秒針を噛む' },
    { title: '怪物' },
    { title: '廻廻奇譚' },
    { title: 'ギラギラ' },
    { title: 'Pale Blue' },
  ]
})

export const mutations = {
  add (state, title) {
    state.setList.push({
      title,
    })
  },
  remove (state, index) {
    state.setList.splice(index, 1)
  },
}
