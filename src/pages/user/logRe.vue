<template>
  <div>
    <div class="register-hander" v-if="path===`/logRe/login`">
      <router-link to="/logRe/register" tag="span" class="mr-15">注册</router-link>
    </div>
    <div class="register-hander" v-else>
      <router-link to="/logRe/login" tag="span" class="mr-15">登录</router-link>
    </div>
    <div class="logo">
      <img src="https://file.sdyxmall.com/h5/auth/public/app/img/logo.adec77d.png" alt />
    </div>
    <form>
      <div class="form">
        <div class="form-input">
          <input placeholder="手机号" type="text" v-model="phone" />
          <van-button type="primary" :loading="loading" :loading-text="loadingText"  @click="getSmsCode">获取验证码</van-button>
        </div>
        <div v-if="tureorfales" class="phone">请输入手机号码</div>
        <div class="form-Verification">
          <input placeholder="验证码" type="text" v-model="smsCode" />
        </div>
        <div style="margin-top:2px;" class="form-password" v-if="path===`/logRe/register`">
          <input placeholder="密码" :type="tureorFales ? 'password' : 'text'" v-model="password" />
          <button @click="getEye()">
            <van-icon class="icon" :name="tureorFales ?'closed-eye' : 'eye-o'" />
          </button>
        </div>
        <!-- <router-link to="/my/center" tag="div" class="mr-25 ml-25" v-if="path===`/logRe/login`"> -->
        <div class="mr-25 ml-25" v-if="path===`/logRe/login`" @click="getLogin">      
          <van-button type="primary">
            <span>短信登录</span>
          </van-button>
          </div>
        <!-- </router-link> -->

        <div class="mr-25 ml-25" @click="getRegister" v-else>
          <van-button type="primary">
            <span>注册</span>
          </van-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
//局部导入mixin大方式
import mixin from '@/pages/user/mixin/index'
export default {
  //局部使用mixin的方式
  mixins:[mixin],
  data() {
    return {
      tureorfales: false,
      tureorFales: true,
      phone: "19879918459",
      password: "hmg",
      smsCode: "",
      loading:false,
      loadingText:""
    };
  },
  methods: {   
    //注册
    getRegister() {
      let url = "/user/register";
      let data = {
        phone: this.phone,
        password: this.password,
        smsCode: this.smsCode
      };
      this.$axios
        .post(url, data)
        .then(res => {
          console.log("注册：", res);
           let clear = this.$toast.success("注册成功")
           setTimeout(()=>{
             clear.clear()
           },1000)
        })
        .catch(err => {
          console.log("err", err);
          let clear=  this.$toast.fail(err)
          setTimeout(()=>{
            clear.clear()
          },1000)
        });
    },
    //登录
    getLogin(){
      let url = "/user/login";
      let data ={
        phone: this.phone,      
        smsCode: this.smsCode
      }
      this.$axios.post(url,data).then(res=>{
        console.log("登录：",res)
        //给this.$toast.success("登录成功")一个变量，用于在定时器里清除
        let clear = this.$toast.success("登录成功")
        this.$store.commit("phone",res.result.phone)
        this.$store.commit("isLogin",true)
        //存入token的值
        this.$store.commit("updateToken",res.result.token)      

        setTimeout(()=>{
          clear.clear()
            this.$router.push("/my/center")
        },500)      
       
      }).catch(err=>{
        console.log("登录失败",err)
           this.$toast.fail("请输入正确的手机号码")
      })
    },

    getEye() {
      this.tureorFales = !this.tureorFales;
    }
  },
 
  computed: {
    path() {
      let path = this.$route.path;
      return path;
    },
    
  
  }
};
</script>

<style scoped lang="less">
.register-hander {
  height: 44px;
  width: 100%;
  border-bottom: 1px solid #f6f6f6;
  span {
    line-height: 44px;
    float: right;
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
  // border-bottom: 1px solid red;
  position: relative;

  input {
    width: 100%;
    height: 97%;
    border: none;
    font-size: 15px;
  }
  button {
    width: 72px;
    height: 30px;
    background: white;
    font-size: 14px;
    color: #bdc0c5;
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
    font-size: 15px;
  }
  &:after {
    content: " ";
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #f6f6f6;
    display: block;
  }
}
.mr-25 {
  .van-button--primary {
    width: 100%;
    height: 45px;
    border: #c03131 1px solid;
    background: #c03131;
    font-size: 15px;
    color: #fff;
    margin-top: 54px;
    span {
      opacity: 0.5;
    }
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
</style>

