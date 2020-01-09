// var plotData = [{
//     name: 'Rainfall',
//     type: 'column',
//     showInLegend: false,
//     borderWidth: 0,
//     dataLabels: {
//         enabled: true,
//         color: "#ffffff",
//         style: {
//             textOutline: 0
//         }
//     },
//     yAxis: 0,
//     color: '#6b7d96',
//     data: [219, 245, 146.4, 149.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//     tooltip: {
//         valueSuffix: ' mm'
//     },

// }, {
//     name: 'Temperature',
//     showInLegend: false,
//     data: [70, 129, 95, 145, 142, 121, 122, 165, 133, 133, 139, 96],
//     tooltip: {
//         valueSuffix: '°C'
//     }
// },
// {
//     name: 'Temperature',
//     showInLegend: false,
//     data: [40, 50, 105, 120, 128, 60, 117, 139, 115, 110, 125, 122],
//     tooltip: {
//         valueSuffix: '°C'
//     }
// }]

function multipleLineChart()
{
    var plotData = [{
        name: 'Installation',
        showInLegend: false,
        color:'#FF851B',
        dataLabels: {
            enabled: false,
            color: "#FF851B",
            style: {
                textOutline: 0
            }
        },
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }]
    
Highcharts.chart('piechartContainer', {
    chart: {
        type: 'line',
        backgroundColor: "transparent",
    },
    title: {
        text: false
    },
    exporting: { enabled: false },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: false,
        style: {
            "text-overflow": "ellipsis",
            "overflow": "hidden",
            "white-space": "nowrap"
        },
        labels: {
            text: false,
            rotation: 90,
            align: 'left',
            style: {
                color: "#FFDD00"
            }
        },
        tickWidth: 1
    },
    yAxis: {
        labels: {
            format: '{value}°C',
            style: {
                style: {
                    "text-overflow": "ellipsis",
                    "overflow": "hidden",
                    "white-space": "nowrap"
                },
            }
        },
        showInLegend: false,
        visible: false,
        title: {
            text: false,
            style: {
                color: '#8085e9'
            }
        }
    },
    gridLineColor: '#334257',
    gridLineDashStyle: 'ShortDot',
    lineWidth: 1,
    lineColor: "#334257",
    opposite: false,
    tooltip: true,
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            shadow: {
                "color": "#FF851B",
                "width": 6,
                "opacity": ".12",
                "offsetY": -1,
                "offsetX": 1
            }
            
        }
    },
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
    series: plotData
});
}