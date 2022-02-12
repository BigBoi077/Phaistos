<template>
  <header>
    <div class="header-left">
      <img src="@/assets/phaistos_logo_no_bg.png" alt="Phaistos logo" />
      <span>Phaistos</span>
    </div>
    <nav>
      <ul>
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link
            :to="navItem.link"
            :class="navItem.selected ? 'selected' : ''"
          >
            {{ navItem.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navItems: [
        {
          name: "Home",
          link: "#",
          selected: true,
        },
        {
          name: "Shop",
          link: "#",
        },
        {
          name: "Woodworking",
          link: "#",
        },
        {
          name: "About",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

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

  nav {
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
</style>
