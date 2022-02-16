<template>
  <Hero />
  <Introduction />
  <Woodworking />
</template>

<script>
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Woodworking from "@/components/Woodworking";

export default {
  name: "Home",
  components: {
    Hero,
    Introduction,
    Woodworking,
  },
};
</script>
