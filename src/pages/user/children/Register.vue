<template>
  <div>
    <div class="register-hander flex jc-sb aic">
      <span></span>
      <span class="ml-40">注册</span>
      <!-- <router-link to="/my/center" tag="span" class="mr-15">登录</router-link> -->
    </div>
    <div class="logo">
      <img src="https://file.sdyxmall.com/h5/auth/public/app/img/logo.adec77d.png" alt />
    </div>
    <form>
      <div class="form">
        <div class="form-input">
          <input placeholder="手机号" type="text" />
          <button>获取验证码</button>
        </div>
        <div v-if="tureorfales" class="phone">请输入手机号码</div>
        <div class="form-Verification">
          <input placeholder="验证码" type="text" />
        </div>
        <div style="margin-top:2px;" class="form-password">
          <input placeholder="密码" :type="tureorFales ? 'password' : 'text'" />
          <button @click="getEye()">
            <van-icon class="icon" :name="tureorFales ?'closed-eye' : 'eye-o'" />
          </button>
        </div>
        <div class="mr-25 ml-25">
          <van-button type="primary">
            <router-link to="/user/login" tag="span">注册</router-link>
          </van-button>
        </div>
        <div class="mt-30 mb-30 flex jc-c aic">
          <span class="f12">
            <i style="font-style: normal;color:#797d82">注册即代表同意</i> 《服务条款》
          </span>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tureorfales: false,
      tureorFales: true
    };
  },
  methods: {
    getEye() {
      this.tureorFales = !this.tureorFales;
    }
  }
};
</script>

<style scoped lang="less">
.register-hander {
  height: 44px;
  width: 100%;
  border-bottom: 1px solid #f6f6f6;

  .ml-40 {
    margin-left: 45px;
    color: #191a1b;
    font-size: 17px;
  }
  .mr-15 {
    color: #191a1b;
    font-size: 15px;
  }
}
.logo {
  width: 100%;
  height: 135.9px;
  // border-bottom: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 25.9px;
  }
}
.form-input {
  height: 55px;
  margin: 0px 25px;
  position: relative;

  input {
    width: 100%;
    height: 97%;
    border: none;
    font-size: 15px;
  }
  button {
    width: 90px;
    height: 30px;
    font-size: 14px;
    color: rgb(212, 217, 221);
    background-color: white;
    border: white;
    position: absolute;
    top: 12px;
    right: 0px;
    padding: 0px;
  }
  &:after {
    content: " ";
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #fbfbfb;
    display: block;
  }
  ///user/register
}
.phone {
  margin: 0px 25px;
  height: 13px;
  font-size: 11px;
  color: #c03131;
  display: inline-block;
  margin-top: 6px;
}

.form-Verification {
  height: 55px;
  margin: 0px 25px;

  input {
    width: 100%;
    height: 97%;
    border: none;
    font-size: 14px;
  }
  &:after {
    content: " ";
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #f6f6f6;
    display: block;
  }
}
.form-password {
  height: 55px;
  margin: 0px 25px;
  position: relative;

  input {
    width: 100%;
    height: 97%;
    border: none;
    font-size: 15px;
  }
  button {
    background-color: white;
    position: absolute;
    top: 18px;
    right: 0px;
    border: #191a1b;
  }
  &:after {
    content: " ";
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #f6f6f6;
    display: block;
  }
  .icon {
    font-size: 20px;
    color: rgb(187, 196, 196);
  }
}
.mr-25 {
  .van-button--primary {
    width: 100%;
    height: 45px;
    border: #c03131 1px solid;
    background: #c03131;
    font-size: 16px;
    color: rgb(255, 255, 255);
    margin-top: 50px;
    span {
      opacity: 0.5;
    }
  }
}
</style>

