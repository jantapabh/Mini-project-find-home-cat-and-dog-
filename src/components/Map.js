import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from 'apexcharts'

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{

        name: 'จำนวนสุนัขเกิดโรคพิษสุนัขบ้า',
        type: 'area',
        data: [3,2,2,1,1,1,1,1,1]
        
      }],
      options: {
    
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['อุบลราชธานี', 'ราชบุรี', 'ระยอง', 'สระแก้ว', 'สุรินทร์', 'อำนาจเจริญ', 'นครศรีธรรมราช',
          'ชลบุรี', 'พัทลุง' ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'data'
        },
        yaxis: {
          title: {
            text: 'Points',
          },
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;

            }
          }
        }
      },


    };
  }



  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>
    );
  }
}

export default Map