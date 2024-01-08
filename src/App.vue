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

      <div class="wrapper-icon" @click="toggleDark()">
        <!-- <img
          src="../public/icons/sun.svg"
          @click="toggleDark()"
          style="width: 24px; height: 24px"
        /> -->

        <UIIcon :icon="isDark ? 'moon' : 'sun'" style="width: 16px; height: 16px;" class="ic" :style="styleIcon"></UIIcon>
        <!-- {{ toggleDark() }} -->
      </div>
    </section>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import menus from "@/modules";
import UIIcon from '@/components/UI/Icon.vue'
import { ref, computed } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  disableTransition: false,
});
const toggleDark = useToggle(isDark);

const styleIcon = computed(() => {
  // return "align-items: flex-end"

  return isDark.value ? "left: 61%" : "left: 5px"
})
</script>

<style scoped lang="scss">
.wrapper-icon {
  width: 58px;
  height: 25px;
  background-color: #fff;
  border-radius: 12px;
  padding: 2px 5px 2px;
  border: 1px solid #fff;
  // display: flex;
  // flex-direction: column;
  // align-items: flex-end;

  // transition: all 1s ease !important;

  position: relative;
}

.ic {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translate(-0px, -50%);

  transition: .2s;
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
