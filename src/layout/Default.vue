<template>
    <div class="container">
        <div class="menu">
            <div v-for="menu in menus" :key="menu.name" class="wrapper-links">
                <router-link :to="menu.url" class="link">{{ menu.name }}</router-link>
            </div>
        </div>
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
    height: 3px;
    background-color: #fff;
    bottom: -3px;
    left: 0;
    transition: width .2s ease;
}

.wrapper-links:hover:before {
    width: 100%;
}
</style>