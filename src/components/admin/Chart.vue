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
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    flag () {
      this.renderChart(this.chartData, this.options)
    },
    deep: true
  }
}
</script>
