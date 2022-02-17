<template>
  <div class="footer-links">
    <div class="single-listing" v-for="item in footerLinks" :key="item.title">
      <span>{{ item.title }}</span>
      <ul>
        <li v-for="link in item.links" :key="link.title">
          <a :href="link.href">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterLinks",
  data() {
    return {
      footerLinks: [
        {
          title: "Socials",
          links: [
            {
              title: "LinkedIn",
              href: "",
            },
            {
              title: "Instagram",
              href: "",
            },
            {
              title: "Facebook",
              href: "",
            },
            {
              title: "Behance",
              href: "",
            },
          ],
        },
        {
          title: "Woodworking",
          links: [
            {
              title: "Methodology",
              href: "",
            },
            {
              title: "People",
              href: "",
            },
            {
              title: "Tools",
              href: "",
            },
          ],
        },
        {
          title: "Ressources",
          links: [
            {
              title: "Why choose us ?",
              href: "",
            },
            {
              title: "Blog",
              href: "",
            },
            {
              title: "Guide",
              href: "",
            },
            {
              title: "Jobs",
              href: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos";

.footer-links {
  padding: 60px;
  display: flex;
  justify-content: space-between;

  .single-listing {
    span {
      font-family: "Caudex", serif;
      font-weight: bold;
      font-size: 22px;
    }

    ul {
      list-style: none;
      margin-top: 16px;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        margin-bottom: 6px;

        a {
          font-family: "Lato", sans-serif;
          font-weight: lighter;
          font-size: 16px;
          text-decoration: none;
          margin-left: 10px;
        }

        a:after {
          content: "";
          display: block;
          width: 0;
          height: 1px;
          background: $dark-liver;
          transition: width 0.3s;
        }

        a:hover::after {
          width: 100%;
        }
      }

      li:before {
        content: "—";
      }
    }
  }
}

@media only screen and (max-width: $small-breakpoint) {
  .footer-links {
    flex-direction: column;
    padding: 32px 0 0;
    border-bottom: 1px solid $dark-liver;

    .single-listing {
      padding: 0 60px;
      margin-bottom: 16px;
    }
  }
}
</style>
