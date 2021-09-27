<template>
  <div class="default-layout">
    <app-popup />
    <the-title-bar />
    <div class="default-layout__page-wrapper">
      <the-main-nav />
      <div class="default-layout__router-wrapper">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppPopup from "@/components/AppPopup.vue";
import TheTitleBar from "@/components/TheTitleBar.vue";
import TheMainNav from "@/components/TheMainNav.vue";

export default {
  components: {
    AppPopup,
    TheTitleBar,
    TheMainNav,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.default-layout {
  &__page-wrapper {
    max-height: $window-max-height;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  &__router-wrapper {
    margin: 110px 0px 60px 160px;
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
