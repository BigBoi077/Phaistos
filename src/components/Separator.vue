<template>
  <hr :style="separatorStyle" />
</template>

<script>
export default {
  name: "Separator",
  props: {
    separatorHeight: Number,
    separatorWidth: Number,
  },
  computed: {
    separatorStyle() {
      return {
        height: `${this.separatorHeight}px`,
        width: `${this.separatorWidth}%`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

hr {
  color: $white;
  background-color: $white;
  border-color: $white;
}
</style>
