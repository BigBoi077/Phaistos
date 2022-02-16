<template>
  <router-link :to="href">{{ title }}</router-link>
</template>

<script>
export default {
  name: "LinkButton",
  props: {
    href: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

a,
a:hover {
  text-decoration: none;
}

a {
  letter-spacing: 2px;
  font-size: 20px;
  padding: 12px 16px;
  background-color: $chocolate-web;
  font-family: "Caudex", serif;
  color: $white;
}

a:hover {
  background-color: $flame;
  box-shadow: 4px 4px 0 1px $dim-gray;
}
</style>
