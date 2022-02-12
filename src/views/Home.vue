<template>
  <Hero />
  <Introduction />
</template>

<script>
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";

export default {
  name: "Home",
  components: {
    Hero,
    Introduction,
  },
};
</script>
