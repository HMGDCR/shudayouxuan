<template>
  <div id="chart" class="mainContent"></div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
        this.chart = echarts.init(document.getElementById("chart"));
        this.chart.setOption({
        title: {
          text: "卖座后台数据统计"
        },
        tooltip: {},
        xAxis: {
          data: ["爱情", "喜剧", "动作", "剧情", "科幻", "恐怖","惊悚","犯罪"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [20, 45, 32, 35, 10, 20,60,39]
          }
        ]
      });
    }
  }
};
</script>

<style scoped lang="less">
.mainContent {
    width: 900px;
    height:500px;
    margin: 0 auto;
    margin-top: 160px;
}
</style>