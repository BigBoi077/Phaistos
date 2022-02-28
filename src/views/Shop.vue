<template>
  <page-header title="Welcome to the shop" />
  <div class="shop-items" v-for="shopItem in shopItems" :key="shopItem.id">
    <SingleShopItem :shopItem="shopItem" />
  </div>
</template>

<script>
import SingleShopItem from "@/components/shop/SingleShopItem";
import PageHeader from "@/components/PageHeader";

export default {
  name: "Shop",
  components: { PageHeader, SingleShopItem },
  data() {
    return {
      shopItems: [
        {
          id: 1,
          name: "Chalet des boys",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
          imageSrc: require("@/assets/shop/chalet.jpg"),
          imageAlt:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum",
          price: 120.99,
          href: "/shop/1",
        },
        {
          id: 2,
          name: "Castle of Crapeau",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
          imageSrc: require("@/assets/shop/chateau.jpg"),
          imageAlt:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum",
          price: 120.99,
          href: "/shop/2",
        },
        {
          id: 3,
          name: "Mon beau chien d'amour",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
          imageSrc: require("@/assets/shop/jack.jpg"),
          imageAlt:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum",
          price: 120.99,
          href: "/shop/3",
        },
        {
          id: 4,
          name: "Flower Hut",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
          imageSrc: require("@/assets/shop/flower.jpg"),
          imageAlt:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum",
          price: 120.99,
          href: "/shop/4",
        },
        {
          id: 5,
          name: "Love House",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
          imageSrc: require("@/assets/shop/love_house.jpg"),
          imageAlt:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum",
          price: 120.99,
          href: "/shop/5",
        },
        {
          id: 6,
          name: "Mini Shed",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
          imageSrc: require("@/assets/shop/mini_shed.jpg"),
          imageAlt:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum",
          price: 1200.99,
          href: "/shop/6",
        },
        {
          id: 7,
          name: "El Trio",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
          imageSrc: require("@/assets/shop/trio.jpg"),
          imageAlt:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum",
          price: 120.99,
          href: "/shop/7",
        },
        {
          id: 8,
          name: "The Witches Hut",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
          imageSrc: require("@/assets/shop/witch_hut.jpg"),
          imageAlt:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum",
          price: 120.99,
          href: "/shop/7",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
