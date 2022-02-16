<template>
  <div class="woodworking-container">
    <div class="woodworking-left">
      <span>{{ woodworkingTitle }}</span>
      <p>{{ woodworkingDescription }}</p>
      <LinkButton :href="woodworkingLink.href" :title="woodworkingLink.title" />
    </div>
    <div class="woodworking-right">
      <img :src="woodworkingImage.src" :alt="woodworkingImage.alt" />
    </div>
  </div>
</template>

<script>
import LinkButton from "@/components/LinkButton";
export default {
  name: "Woodworking",
  components: {
    LinkButton,
  },
  data() {
    return {
      woodworkingTitle: "A headquarters renown for simplicity",
      woodworkingDescription:
        "Situated in Sainte-Victoire, our headquarters is comprised of three sections : preparation, obliteration and varnishing. Learn more about them here.",
      woodworkingLink: {
        title: "Woodworking",
        href: "/woodworking",
      },
      woodworkingImage: {
        src: require("@/assets/woodworking/cristofer-maximilian-AZiyMfuAum4-unsplash.jpg"),
        alt: "Phaistos woodworking headquarters.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

.woodworking-container {
  width: 100vw;
  height: 75vh;
  display: flex;

  .woodworking-left,
  .woodworking-right {
    width: 50%;
  }

  .woodworking-left {
    background-color: $rose-ebony;
    padding: 46px;

    span {
      font-size: 32px;
      font-weight: bold;
      font-family: "Caudex", serif;
    }

    p {
      font-size: 22px;
      font-weight: lighter;
      font-family: "Lato", sans-serif;
      margin-bottom: 32px;
    }

    span,
    p {
      color: $white;
    }
  }

  .woodworking-right {
    img {
      width: 100%;
      height: 75vh;
      object-fit: cover;
    }
  }
}
</style>
