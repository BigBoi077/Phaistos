<template>
  <div class="shop-item-information-container">
    <div class="shop-item-information-inner">
      <img :src="shopItem.imageSrc" :alt="shopItem.imageAlt" />
      <div class="shop-item-information">
        <h3>{{ shopItem.name }}</h3>
        <p>{{ shopItem.description }}</p>
        <current-stock
          :is-in-stock="shopItem.isInStock"
          :quantity="shopItem.quantity"
        />
        <price-tag
          class="shop-item-price"
          :price="shopItem.price"
          format="0.00"
        />
        <shop-item-rating
          :number-sales="shopItem.numberSales"
          :number-stars="shopItem.numberStars"
        />
        <shop-item-hightlights :shop-item="shopItem" />
        <submit-button title="Buy" v-on:click="hasClickedBuy = true" />
      </div>
    </div>
    <shop-item-order-form :class="hasClickedBuy ? '' : 'hidden'" />
  </div>
</template>

<script>
import PriceTag from "@/components/shop/PriceTag";
import CurrentStock from "@/components/shop/CurrentStock";
import ShopItemHightlights from "@/components/shop/ShopItemHightlights";
import ShopItemRating from "@/components/shop/ShopItemRating";
import ShopItemOrderForm from "@/components/shop/ShopItemOrderForm";
import SubmitButton from "@/components/form/SubmitButton";

export default {
  name: "ShopItemInformation",
  components: {
    SubmitButton,
    ShopItemOrderForm,
    ShopItemRating,
    ShopItemHightlights,
    CurrentStock,
    PriceTag,
  },
  props: {
    shopItem: Object,
  },
  data() {
    return {
      hasClickedBuy: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/stylesheets/phaistos";

.shop-item-information-container {
  margin: auto;
  width: 60vw;
  padding: 32px;
  background-color: $light-gray;

  .shop-item-information-inner {
    display: flex;

    img {
      max-width: 45%;
      height: auto;
      object-fit: cover;
    }

    .shop-item-information {
      padding-left: 32px;

      h3 {
        font-size: 32px;
        font-family: "Caudex", serif;
        font-weight: lighter;
        margin-top: 0;
      }

      p {
        font-family: "Lato", sans-serif;
        margin: 32px 0;
      }

      .shop-item-price {
        margin-bottom: 32px;
      }

      .shop-item-sales-information {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
