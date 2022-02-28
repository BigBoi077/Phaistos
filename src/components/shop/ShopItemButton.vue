<template>
  <router-link :to="href">Buy</router-link>
</template>

<script>
export default {
  name: "ShopItemButton",
  props: {
    href: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../stylesheets/phaistos";

a {
  width: 32px;
  text-align: center;
  text-decoration: none;
  font-family: "Caudex", serif;
  font-size: 14px;
  color: $white;
  background-color: $rose-ebony;
  padding: 12px;

  :hover {
    text-decoration: none;
  }
}
</style>
