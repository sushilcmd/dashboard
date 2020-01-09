function solidGaugePlot(data) {
    Highcharts.chart('solidGauge', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: "transparent",
        },
        title: {
            text: data.value+' <br>Total Sale',
            align: 'center',
            verticalAlign: 'middle',
            y: 20,
           style:
           {
            "color": "#F0C517",
            "font-size":"20px"
           }
        },
        colors: ['#F0C517', "#F0C517"],
        exporting: { enabled: false },
        credits: { enabled: false },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -150,
                    style: {
                        fontWeight: 'bold',

                    }
                },
                shadow: {
                    "color": "#ffdd00ed",
                    "width": 5,
                    "opacity": ".12",
                    "offsetY": -1,
                    "offsetX": 1
                },
                startAngle: -115,
                endAngle: 115,
                size: '170%',
                borderColor: 'transparent',
                center: ['50%', '78%']
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
        series: [{
            type: 'pie',
            innerSize: '65%',
            data: [
                ['',data.value],
                {
                    name: '',
                    y: 1,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
}