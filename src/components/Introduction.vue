<template>
  <div class="introduction-container">
    <h2>{{ introductionMessage }}</h2>
    <div class="selling-points-container">
      <SellingPoint
        v-for="sellingPoint in sellingPoints"
        :key="sellingPoint.id"
        :selling-point="sellingPoint"
      />
    </div>
  </div>
</template>

<script>
import SellingPoint from "@/components/SellingPoint";
export default {
  name: "Introduction",
  components: { SellingPoint },
  data() {
    return {
      introductionMessage: "Why choose us ?",
      sellingPoints: [
        {
          id: 1,
          iconSrc: require("../assets/icons/hatchet.png"),
          iconAlt: "Cut by hand",
          title: "Cut by hand",
          description:
            "Contrarily to million dollar compagnies, we respect nature and only cut what is needed.",
        },
        {
          id: 2,
          iconSrc: require("../assets/icons/carving.png"),
          iconAlt: "Manually processed",
          title: "Manually processed",
          description:
            "Instead of using major factory tools, we use manual tool to create our projects.",
        },
        {
          id: 3,
          iconSrc: require("../assets/icons/varnish.png"),
          iconAlt: "Varnished with love",
          title: "Varnished with love",
          description:
            "The finish on our products is out of this world, wait until you see.",
        },
      ],
    };
  },
  methods: {
    getStyle(image) {
      return `width: ${image.size.width};transform: translate(${image.position.x}%, ${image.position.y}%);`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

.introduction-container {
  margin: 10%;

  h2 {
    text-align: center;
    font-family: "Caudex", serif;
    font-size: 38px;
    margin: 100px 0 74px 0;
  }

  .selling-points-container {
    display: flex;
    justify-content: space-between;
  }
}

@media only screen and (max-width: $small-breakpoint) {
  .introduction-container {
    .selling-points-container {
      display: block;

      .selling-point {
        margin-bottom: 24px;
      }
    }
  }
}
</style>
