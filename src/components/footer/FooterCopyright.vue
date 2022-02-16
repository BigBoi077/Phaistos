<template>
  <div>
    <span>{{ copyrightStamp }}</span>
    <ul>
      <li v-for="item in externalLinks" :key="item.title">
        <router-link :href="item.href">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterCopyright",
  data() {
    return {
      copyrightStamp: `Ehter © ${this.getCurrentYear()}`,
      externalLinks: [
        {
          title: "Support",
          href: "",
        },
        {
          title: "Privacy Policy",
          href: "",
        },
        {
          title: "Terms of Use",
          href: "",
        },
        {
          title: "Cookie Policy",
          href: "",
        },
      ],
    };
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos";

div {
  padding: 16px 60px;
  background-color: $liver;
  display: flex;
  align-items: center;

  * {
    font-family: "Lato", sans-serif;
    font-weight: lighter;
  }

  span,
  ul li a {
    color: $white;
    font-size: 16px;
  }

  ul {
    list-style-type: none;
    display: flex;

    li {
      border-left: 1px solid $white;
      padding: 0 24px;

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
