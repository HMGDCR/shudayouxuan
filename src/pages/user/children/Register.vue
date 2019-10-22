<template>
    <div>
        <div class="register-hander"><span class=" mr-15">注册</span></div>
        <div class="logo"><img src="https://file.sdyxmall.com/h5/auth/public/app/img/logo.adec77d.png" alt=""></div>
        <form>
            <div class="form">
                <div class="form-input">
                    <input placeholder="手机号" type="text">
                    <button>获取验证码</button>
                </div>
                <div v-if="tureorfales" class="phone">请输入手机号码</div>
                <div class="form-Verification">
                    <input placeholder="验证码" type="text">
                </div>
                <div class="mr-25 ml-25">
                    <van-button type="primary"><span>短信登录</span></van-button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tureorfales:false
        }
    },
}
</script>

<style scoped lang="less">
    .register-hander{
        height: 44px;
        width: 100%;
       border-bottom: 1px solid #f6f6f6;
        span{
            line-height: 44px;
            float: right;
            font-size: 15px;
        }
    }
    .logo{
        width: 100%;
        height: 135.9px;
        // border-bottom: 1px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 25.9px;
        }
    }
    .form-input{
        height: 55px;
        margin: 0px 25px;
        // border-bottom: 1px solid red;
        position: relative;
     

       input{
           width: 100%;
           height: 97%;
           border: none;
           font-size: 15px;
       }
       button{
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
            &:after{
            content: " ";
           width: 100%;
           height: 1px;
           border-bottom: 1px solid #fbfbfb;
           display: block;
            }
///user/register
         }
        .phone{
          margin: 0px 25px;
          height: 13px;
          font-size: 11px;
          color: #c03131;
          display: inline-block;
          margin-top: 6px;
       }

           .form-Verification{
        height: 55px;
        margin: 0px 25px;

       input{
           width: 100%;
           height: 97%;
           border: none;
           font-size: 15px;           
      

       }
            &:after{
            content: " ";
           width: 100%;
           height: 1px;
          border-bottom: 1px solid #f6f6f6;
           display: block;
           
           }

    }
    .mr-25{
        .van-button--primary{
            width: 100%;
            height: 45px;
            border: #c03131 1px solid;
            background: #c03131;
            font-size: 15px;
            color: #fff;
            margin-top: 54px;
            span{
                opacity: .5;
            }
        }
    }
</style>

