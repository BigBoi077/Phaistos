<template>
  <div class="single-shop-item">
    <router-link :to="shopItem.href">
      <img :src="shopItem.imageSrc" :alt="shopItem.imageAlt" />
    </router-link>
    <span class="shop-item-name">{{ shopItem.name }}</span>
    <p>{{ shortenedItemDescription }}</p>
    <div class="shop-item-buy">
      <div>
        <price-tag :price="shopItem.price" format=".00" />
        <shop-item-button :href="shopItem.href" />
      </div>
    </div>
  </div>
</template>

<script>
import PriceTag from "@/components/shop/PriceTag";
import ShopItemButton from "@/components/shop/ShopItemButton";

export default {
  name: "SingleShopItem",
  components: { ShopItemButton, PriceTag },
  props: {
    shopItem: Object,
  },
  computed: {
    shortenedItemDescription() {
      return this.shopItem.description.slice(0, 220) + " . . .";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../stylesheets/phaistos";

.single-shop-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.25fr 1fr 1fr;
  grid-template-areas:
    "image        name"
    "image        description"
    "image        buy";
  grid-gap: 32px;
  width: 65%;
  background-color: $light-gray;
  padding: 32px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;

  a {
    grid-area: image;

    img {
      width: 100%;
      height: 360px;
      object-fit: cover;
    }
  }

  span.shop-item-name {
    grid-area: name;
    display: block;
    width: 100%;
    border-bottom: 1px solid $dark-liver;
    font-family: "Caudex", serif;
    font-size: 22px;
    color: $dark-liver;
    padding-bottom: 12px;
  }

  p {
    grid-area: description;
    font-family: "Lato", sans-serif;
    color: $dark-liver;
    padding: 0;
    margin: 0;
  }

  .shop-item-buy {
    grid-area: buy;
    display: flex;
    align-items: flex-end;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

@media only screen and (max-width: $small-breakpoint) {
  .single-shop-item {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "name"
      "image"
      "buy";

    p {
      display: none;
    }
  }
}
</style>
