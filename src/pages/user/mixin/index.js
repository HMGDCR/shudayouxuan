export default {
    data() {
        return {
            times: 60,
            Logintimes: 60,
            isSmsCode: false, //倒计时显示的状态
            isSmsCodeLogin: false, //倒计时显示的状态
            isDisable: false, //注册是否能点击
            isDisableLogin: false //注册是否能点击
        }
    },
    methods: {
        //手机号码验证
        checkPhone(phone) {
            let phoneReg = /^1[3-9]\d{9}$/
                // let phoneReg = /\d/
            let flag = phoneReg.test(phone)
            return flag
        },

        //注册获取验证码的验证
        getSmsCode() {
            //判断手机号码是否为空
            let phone = this.phone
            if (!phone) {
                this.$toast.fail("手机号码不能为空")
                return false
            }
            if (!this.checkPhone(phone)) {
                this.$toast.fail("请输入正确的手机号码")
                return false
            } else {

                //请求接口
                let url = "/user/getSmsCode"
                let data = {
                    phone: this.phone
                }
                this.$axios.post(url, data).then(res => {
                    //定时器制作倒计时
                    let setTime = setInterval(() => {
                        this.isDisable = true
                        this.isSmsCode = true
                        this.times--
                            if (this.times == 0) {
                                this.isSmsCode = false
                                this.isDisable = false
                                clearInterval(setTime)
                            }
                    }, 1000)

                    console.log("获取验证码成功")
                    this.$toast.success("获取验证码成功")
                }).catch(err => {
                    console.log("获取验证码失败")
                    this.$toast.fail(err)
                })
            }
        },
        //登录获取验证码
        getSmsCodeLogin() {
            //判断手机号码是否为空
            let phone = this.phone
            if (!phone) {
                this.$toast.fail("手机号码不能为空")
                return false
            }
            if (!this.checkPhone(phone)) {
                this.$toast.fail("请输入正确的手机号码")
                return false
            } else {

                //请求接口
                let url = "/user/getSmsCode"
                let data = {
                    phone: this.phone
                }
                this.$axios.post(url, data).then(res => {
                    //定时器制作倒计时
                    let setTime = setInterval(() => {
                        this.isDisableLogin = true
                        this.isSmsCodeLogin = true
                        this.Logintimes--
                            if (this.Logintimes == 0) {
                                this.isSmsCodeLogin = false
                                this.isDisableLogin = false
                                clearInterval(setTime)
                            }
                    }, 1000)

                    console.log("获取验证码成功")
                    this.$toast.success("获取验证码成功")
                }).catch(err => {
                    console.log("获取验证码失败")
                    this.$toast.fail(err)
                })
            }
        },


        $loading(flag) {
            if (flag) {
                this.$toast.loading("努力加载中...");
            } else {
                this.$toast.clear();
            }
        }


    },
}