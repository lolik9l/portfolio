export default {
  namespaced: true,
  state: {
    showMenu: false as boolean,
  },
  mutations: {
    toggleShowMenu(state : any) {
      state.showMenu = !state.showMenu
    }
  },
  actions: {
  },
}
