<template>
  <div class="shop-item-rating">
    <span>{{ numberSales }} sales</span>
    <div class="star-rating-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        v-for="index in 5"
        :key="index"
      >
        <path
          :class="numberStars >= index ? 'full' : 'empty'"
          d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopItemRating",
  props: {
    numberSales: Number,
    numberStars: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "src/stylesheets/phaistos";

.shop-item-rating {
  display: flex;
  margin-bottom: 32px;

  span {
    font-family: "Lato", sans-serif;
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid $dark-liver;
  }

  .star-rating-container {
    display: flex;
    flex-direction: row;

    svg {
      height: 16px;
      width: auto;
      margin-right: 4px;

      path.full {
        fill: $dark-liver;
      }

      path.empty {
        fill: $ash-gray;
      }
    }
  }
}
</style>
