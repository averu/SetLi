import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: ['list'],  // localStorageに保存したいstoreを入れる
  })(store);
};
