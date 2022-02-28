<template>
  <header>
    <router-link to="/" class="header-left">
      <img src="@/assets/phaistos_logo_no_bg.png" alt="Phaistos logo" />
      <span>Phaistos</span>
    </router-link>
    <HamburgerMenu />
    <nav class="menu-items">
      <ul>
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="navItem.link">{{ navItem.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import HamburgerMenu from "@/components/header/HamburgerMenu";
export default {
  name: "Header",
  components: { HamburgerMenu },
  data() {
    return {
      navItems: [
        {
          name: "Home",
          link: "/home",
        },
        {
          name: "Shop",
          link: "/shop",
        },
        {
          name: "Woodworking",
          link: "/woodworking",
        },
        {
          name: "About",
          link: "/about",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos";

header {
  height: 8vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  .header-left {
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      margin-left: 32px;
      font-size: 36px;
      font-family: "Caudex", serif;
    }

    img {
      height: 100px;
      width: auto;
    }
  }

  .hamburger-menu {
    display: none;
  }

  nav.menu-items {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;

      li {
        margin-left: 8px;

        a {
          margin: 16px 26px;
          font-size: 20px;
          text-decoration: none;
          color: $dark-liver;
          display: inline-block;
          font-family: "Caudex", serif;
        }

        a:after {
          content: "";
          display: block;
          width: 0;
          height: 1px;
          background: $dark-liver;
          transition: width 0.3s;
        }

        a.selected::after,
        a:hover::after {
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (max-width: $small-breakpoint) {
  header {
    .header-left {
      img {
        height: 50px;
      }
    }

    nav.menu-items {
      display: none;
    }
  }
}
</style>
