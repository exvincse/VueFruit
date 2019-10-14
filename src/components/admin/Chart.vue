<script>
import { Bar } from 'vue-chartjs'

export default {
  props: ['chartData', 'flag'],
  extends: Bar,
  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                stepSize: 10
              }
            }
          ]
        }
      }
    }
  },
  mounted () {
    // mounted時，呼叫chart.js套件裡面的方法
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    // 監聽父元件近來資料發生變化執行方法
    flag () {
      this.renderChart(this.chartData, this.options)
    },
    deep: true
  }
}
</script>
