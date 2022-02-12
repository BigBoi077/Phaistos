<template>
  <div class="selling-point">
    <img :src="sellingPoint.iconSrc" :alt="sellingPoint.iconAlt" />
    <span>{{ sellingPoint.title }}</span>
    <p>{{ sellingPoint.description }}</p>
  </div>
</template>

<script>
export default {
  name: "SellingPoint",
  props: {
    sellingPoint: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

.selling-point {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 62px;
    height: auto;
    border-radius: 50%;
    border: 2px solid $persian-orange;
    padding: 16px;
  }

  span,
  p {
    text-align: center;
  }

  span {
    font-family: "Caudex", serif;
    font-size: 26px;
    font-weight: bold;
    margin-top: 16px;
  }

  p {
    font-family: "Lato", sans-serif;
    max-width: 300px;
  }
}
</style>
