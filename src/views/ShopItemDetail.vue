<template>
  <PageHeader :title="shopItem.name" />
  <ShopItemInformation :shop-item="shopItem" />
</template>

<script>
import PageHeader from "@/components/PageHeader";
import { getItemById } from "@/modules/helpers/ItemFinder";
import ShopItemInformation from "@/components/shop/ShopItemInformation";

export default {
  name: "ShopItemDetail",
  components: { ShopItemInformation, PageHeader },
  props: {
    id: String,
  },
  data() {
    return {};
  },
  computed: {
    shopItem() {
      return getItemById(this.id);
    },
  },
  created() {},
};
</script>
