<template>
  <div id="app">
    <TheHeader />
    <Home />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import Home from "@/views/Home";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    TheFooter,
    Home,
    TheHeader,
  },
};
</script>

<style lang="scss">
@import "stylesheets/phaistos.scss";
@import url("https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

html,
body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
span {
  color: $dark-liver;
}
</style>
