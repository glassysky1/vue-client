<template>
  <div class="mui-numbox">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" type="number" value="1" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui'
export default {
  mounted() {
    mui('.mui-numbox')
      .numbox()
  }
};
</script>
<style>
</style>