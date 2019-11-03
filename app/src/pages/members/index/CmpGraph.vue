<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ['chartdata', 'options'],
  mounted: function() {
    this.renderChart(this.chartdata, this.options)
  }
};
</script>>
