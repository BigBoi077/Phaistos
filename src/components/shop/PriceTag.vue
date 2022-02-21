<template>
  <span>{{ formattedPrice }}</span>
</template>

<script>
export default {
  name: "PriceTag",
  props: {
    price: Number,
    format: String,
  },
  computed: {
    formattedPrice() {
      return `${this.price} $`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../stylesheets/phaistos";

span {
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: lighter;
  color: $dark-liver;
}
</style>
