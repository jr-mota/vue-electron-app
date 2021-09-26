<template>
  <div class="default-layout">
    <the-main-nav />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheMainNav from "@/components/TheMainNav.vue";

export default {
  components: {
    TheMainNav,
  },
};
</script>

<style lang="scss" scoped>
.default-layout {
}

.fade-enter-active,
.fade-leave-active {
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-duration: 0.25s;
  -o-transition-duration: 0.25s;
  transition-duration: 0.25s;
}

.fade-enter-active {
  -webkit-transition-delay: 0.25s;
  -o-transition-delay: 0.25s;
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
