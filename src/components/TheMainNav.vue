<template>
  <section class="main-nav">
    <nav class="main-nav__nav">
      <router-link
        class="main-nav__href"
        to="/user"
        exact
        active-class="main-nav__href_active"
      >
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.1959 20.2558V18.1362C18.1959 17.0119 17.7493 15.9336 16.9543 15.1386C16.1593 14.3436 15.081 13.897 13.9567 13.897H5.47835C4.35405 13.897 3.2758 14.3436 2.4808 15.1386C1.68579 15.9336 1.23917 17.0119 1.23917 18.1362V20.2558"
            stroke="#0D0D0D"
            stroke-width="2.31228"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.71758 9.65776C12.0588 9.65776 13.9568 7.75981 13.9568 5.41857C13.9568 3.07733 12.0588 1.17938 9.71758 1.17938C7.37634 1.17938 5.47839 3.07733 5.47839 5.41857C5.47839 7.75981 7.37634 9.65776 9.71758 9.65776Z"
            stroke="#0D0D0D"
            stroke-width="2.31228"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <router-link
        class="main-nav__href"
        to="/pc"
        exact
        active-class="main-nav__href_active"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="#00FF75"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="#00FF75"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="#00FF75"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.main-nav {
  width: 100px;
  min-height: 100vh;

  position: fixed;
  left: 0;
  top: 0;

  padding: 24px;

  background-color: $color-3;

  &__href {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    background-color: $color-2;

    border-radius: 10px;

    margin-top: 20px;
    padding: 14px;

    -webkit-transition: background-color 0.3s linear;
    -o-transition: background-color 0.3s linear;
    transition: background-color 0.3s linear;

    &:first-child {
      margin-top: 0;
    }

    svg {
      path {
        stroke: $color-5;
      }
    }

    &_active {
      background-color: $color-5;

      svg {
        path {
          stroke: $color-1;
        }
      }
    }
  }
}
</style>
