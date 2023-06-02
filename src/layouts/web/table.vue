<template><v-responsive class="mx-auto elevation-11 rounded-xl" max-width="1100px" min-width="400px">
    <v-tabs
    v-model="tab"
    bg-color="white"
  >
    <v-tab value="one">未出租</v-tab>
    <v-tab value="two">已经出租</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item value="one">
        <v-table fixed-header height="500" style="background-color: azure;">
            <thead>
              <tr>
                <th class="text-left">
                  场地编号
                </th>
                <th class="text-left">
                    场地名称
                  </th>
                <th class="text-left">
                  库存时间
                </th>
                <th class="text-left">
                    出租
                  </th>
                  <th class="text-left">
                    删除
                  </th>
                  <th class="text-left">
                    修改
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in 100"
                :key="item.name"
              >
                <td>{{ item }}</td>
                <td>{{ item }}</td>
                <td>{{ item }}</td>
                <td><v-btn>
                   出租
                  </v-btn></td>
                <td><v-btn>
                    删除
                  </v-btn>
                </td>
                <td><v-btn>
                    修改
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
      </v-window-item>
      <v-window-item value="two">
        <v-table fixed-header height="500" style="background-color: azure;">
            <thead>
              <tr>
                <th class="text-left">
                  场地编号
                </th>
                <th class="text-left">
                    场地名称
                  </th>
                <th class="text-left">
                  出租时间
                </th>
                <th class="text-left">
                    收回
                  </th>
                  <th class="text-left">
                    删除
                  </th>
                  <th class="text-left">
                    修改
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in 100"
                :key="item.name"
              >
                <td>{{ item }}</td>
                <td>{{ item }}</td>
                <td>{{ item }}</td>
                <td><v-btn>
                   收回
                  </v-btn></td>
                <td><v-btn>
                    删除
                  </v-btn>
                </td>
                <td><v-btn>
                    修改
                  </v-btn>
                </td>
              </tr>
            </tbody>
            
          </v-table>
      </v-window-item>
    </v-window>
    <v-table fixed-header height="40" style="background-color: azure;">
    <v-btn @click="xiugai();">提交修改</v-btn>
    </v-table>
    </v-responsive>
</template>
<script setup>
import { ref } from 'vue';
const tab=ref("");
function xiugai(){
    alert("修改成功");
}
</script>