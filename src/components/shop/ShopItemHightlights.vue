<template>
  <div
    class="shop-item-highlights"
    v-for="highlight in shopItem.highlights"
    :key="highlight.title"
  >
    <span>{{ highlight.title }}</span>
    <font-awesome-icon :icon="highlight.iconName" />
  </div>
</template>

<script>
export default {
  name: "ShopItemHightlights",
  props: {
    shopItem: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "src/stylesheets/phaistos";

.shop-item-highlights {
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid $light-gray;

  span {
    margin-right: 16px;
    font-family: "Lato", sans-serif;
    font-weight: lighter;
  }
}
</style>
