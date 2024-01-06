<!-- <template>
  <component :is="$route.meta.layoutComponent">
    <router-view></router-view>
  </component>
</template>

<script setup lang="ts">
import menus from "@/modules"
console.log(menus);

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped lang="scss">
.btn {
    background-color: #912511;
    color: #fff;
    border: none;
    padding: 3px;
}
</style> -->

<template>
  <div class="container">
    <section class="menu">
      <div class="wrapper-links">
        <router-link
          v-for="menu in menus"
          :key="menu.name"
          class="link"
          :to="menu.url"
          >{{ menu.name }}</router-link
        >
      </div>

      <div class="wrapper-icon">
        <!-- <img
          src="../public/icons/sun.svg"
          @click="toggleDark()"
          style="width: 24px; height: 24px"
        /> -->

        <i class="st"></i>
      </div>
    </section>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import menus from "@/modules";
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped lang="scss">
.st {
  mask-image: url("../public/icons/moon.svg");
  -webkit-mask-image: url("../public/icons/moon.svg");
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: black;
}

.menu {
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: $blue-light;
  border-radius: 6px;

  .wrapper-links {
    display: flex;
    flex-direction: row;
    gap: 12px;

    .link {
      position: relative;
      color: $blue-dark;
      text-decoration: none;
      display: block;
    }

    .router-link-active {
      color: $blue-medium;
    }

    .router-link-active:before {
      background-color: $blue-medium;
      width: 100%;
    }
  }
}

.link::first-letter {
  text-transform: uppercase;
}

// .link:active {
//   color: $blue-medium;
// }

.link:before {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: $blue-dark;
  bottom: -3px;
  left: 0;
  transition: width 0.2s ease;
}

.link:hover:before {
  width: 100%;
}

// .link:active:before {
//   background-color: $blue-medium;
// }
</style>
