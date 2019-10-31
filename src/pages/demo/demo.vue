<template>
  <div>
    <van-password-input
  :value="value"
  info="密码为 6 位数字"
  :mask="false"
  
  :focused="showKeyboard"
  @focus="showKeyboard = true"
 
/>
    <van-number-keyboard
     
  :show="showKeyboard"
  @input="onInput"
  @delete="onDelete"
  @blur="showKeyboard = false"
/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '123456',
      showKeyboard: true
    };
  },

  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
}
</script>