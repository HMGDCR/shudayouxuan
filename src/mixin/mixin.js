export default {

    filters: {
        fomatDate(time) {
            let date = new Date(time);
            let Y = date.getFullYear();
            let M = date.getMonth() + 1;
            let D = date.getDate();
            return `${Y}年-${M}月-${D}日`;
        },

        formatMoney(num) {
            return (num / 100).toFixed(2);
        }

    },

    methods: {
        $loading(flag) {
            if (flag) {
                const toast = this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: '加载中'
                });
            } else {
                this.$toast.clear();
            }
        }
    },
}