<template>
  <footer>
    <FooterLogo class="logo" />
    <FooterAsk class="ask" :action="formAction" :method="formMethod" />
    <FooterLinks class="links" />
    <FooterCopyright class="copyright" />
  </footer>
</template>

<script>
import FooterLogo from "@/components/footer/FooterLogo";
import FooterAsk from "@/components/footer/FooterAsk";
import FooterLinks from "@/components/footer/FooterLinks";
import FooterCopyright from "@/components/footer/FooterCopyright";

export default {
  name: "TheFooter",
  components: {
    FooterCopyright,
    FooterLinks,
    FooterAsk,
    FooterLogo,
  },
  data() {
    return {
      formAction: "/something", // TODO : Link to email api
      formMethod: "post",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos";

footer {
  width: 100vw;
  display: grid;
  grid-template-areas:
    "logo      logo      ask      ask"
    "links     links     ask      ask"
    "other     other     other    other";
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr 1fr 60px;

  .logo {
    grid-area: logo;
  }

  .ask {
    grid-area: ask;
  }

  .links {
    grid-area: links;
  }

  .copyright {
    grid-area: other;
  }
}
</style>
