<template>
  <div>
    <Comments :id='id' />
  </div>
</template>

<script>
import Comments from "../Subcomponents/Comments";
export default {
  props:['id'],
  components:{
    Comments
  }
}
</script>

<style>

</style>