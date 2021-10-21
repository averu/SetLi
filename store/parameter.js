export const state = () => ({
  font: {
    fontFamily: 'Inter',
    fontSize: '16px',
    color: 'white',
    TextStrokeWidth: '6px',
    TextStrokeColor: 'gray',
  }
})

export const mutations = {
  changeFontFamily (state, value) {
    state.font.fontFamily = value;
  },
  changeFontSize (state, value) {
    state.font.fontSize = value;
  },
  changeFontColor (state, value) {
    state.font.color = value;
  },
  changeTextStrokeWidth (state, value) {
    state.font.TextStrokeWidth = value;
  },
  changeTextStrokeColor (state, value) {
    state.font.TextStrokeColor = value;
  }
}
