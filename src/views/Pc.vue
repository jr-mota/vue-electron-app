<template>
  <main class="pc">
    <the-pc-form />
  </main>
</template>

<script>
import ThePcForm from "@/components/ThePcForm.vue";

export default {
  name: "Pc",
  components: {
    ThePcForm,
  },
};
</script>

<style lang="scss" scoped>
.pc {
  margin: 60px 0px 60px 60px;
}
</style>
