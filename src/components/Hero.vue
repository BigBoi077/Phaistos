<template>
  <div class="hero">
    <img :src="heroImgSrc" :alt="heroImgAlt" />
    <div class="hero-overlay" />
    <div class="hero-message">
      <h1>{{ pageHeader }}</h1>
      <p>{{ heroDescription }}</p>
      <Separator :separator-height="1" :separator-width="75" />
    </div>
  </div>
</template>

<script>
import Separator from "@/components/Separator";

export default {
  name: "Hero",
  components: {
    Separator,
  },
  data() {
    return {
      heroImgSrc: require("@/assets/hero.webp"),
      heroImgAlt: "Vero eos et accusamus et iusto odio.",
      pageHeader: "Mesure twice, cut once",
      heroDescription:
        "Grandpa said it, now it's the motto that keeps us going everyday",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

.hero {
  width: 100vw;
  height: 72vh;
  position: relative;

  img {
    width: 100%;
    height: 72vh;
    object-fit: cover;
    position: absolute;
  }

  .hero-overlay,
  .hero-message {
    position: absolute;
  }

  .hero-overlay {
    z-index: 1;
    width: 100%;
    height: 72vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .hero-message {
    width: 65%;
    z-index: 2;
    left: 50%;
    transform: translate(-50%, 125%);

    h1 {
      font-family: "Caudex", serif;
      color: $white;
      margin: 0;
      text-align: center;
      font-size: 42px;
    }

    hr {
      color: $white;
    }

    p {
      width: 75%;
      margin: auto;
      font-family: "Lato", sans-serif;
      color: $white;
      padding: 16px;
      text-align: center;
      font-size: 22px;
    }
  }
}

@media only screen and (max-width: $small-breakpoint) {
  .hero-message {
    transform: translate(-50%, 110%) !important;
    width: 75% !important;

    p {
      display: none;
    }
  }
}
</style>
