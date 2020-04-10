import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from 'apexcharts'



class ChartTwo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [55, 15],
            options: {
                chart: {
                    type: 'donut',
                },
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
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
            </div>


        );
    }
}


export default ChartTwo