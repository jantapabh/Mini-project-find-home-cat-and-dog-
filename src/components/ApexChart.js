import React, {Component} from 'react'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from 'apexcharts'

class ApexChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [2064876, 109123 ],
            options: {
                chart: {
                    width: 500,
                    type: 'pie',
                },
                labels: ['จำนวนสุนัขที่มีเจ้าของ', 'จำนวนสุนัขที่ไม่มีเจ้าของ', ],
                responsive: [{
                    breakpoint: 550,
                    options: {
                        chart: {
                            width: 600
                        },
                        legend: {
                            position: 'center'
                        }
                    }
                }]
            },


        };
    }


    render() {

        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={550} />
            </div>

        );
    }
}


export default ApexChart