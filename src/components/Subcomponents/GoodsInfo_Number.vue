<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus"  type="button">-</button>
    <input ref="numbox" class="mui-input-numbox" type="number" value="1" @change="countChanged" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui";
export default {
  props:['max'],
  watch:{
    max(newVal,oldVal){
      mui('.mui-numbox').numbox().setOption('max',newVal)
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      //每当文本框的数据修改的时候，立即把 最新额数据，通过事件调用，传递给父组件
      this.$emit('getCount',parseInt(this.$refs.numbox.value))
    }
  }
};
</script>
<style>
</style>