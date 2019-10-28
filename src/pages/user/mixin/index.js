export default {
    methods: {
        //手机号码验证
        checkPhone(phone) {
            let phoneReg = /^1[3-9]\d{9}$/
                // let phoneReg = /\d/
            let flag = phoneReg.test(phone)
            return flag
        },
        //验证码的验证
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