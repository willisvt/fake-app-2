<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  mounted() {
    this.renderChart(
      {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running',
        ],
        datasets: [
          {
            label: 'Desktops',
            backgroundColor: 'rgba(52, 195, 143, 0.2)',
            borderColor: '#34c38f',
            pointBackgroundColor: '#34c38f',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#34c38f',
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: 'Tablets',
            backgroundColor: 'rgba(85, 110, 230, 0.2)',
            borderColor: '#1A88F0',
            pointBackgroundColor: '#1A88F0',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#1A88F0',
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
      },
      {
        maintainAspectRatio: true,
        legend: {
          position: 'top',
        },
      }
    )
  },
}
</script>