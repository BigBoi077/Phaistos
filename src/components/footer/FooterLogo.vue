<template>
  <div class="footer-logo">
    <img :src="logoSrc" :alt="logoAlt" />
    <div class="message">
      <span>Phaistos</span>
      <p>{{ phaistosDesc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterLogo",
  data() {
    return {
      logoSrc: require("@/assets/phaistos_logo_no_bg.png"),
      logoAlt: "Phaistos logo",
      phaistosDesc: "Your choice for solid and beautiful piece of decoration",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos";

.footer-logo {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $dark-liver;
  padding: 60px;

  img {
    height: 72px;
    width: auto;
    margin-right: 16px;
  }

  .message {
    span {
      font-family: "Caudex", serif;
      font-size: 32px;
      font-weight: bold;
      padding-bottom: 12px;
    }

    p {
      font-family: "Lato", sans-serif;
      font-weight: lighter;
      font-size: 24px;
      margin: 0;
    }
  }
}
</style>
