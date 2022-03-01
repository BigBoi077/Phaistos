<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

h1 {
  background-color: $persian-orange;
  color: $white;
  padding: 32px 60px;
  font-size: 38px;
  font-family: "Caudex", serif;
  font-weight: lighter;
}
</style>
