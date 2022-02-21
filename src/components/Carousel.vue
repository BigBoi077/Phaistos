<template>
  <div class="carousel">
    <div class="carousel-left">
      <span>{{ currentCarouselItem.name }}</span>
      <hr />
      <p>{{ currentCarouselItem.description }}</p>
      <br />
      <router-link :to="currentCarouselItem.externalLink">{{
        currentCarouselItem.externalLinkText
      }}</router-link>
    </div>
    <div class="carousel-right">
      <img
        :src="currentCarouselItem.imageUrl"
        :alt="currentCarouselItem.imageAlt"
      />
    </div>
  </div>
  <div class="carousel-dots" />
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      currentCarouselIndex: 0,
      carouselItems: [
        {
          name: "Chalet",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
          imageUrl: require("@/assets/shop/chalet.jpg"),
          imageAlt: "vero eos et accusamus et iusto odio.",
          externalLink: "/test",
          externalLinkText: "Test",
        },
        {
          name: "Casa El Blanco",
          description:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ",
          imageUrl: require("@/assets/shop/trio.jpg"),
          imageAlt: "harum quidem rerum facilis est et expedita.",
          externalLink: "/test",
          externalLinkText: "Test",
        },
        {
          name: "Flower",
          description:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
          imageUrl: require("@/assets/shop/flower.jpg"),
          imageAlt: "Temporibus autem quibusdam et aut officiis debitis.",
          externalLink: "/test",
          externalLinkText: "Test",
        },
      ],
    };
  },
  computed: {
    currentCarouselItem() {
      return this.carouselItems[this.currentCarouselIndex];
    },
  },
  methods: {
    updateCarousel() {
      setTimeout(() => {
        if (this.currentCarouselIndex === this.carouselItems.length) {
          this.currentCarouselIndex = 0;
        } else {
          this.currentCarouselIndex++;
        }
        this.updateCarousel();
      }, 5000);
    },
  },
  created() {
    this.updateCarousel();
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

.carousel {
  display: flex;
  width: 60vw;
  height: 82vh;
  margin: auto;

  .carousel-left,
  .carousel-right {
    width: 50vw;
    height: 100%;
  }

  .carousel-left {
    padding: 40px;

    span {
      font-size: 32px;
    }

    a {
      text-decoration: none;
      text-transform: uppercase;
      background: $dim-gray;
      border-radius: 0;
      letter-spacing: 2px;
      padding: 20px 45px;
      color: $white;
      display: inline-block;
      text-align: center;
    }
  }

  .carousel-right {
    display: flex;
    justify-content: center;

    img {
      height: 100%;
      width: auto;
      object-fit: contain;
    }
  }
}
</style>
