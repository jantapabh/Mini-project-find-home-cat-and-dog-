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
                },theme: {
                    mode: 'light', 
                    palette: 'palette2', 
                    monochrome: {
                        enabled: false,
                        color: '#F9CE1D',
                        shadeTo: 'light',
                        shadeIntensity: 0.65
                    },
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
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={500} />
            </div>

        );
    }
}


export default ApexChart