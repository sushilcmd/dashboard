var helperMeta = {
    customerName: '',
    startDate: "20190101",
    endDate: "20191211",
}

var dashboardSetting = {
    customerInfo: '',
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD"),
    screenConfig: [{
            id: 1,
            name: 'gaugeChart',
            isChart: true,
            singleChart: true,
            headerTitle: 'total payment',
            parentClassName: 'chart',
        },
        {
            id: 2,
            name: 'payment chart',
            isChart: true,
            singleChart: false,
            showTableIcon: true,
            showChartIcon: true,
            headerTitle: 'payment modes',
            parentClassName: 'pieWithGrid',
            categoryMeta: []
        },

        {
            id: 3,
            name: 'salesStatistics',
            isChart: false,
            singleChart: false,
            headerTitle: 'sales status',
            parentClassName: 'salesStatistics',
            isMultipleRow: false,
            isFourGrid: true,
            showTableIcon: false,
            showChartIcon: false,
            scrollClass: '',
            gridMeta: [{
                    title: 'sale',
                    value: 0,
                    className: 'fourCol'
                },
                {
                    title: 'bill',
                    value: 0,
                    className: 'fourCol'
                },
                {
                    title: 'cover',
                    value: 0,
                    className: 'fourCol'
                },
                {
                    title: 'apb',
                    value: 0,
                    className: 'fourCol'
                },
                {
                    title: 'apc',
                    value: 0,
                    className: 'fourCol'
                }
            ]
        },
        {
            id: 4,
            name: 'salesByCategory',
            isChart: false,
            singleChart: false,
            headerTitle: 'sales By Category',
            parentClassName: 'salesByCategory',
            isMultipleRow: false,
            isFourGrid: false,
            showTableIcon: false,
            showChartIcon: false,
            scrollClass: 'addScroll',
            gridMeta: []
        },
        {
            id: 7,
            name: 'saleByServiceType',
            isChart: false,
            singleChart: false,
            headerTitle: 'sales by service',
            parentClassName: 'saleByServiceType',
            isMultipleRow: false,
            isFourGrid: false,
            showTableIcon: false,
            showChartIcon: false,
            scrollClass: 'addScroll',
            gridMeta: []
        },
        {
            id: 8,
            name: 'orderStatus',
            isChart: false,
            singleChart: false,
            headerTitle: 'current order status',
            parentClassName: 'currentOrderStatus',
            tableContentClass: 'topCategories',
            isMultipleRow: false,
            isFourGrid: false,
            showTableIcon: false,
            showChartIcon: false,
            showConsumption: false,
            isBoxLayout: true,
            orders: [],
        },
        {
            id: 9,
            name: 'orderDetails',
            isChart: false,
            singleChart: false,
            headerTitle: 'discount / complementry',
            parentClassName: 'saleByItems',
            isMultipleRow: false,
            isFourGrid: false,
            showTableIcon: false,
            showChartIcon: false,
            isOrderDetails: true,
            isDiscount: true,
            showConsumption: true,
            tableContentClass: 'orderDetails',
            detailsHeader: [{
                    id: 'desicountBill',
                    detailsHeaderName: 'discount bill',
                    defaultClass: 'selected',
                    cardClass: 'c1'
                },
                {
                    id: 'Complimentary',
                    detailsHeaderName: 'complementry',
                    defaultClass: '',
                    cardClass: 'c1'
                },
                {
                    id: 'On The House',
                    detailsHeaderName: 'OTH',
                    defaultClass: '',
                    cardClass: 'c1'
                }
            ],
            tableInfo: [{
                    name: 'billNo',
                    textAlignClass: "textLeft"
                },
                {
                    name: 'amount',
                },
                {
                    name: 'dis %',
                },
                {
                    name: 'dis amt',
                },
                {
                    name: 'by',
                }
            ],
            items: []
        },
        {
            id: 15,
            name: 'modification',
            isChart: false,
            singleChart: false,
            headerTitle: 'modification / cancelation',
            parentClassName: 'saleByItems',
            isMultipleRow: false,
            isFourGrid: false,
            showTableIcon: false,
            showChartIcon: false,
            isOrderDetails: true,
            showConsumption: true,
            tableContentClass: 'orderDetails',
            detailsHeader: [{
                    id: 'modificationBill',
                    detailsHeaderName: 'modification bill',
                    defaultClass: 'selected',
                    tabClassStyle: "widthHalf",
                    cardClass: 'c2'
                },
                {
                    id: 'cancelBill',
                    detailsHeaderName: 'cancel bill',
                    defaultClass: '',
                    tabClassStyle: "widthHalf",
                    cardClass: 'c2'
                }
            ],
            tableInfo: [{
                    name: 'billNo',
                    textAlignClass: "textLeft"
                },
                {
                    name: 'amount',
                },
                {
                    name: 'dis %',
                },
                {
                    name: 'dis amt',
                },
                {
                    name: 'by',
                }
            ],
            items: []
        },
        {
            id: 5,
            name: 'saleByItems',
            isChart: false,
            singleChart: false,
            headerTitle: 'item consumption',
            parentClassName: 'saleByItems',
            isMultipleRow: true,
            isFourGrid: false,
            showTableIcon: false,
            showChartIcon: false,
            showConsumption: true,
            tableContentClass: 'itemConsumption',
            items: []
        },
        {
            id: 6,
            name: 'saleBySubCategories',
            isChart: false,
            singleChart: false,
            headerTitle: 'item categories consumption',
            parentClassName: 'saleBySubCategories',
            tableContentClass: 'topCategories',
            isMultipleRow: true,
            isFourGrid: false,
            showTableIcon: false,
            showChartIcon: false,
            showConsumption: false,
            items: []
        },
        {
            id: 7,
            name: 'DepartmentwiseItem',
            isChart: false,
            singleChart: false,
            headerTitle: 'Dept Item Cons',
            parentClassName: 'saleBySubCategories',
            tableContentClass: 'topCategories',
            isMultipleRow: true,
            isFourGrid: false,
            showTableIcon: false,
            showChartIcon: false,
            showConsumption: false,
            items: []
        },
    ]
}