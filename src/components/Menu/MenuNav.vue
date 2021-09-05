<template>
  <transition name="fade">
    <div v-show="showMenu" class="menu_nav d-flex align-center z-9">
      <div class="menu_nav__container d-flex align-center container mx-auto hidden">
        <div class="menu_nav__svg">
          <transition name="fade">
            <svg v-if="hoverLink === 0" class="menu_nav__svg-icon" viewBox="0 0 1280.01 682">
              <path d="M1277.39,1.144 M1275.39,675.456 M3.482,9.124 M3.482,680.437 M728.065,4.037 M546.518,680.437 M915.247,4.292 M733.636,680.437 M1102.354,4.825 M921.02,680.437 M531.922,3.769 M350.303,680.437 M351.71,3.523 M170.203,679.779 M1.744,681.085L171.385,3.175 l0,0l1106.781-1.542l0,0l-176.154,679.453l0,0H1.744z M67.482,416.572L1.5,681.048l424.016-384.309L171.324,3.121l424.182,1.721 L425.623,296.677l225.565-119.755l96.141,349.129L425.637,296.67l106.285,136.616L1.744,680.909l544.774-0.472l-14.595-247.151 l215.411,93.089L546.518,681.085h327.305L747.331,526.14l234.443-234.487L874.322,679.431l132.751-237.701l94.924,239.227 l74.479-289.26l-169.402,50.023l-25.299-150.11l194.702,100.085L899.129,68.975l82.645,222.634l-204.082-65.801l-30.361,300.243 l-96.14-349.13l126.501,48.886L595.521,4.84l229.397-0.015l-47.226,220.983L899.129,69.016L824.918,4.909l230.471-3.089 l-156.26,67.155l215.888,42.166l61.458,280.554l83.121-322.841l-144.58,42.287L1055.389,1.819l108.54,46.916l-48.912,62.405 l48.912-62.405l95.668,20.118l-95.668-20.118L1278.166,1.5 M115.644,225.808 M171.385,3.087 M456.619,3.087 M163.454,34.775 M1193.432,325.836 M728.065,4.037 M531.922,433.286 M372.151,596.986L1.744,680.909L372.151,596.986z M425.516,296.55 l-75.366,151.026l181.771-14.667 M222.14,315.296L3.482,680.437l346.669-232.861 M595.521,4.84 M425.516,296.55l-3.076-180.853 M425.516,296.55l177.525,29.286l48.146-148.913L595.521,4.84l-173.08,110.856L171.385,3.087l50.755,312.209L425.516,296.55 l106.405,136.359L372.151,596.797l174.367,83.451l187.118-65.034 M603.042,325.836l144.291,200.45l-13.697,88.928l140.686,64.195  M824.918,4.825l-86.236,66.361L824.918,4.825z M777.692,225.808l-39.01-154.621L595.521,4.84L410.507,34.775l11.933,80.921 l-11.933-80.921L171.385,3.087" style="fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" />
            </svg>
            <svg v-else-if="hoverLink === 1" class="menu_nav__svg-icon" viewBox="0 0 1280.01 682">
              <path d="M1.5,679.41L171.14,1.5h0L1275.92,3h0L1101.77,679.41H1.5Zm545.36-1.81,76.85-286.31m30.61-114.56L727.71,3.29M580.3,334.16a59.28,59.28,0,1,1,59.28,59.28A59.28,59.28,0,0,1,580.3,334.16Z" style="fill:none;stroke:#fff;stroke-linejoin:round;stroke-width:3px;" />
            </svg>
            <svg v-else-if="hoverLink === 2" class="menu_nav__svg-icon" viewBox="0 0 1280.01 682">
              <path d="M1275.57,2.28m0,671.31M3.66,7.26m0,671.31,543,0L728.24,2.17m5.57,676.4L915.42,2.43m5.77,676.14L1102.53,3M350.48,678.57L532.1,1.91m-361.72,676L351.89,1.66M1.92,679.6L171.56,1.5h0L1276.34,3.05h0L1102.19,679.6H1.92Z" style="fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:3px;" />
            </svg>
          </transition>
        </div>
        <nav class="menu_nav__links">
          <router-link class="menu_nav__link" to="/" @mouseenter="hoverLink = 0">
            Home
          </router-link>
          <router-link class="menu_nav__link" to="/featured-projects" @mouseenter="hoverLink = 1">
            Featured projects
          </router-link>
          <router-link class="menu_nav__link" to="/projects" @mouseenter="hoverLink = 2">
            Projects
          </router-link>
          <div class="menu_nav__social">
            <a class="menu_nav__social-item" href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="menu_nav__social-item" href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MenuNav',
  setup() {
    const store = useStore()

    //state
    const hoverLink = ref(0)
    const showMenu = computed(() => store.state.menu['showMenu'])


    //methods

    return {
      showMenu,
      hoverLink
    }
  }
}
</script>
