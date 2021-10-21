import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: ['list', 'parameter'],  // localStorageに保存したいstoreを入れる
  })(store);
};
