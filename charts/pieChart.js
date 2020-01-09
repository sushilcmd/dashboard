function pieChart(data) {
    Highcharts.chart('piechartContainer', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: "transparent",
        },
        colors: ['#2ecc71', '#3498db', '#8e44ad', '#e74c3c'],
        title:{text:false},
        exporting: { enabled: false },
        credits: { enabled: false },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                shadow: {
                    "color": "#10355f",
                    "width": 10,
                    "opacity": ".1",
                    "offsetY": -1,
                    "offsetX": 1
                },
                startAngle: 0,
                endAngle: 360,
                borderColor: 'transparent',
                size: '120%',
                center: ['53%', '54%']
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
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['cash', data[0].value],
                ['card', data[1].value],
                ['ewallet', data[2].value],
                {
                    name: 'Other',
                    y: data[3].value,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
}