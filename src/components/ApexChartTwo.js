import React, {Component} from 'react'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from 'apexcharts'

class ApexChartTwo extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
        
          series: [799235, 55021],
          options: {
            chart: {
              type: 'donut',
            },
            labels: ['จำนวนแมวที่มีเจ้าของ', 'จำนวนแมวที่ไม่มีเจ้าของ', ],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        
        
        };
      }
    
    
    
      render() {
        return (
          
    
    <div id="chart">
    <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={500} />
    </div>
    
    
        );
      }
    }


export default ApexChartTwo