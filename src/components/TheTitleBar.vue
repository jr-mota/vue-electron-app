<template>
  <section class="title-bar">
    <div class="title-bar__name">
      ATOM | V3.0
    </div>
    <div class="title-bar__btns">
      <button class="title-bar__btn" @click="collapseApp">
        <svg
          width="22"
          height="4"
          viewBox="0 0 22 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.612732"
            y="0.68927"
            width="20.5744"
            height="2.74326"
            rx="1.37163"
            fill="white"
          />
        </svg>
      </button>
      <button class="title-bar__btn" @click="closeApp">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3055 6.88855L6.96085 19.2332"
            stroke="white"
            stroke-width="2.74326"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.96085 6.88855L19.3055 19.2332"
            stroke="white"
            stroke-width="2.74326"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  methods: {
    collapseApp(e) {
      console.log(window.ipcRenderer);

      window.ipcRenderer.send("collapse-app");
    },
    closeApp(e) {
      window.ipcRenderer.send("close-app");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.title-bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-app-region: drag;

  width: 100vw;
  height: 50px;

  z-index: 50;

  position: fixed;
  top: 0;
  left: 0;

  background-color: $color-6;

  &__name {
    font-weight: 700;
    font-size: 16px;

    margin-left: 20px;

    color: $text-color-2;
  }

  &__btns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -webkit-app-region: no-drag;
  }

  &__btn {
    margin-right: 20px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    padding: 4px;

    border: none;
    outline: none;

    background: none;

    cursor: pointer;
  }
}
</style>
