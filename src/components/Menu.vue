<template>
  <MenuHamburger />
  <MenuNav />
</template>

<script>
import MenuNav from './Menu/MenuNav'
import MenuHamburger from './Menu/MenuHamburger'

export default {
  name: 'Menu',
  components: {
    MenuNav,
    MenuHamburger,
  }
}
</script>
