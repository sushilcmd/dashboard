function areaStacked()
{
var plotData = [{
    name: 'Asia',
    data: [502, 635, 809, 947, 1402, 3634, 5268]
}, {
    name: 'Africa',
    data: [106, 107, 111, 133, 221, 767, 1766]
}, {
    name: 'Europe',
    data: [163, 203, 276, 408, 547, 729, 628]
},]
Highcharts.chart('piechartContainer', {
    chart: {
        type: 'area',
        backgroundColor: "transparent",
        style: {
            "border-radius": "5px",
        }
    },
    exporting: { enabled: false },
    title: {
        text: '',
        style: {
            color: "white"
        }
    },
    credits: {
        enabled: false
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        },
        type: 'category',
        lineWidth: 1,
        lineColor: "#334257",
        categories: '',
        tickWidth: 0,
        labels: {
            style: {
                color: "#ffffff",
                "font-size": "10px",
            }
        }

    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {

            style: {
                color: "#ffffff",
                "font-size": "10px",
            },

            formatter: function () {
                return this.value / 1000 + 'k';
            }
        },
        gridLineColor: '#334257',
        gridLineDashStyle: 'ShortDot',
        lineWidth: 1,
        lineColor: "#334257",
        opposite: false,
    },
    tooltip: {
        enabled: false,
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        },
    },
    series: plotData,
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
});
}