Highcharts.chart('linechart', {
    title: {
        text: false
    },
    exporting: { enabled: false },
    credits: {
        enabled: false
    },
    yAxis: {
        showInLegend: false,
        title: {
            text: false
        }
    },
    // legend: {

    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'middle'
    // },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: '',
        showInLegend: false,
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }],

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
    }
});