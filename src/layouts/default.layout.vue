<template>
  <div class="default-layout">
    <app-popup />
    <the-title-bar />
    <the-main-nav />
    <div class="default-layout__router-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import TheTitleBar from "@/components/TheTitleBar.vue";
import AppPopup from "@/components/AppPopup.vue";
import TheMainNav from "@/components/TheMainNav.vue";

export default {
  components: {
    TheTitleBar,
    AppPopup,
    TheMainNav,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.default-layout {
  &__page-wrapper {
    position: relative;
  }

  &__router-wrapper {
    max-width: 300px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;

    margin: 110px 0px 40px 160px;
  }
}

.fade-enter-active,
.fade-leave-active {
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
