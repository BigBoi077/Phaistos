<template>
  <div class="current-stock-container">
    <div v-if="isInStock">
      <span class="in-stock"
        >In stock : <em>{{ quantity }}</em></span
      >
    </div>
    <div v-else>
      <span class="out-of-stock">Currently out of stock</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentStock",
  props: {
    isInStock: Boolean,
    quantity: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "src/stylesheets/phaistos";

.current-stock-container {
  margin: 16px 0;
  span {
    font-family: "Lato", sans-serif;
  }

  .in-stock {
    color: $success-green;
  }

  .out-of-stock {
    color: $error-red;
  }
}
</style>
