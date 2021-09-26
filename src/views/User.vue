<template>
  <main class="user">
    <the-code-form v-if="!signed" />
    <the-account-form v-else />
  </main>
</template>

<script>
import TheCodeForm from "@/components/TheCodeForm.vue";
import TheAccountForm from "@/components/TheAccountForm.vue";

export default {
  name: "User",
  components: {
    TheCodeForm,
    TheAccountForm,
  },
  computed: {
    signed() {
      return this.$store.getters.getUserSigned;
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  margin: 60px 0px 0px 60px;
}
</style>
