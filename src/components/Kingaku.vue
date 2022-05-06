<template>
  <div>
    <h1>This is a emit sample</h1>
    
    <!-- # パターン1:受け取った値をそのまま使う場合は$eventで受け取る
         # パターン2:受け取った値をメソッドの引数で受け取る -->
    <!-- <Child @my-click="sum_kingaku = $event" /> -->
    <Child></Child>
    <hr />
    <p>合計金額: {{ getTotal }} 円</p>
  </div>
</template>

<script>
import Child  from "./Child.vue"
import { mapGetters } from "vuex"
export default {
  components: {
    Child
  },
  computed: {
    ...mapGetters(["getTotal"])
  }
};
</script>
<style>
p {
  font-size: 40px;
}
</style>
