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
      <div class="menu">
          <div v-for="menu in menus" :key="menu.name" class="wrapper-links">
              <router-link :to="menu.url" class="link">{{ menu.name }}</router-link>
          </div>
      </div>


      <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import menus from "@/modules"
</script>


<style scoped lang="scss">
.menu {
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: $blue-light;
  border-radius: 6px;
}

.link {
  color: $blue-dark;
  text-decoration: none;
  display: block;
}

.link::first-letter { 
  text-transform: uppercase;
}

.wrapper-links {
  position: relative;
}

.wrapper-links:before {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: $blue-dark;
  bottom: -3px;
  left: 0;
  transition: width .2s ease;
}

.wrapper-links:hover:before {
  width: 100%;
}

.wrapper-links:active:before {
  background-color: $blue-medium;
}

.link:active {
  color: $blue-medium;
}
</style>