<template>
  <div>
    <!-- 子组件 -->
    <p>子组件userName：{{userName}}</p>
    <button @click="fn">修改</button>
  </div>
</template>
<script>
export default {
  props: ["userName"],
  data() {
    return {
      editName: ""
    };
  },
  created() {
    this.editName = this.userName;
  },
  methods: {
    fn() {
      this.editName = "1111111";
      this.$emit("getChild", this.editName);
    }
  }
};
</script>