<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/header/TheHeader";
import TheFooter from "@/components/footer/TheFooter";

export default {
  name: "App",
  components: {
    TheFooter,
    TheHeader,
  },
};
</script>

<style lang="scss">
@import "stylesheets/phaistos.scss";
@import url("https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

html,
body {
  margin: 0;
}

.hidden {
  display: none;
}

.scroll-lock {
  height: 100%;
  overflow: hidden;
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

label,
input {
  margin-bottom: 16px;
}

form label {
  display: block;
}

form .input-group,
form input,
form label {
  width: 95%;
}

label {
  font-family: "Lato", sans-serif;
  font-size: 22px;
  font-weight: lighter;
}

input,
textarea {
  padding: 12px;
  border: 1px solid $gray-web;
}

input:focus,
textarea:focus {
  outline: none;
  border: 1px solid $dark-liver;
}

.error-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;

  svg,
  span {
    color: $error-red;
  }

  svg {
    margin-right: 12px;
  }

  span {
    font-size: 12px;
    font-family: "Lato", sans-serif;
  }
}
</style>
