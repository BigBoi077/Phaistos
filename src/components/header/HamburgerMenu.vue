<template>
  <div class="hamburger-menu-container" v-on:click="toggleMenu">
    <div class="hamburger-menu" :class="isMenuOpen ? 'open' : ''" />
    <nav class="hamburger-menu-items" :class="isMenuOpen ? '' : 'hidden'">
      <ul>
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="navItem.link">{{ navItem.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      isMenuOpen: false,
      navItems: [
        {
          name: "Home",
          link: "/home",
          selected: true,
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
  methods: {
    toggleMenu() {
      this.lockScroll();
      this.isMenuOpen = !this.isMenuOpen;
    },
    lockScroll() {
      document.getElementsByTagName("body")[0].classList.toggle("scroll-lock");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos";

.hamburger-menu-container {
  display: none;
}

@media only screen and (max-width: $small-breakpoint) {
  * {
    transition: all 0.25ms ease-in-out;
  }

  .hamburger-menu-container {
    display: block !important;
    height: 40px;
    width: 32px;
    position: relative;
  }

  .hamburger-menu {
    top: 18px;
  }

  .hamburger-menu,
  .hamburger-menu:before,
  .hamburger-menu:after {
    position: absolute;
    display: block;
    height: 1px;
    width: 32px;
    background-color: $dark-liver;
    color: $dark-liver;
  }

  .hamburger-menu:before,
  .hamburger-menu:after {
    content: "";
  }

  .hamburger-menu:before {
    transform: translateY(-10px);
  }

  .hamburger-menu:after {
    transform: translateY(10px);
  }

  .hamburger-menu.open {
    height: 0;
  }

  .hamburger-menu.open:before {
    transform: rotate(45deg);
  }
  .hamburger-menu.open:after {
    transform: rotate(-45deg);
  }

  nav {
    background-color: $white;
    position: absolute;
    width: 170px;
    top: 50px;
    right: -16px;
    z-index: 3;

    ul {
      list-style: none;
      padding: 12px 12px 12px 26px;

      li {
        margin-bottom: 16px;

        a {
          font-size: 16px;
          text-decoration: none;
          color: $dark-liver;
          display: inline-block;
          font-family: "Lato", sans-serif;
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
</style>
