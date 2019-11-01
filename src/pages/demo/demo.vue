

<template>
  <div>
    <!-- 父组件 没有异步请求 -->
    <child :userName="userName" @getChild="getChild" />
    <p>父组件userName：{{userName}}</p>

    <input type="text" v-model="value" />
    <p>vuex传值----{{demoUserName}}</p>
    <br />
    <button @click="changeVuex">vuex值的修改</button>
  </div>
</template>
<script>
import child from "./child";
export default {
  components: {
    child
  },
  data() {
    return {
      userName: "炮哥",
      value: ""
    };
  },
  created() {
    this.value = this.demoUserName;
  },
  methods: {
    //changeVuex
    changeVuex() {
      this.$store.commit("demoUserName", this.value);
    },
    getChild(value) {
      this.userName = value;
    }
  },
  computed: {
    demoUserName() {
      return this.$store.state.demoUserName;
    }
  }
};
</script>

  