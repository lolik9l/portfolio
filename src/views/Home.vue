<template>
  <section class="section">
    <HomeIllustration />
    <Menu />
    <div class="home">
      <h3 class="home__sub_headline">Christopher Lis</h3>
      <h1 class="home__headline">
        ONE WITH AN EVERLASTING DESIRE
        <br>
        FOR THE UNKNOWN & UNTOLD
      </h1>
      <div class="home__button">
        <router-link class="button button_default" to="/featured-projects">
          VIEW Projects
        </router-link>
      </div>     
    </div>
  </section>
</template>

<script>
import HomeIllustration from '@/components/HomeIllustration'
import Menu from '@/components/Menu'

export default {
  name: 'HomeView',
  components: {
    Menu,
  },
}
</script>
