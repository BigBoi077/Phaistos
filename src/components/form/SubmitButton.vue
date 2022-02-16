<template>
  <button type="submit">
    <span>{{ title }}</span>
    <font-awesome-icon icon="arrow-right" />
  </button>
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos";

button {
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  background-color: $chocolate-web;
  width: 35%;
  border: none;
  margin: 0;
  padding: 12px 12px 12px 28px;

  &:hover {
    cursor: pointer;

    svg {
      display: inline;
      opacity: 1;
    }
  }

  span {
    color: $white;
    font-size: 22px;
    font-family: "Lato", sans-serif;
  }

  svg {
    opacity: 0;
    color: white;
    height: 16px;
    margin-left: 16px;
    margin-top: 2px;
    transition: opacity 0.75s ease-in-out;
  }
}
</style>
