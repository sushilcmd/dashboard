function columnChart(data) {
    Highcharts.chart(data.className,  {
        chart: {
            type: 'column',
            "backgroundColor": "transparent",
            style: {
                "border-radius": "5px",
            },
        },

        title: { text: false },
        exporting: { enabled: false },
        credits: { enabled: false },
        legend: { enabled: false },
        tooltip: false,
        xAxis: [{
            categories: data.categories,
            crosshair: false,
            type: 'category',
            tickWidth: 0,
            lineWidth: 1,
            lineColor: "transparent",
            labels: {
                style: {
                    color: "#FF851B",
                    "font-size": "10px",
                    "text-transform":"uppercase"
                }
            }
        }],
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor: "transparent",
            gridLineDashStyle: 'ShortDot',
            lineColor: "transparent",
            lineWidth: 1,
            opposite: false,
            labels: {
                style: {
                    color: "#FF851B",
                    "font-size": "10px",
                }
            }
        },

        series: [{
            data: data.value,
            color: "#FF851B"
        }],
        plotOptions: {
            series: {
                borderWidth: 0,
                borderRadius: 3,
                pointWidth: 30,
                
                dataLabels: {
                    enabled: true,
                    allowOverlap: true,
                    rotation: 360,
                    verticalAlign: 'top',
                    y: -8,
                    x: 1,
                    style: {
                        "font-size": "10px",
                    }
                }
            },
            column: {
                stacking: 'normal',
                grouping: true,
                borderRadius: 5
            }
        },

    });
}
