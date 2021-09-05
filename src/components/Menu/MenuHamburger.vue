<template>
  <div class="menu_hamburger z-10" @click="toggleShowMenu">
    <div class="menu_icon" :class="{ open : showMenu }">
      <span class="menu_icon__strip"></span>
      <span class="menu_icon__strip"></span>
      <span class="menu_icon__strip"></span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'


export default {
  name: 'MenuHamburger',
  setup() {
    const store = useStore()

    //state
    const showMenu = computed(() => store.state.menu['showMenu'])

    //methods
    const toggleShowMenu = () => store.commit('menu/toggleShowMenu')

    return {
      showMenu,
      toggleShowMenu
    }
  }
}
</script>
