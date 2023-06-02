<template>
    <v-responsive
    class="mx-auto"
    max-width="400"
    height="400"
  >
    <v-card class="mx-auto  rounded" height="200">
    <v-responsive
    class="mx-auto"
    max-width="400"
  >

    <v-text-field
      label="账户名"
      hide-details="auto"
      v-model="user"
    ></v-text-field>
  </v-responsive>
  <v-responsive
    class="mx-auto ma-1"
    max-width="400"
  >
    <v-text-field
      label="密码"
      hide-details="auto"
      v-model="pwd"
    ></v-text-field>
  </v-responsive>
  <v-responsive
    class="mx-auto ma-1 pa-3"
    max-width="400"
  >
  <v-btn @click="say('注册成功')">
    注册
  </v-btn>
  <v-btn @click="say('登录成功')">
    登录
  </v-btn>

</v-responsive>
</v-card>
</v-responsive>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import router from '@/router/index.js'
const user=ref("");
const pwd=ref("");
function say(message) {
  axios.get("http://localhost:8088/hello?user="+user.value+"&password="+pwd.value).then((response) => {
  console.log(response.data)
  if(response.data==1){
    alert("登录成功");
    router.push('/table');
  }else{
    alert("登录失败");
    router.push('/table');
  }
})
}
</script>