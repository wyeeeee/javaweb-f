<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
  <div class="mx-auto text-h2 mt-10 mb-10 "  style="text-align: center; color: azure;" >场地租赁管理系统</div>

  <router-view></router-view>
</v-parallax>
</template>

<script setup>
import router from '@/router/index.js'
router.push('/login')
</script>
