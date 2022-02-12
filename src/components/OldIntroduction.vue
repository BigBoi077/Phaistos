<template>
  <div class="introduction-container">
    <img
      v-for="image in images"
      :key="image.id"
      :src="image.imageSrc"
      :style="getStyle(image)"
    />
  </div>
</template>

<script>
export default {
  name: "OldIntroduction",
  data() {
    return {
      images: [
        {
          id: 1,
          imageSrc: require("@/assets/woodworking/bailey-alexander-_YtDmIAj8O4-unsplash.jpg"),
          imageAlt:
            "Nunc porttitor tristique nibh, commodo dignissim mauris rhoncus vitae.",
          size: {
            width: "300px",
          },
          position: {
            x: 10,
            y: 10,
          },
        },
        {
          id: 2,
          imageSrc: require("@/assets/woodworking/carlo-borella-s9QlFhP8b74-unsplash.jpg"),
          imageAlt:
            "Nunc porttitor tristique nibh, commodo dignissim mauris rhoncus vitae.",
          size: {
            width: "300px",
          },
          position: {
            x: 10,
            y: 50,
          },
        },
        {
          id: 3,
          imageSrc: require("@/assets/woodworking/cristofer-maximilian-AZiyMfuAum4-unsplash.jpg"),
          imageAlt:
            "Nunc porttitor tristique nibh, commodo dignissim mauris rhoncus vitae.",
          size: {
            width: "100px",
          },
          position: {
            x: 10,
            y: 10,
          },
        },
        {
          id: 4,
          imageSrc: require("@/assets/woodworking/philip-swinburn-vS7LVkPyXJU-unsplash.jpg"),
          imageAlt:
            "Nunc porttitor tristique nibh, commodo dignissim mauris rhoncus vitae.",
          size: {
            width: "500px",
          },
          position: {
            x: 10,
            y: 10,
          },
        },
      ],
    };
  },
  methods: {
    getStyle(image) {
      return `width: ${image.size.width};transform: translate(${image.position.x}%, ${image.position.y}%);`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

.introduction-container {
  width: 100vw;

  img {
    height: auto;
    position: relative;
  }
}
</style>
