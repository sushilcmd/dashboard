$(document).ready(function() {
    makeTemplates();
    loginScreen.show()
})

function getAllSale111(customerInfo) {
    customerInfo['type'] = 'all'
    $('.loaderContainer').show();

    return Promise.resolve().then(_ => {

        const r$ = execute('getTotalSale', customerInfo)
        const r1$ = execute('getSaleByPaymentMode', customerInfo)
        const r2$ = execute('getTWItemsSale', customerInfo)
        const r3$ = execute('getTopItemsCategories', customerInfo)
        const r4$ = execute('getSaleByBillType', customerInfo)
        const r5$ = execute('getSaleByBillCategories', customerInfo)
        const r6$ = execute('getRunningOrder', customerInfo)
        const r7$ = execute('getDiscountBill', customerInfo)
        r$()
            .then(r1$)
            .then(r2$)
            .then(r3$)
            .then(r4$)
            .then(r5$)
            .then(r6$)
            .then(r7$)

        return Promise.all([r$, r1$, r2$, r3$, r4$, r5$, r6$, r7$])
            .then(y => {
                const dashboard = prepareDashboardMeta(y)
                console.log('dashboard inside promise', dashboard)
                return Promise.resolve(dashboard)
            })
            .catch(err => console.log('err', err))
    })
}

function prepareDashboardMeta(y) {
    var r = y[0]
    var r1 = y[1]
    var r2 = y[2]
    var r3 = y[3]
    var r4 = y[4]
    var r5 = y[5]
    var r6 = y[6]
    var r7 = y[7]
    let dashboardMeta = {
        dayInfo: {
            totalSale: parseInt(r.totalSale),
            admission: parseInt(r.admission),
            cover: parseInt(r.cover),
            apc: r.apc,
            apb: r.apb
        },
        paymentMode: r1,
        topItems: r2,
        topCategories: r3,
        sellByBillType: r4,
        sellByCategory: r5,
        runningOrder: r6.bill,
        currentOrders: r6.currentOrders,
        billedOrders: r6.billedOrders,
        discountBill: r7
    }
    if (helperMeta.startDate > 0) {
        dashboadMeta.helperMeta = { startDate: helperMeta.startDate };
    }
    return dashboardMeta
}

function getAllSale(customerInfo) {
    return new Promise((res, rej) => {
        var dashboadMeta = {}
        $('.loaderContainer').show();

        execute('getTotalSale', customerInfo).then(function(r) {
            execute('getSaleByPaymentMode', customerInfo).then(function(r1) {
                customerInfo["type"] = "all"
                execute('getTWItemsSale', customerInfo).then(function(r2) {
                    // dashboadMeta.topItems = r2
                    execute('getTopItemsCategories', customerInfo).then(function(r3) {
                        // dashboadMeta.topCategories = r3
                        execute('getSaleByBillType', customerInfo).then(function(r4) {
                            // dashboadMeta.sellByBillType = r4
                            execute('getSaleByBillCategories', customerInfo).then(function(r5) {
                                // dashboadMeta.sellByCategory = r5
                                execute('getRunningOrder', customerInfo).then(function(r6) {
                                    execute('getDiscountBill', customerInfo).then(function(r7) {
                                        dashboadMeta.dayInfo = {
                                            totalSale: parseInt(r.totalSale),
                                            admission: parseInt(r.admission),
                                            cover: parseInt(r.cover),
                                            apc: r.apc,
                                            apb: r.apb
                                        }
                                        if (helperMeta.startDate > 0)
                                            dashboadMeta.helperMeta = { startDate: helperMeta.startDate };
                                        dashboadMeta.paymentMode = r1
                                        dashboadMeta.topItems = r2
                                        dashboadMeta.topCategories = r3
                                        dashboadMeta.sellByBillType = r4
                                        dashboadMeta.sellByCategory = r5
                                        dashboadMeta.runningOrder = r6.bill
                                        dashboadMeta.currentOrders = r6.currentOrders
                                        dashboadMeta.billedOrders = r6.billedOrders
                                        dashboadMeta.discountBill = r7
                                        res(dashboadMeta)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

var dashboardScreen = new function() {
    this.show = function(meta) {
        getAllSale(meta).then(function(r) {
            modifyData(r).then(function(data) {
                data.customerInfo = meta
                $('.loaderContainer').hide();
                render('.mainContainer', 'dashboardBody', {}, function() {
                    render('.contentContainer .infoContainer', 'screen', data, function() {
                        if (helperMeta.startDate != 0) {
                            $('.inputDate.startDate').val(moment(helperMeta.startDate, "YYYYMMDD").format("YYYY-MM-DD"))
                        }
                        if (helperMeta.endDate != 0) {
                            $('.inputDate.endDate').val(moment(helperMeta.endDate, "YYYYMMDD").format("YYYY-MM-DD"))
                        }
                        // $('.customerName').text(meta.customerName)
                        $('.userNameValue').text(helperMeta.customerName)
                        solidGaugePlot(data.screenConfig[0])
                        dashboardScreen.allBinds(data)
                    })
                })
            })
        })
    }

    this.allBinds = function(data) {
        $('.icons.chart').bind('click', function() {
            var dataIndex = $(this).data('index')
            if (dataIndex == 1) {
                var dataItem = $(this).tmplItem().data.screenConfig[dataIndex].categoryMeta
            } else {
                var dataItem = $(this).tmplItem().data.screenConfig[dataIndex].gridMeta
            }
            if (dataItem.length > 0) {
                $(this).parent().siblings().find('.infoCard').hide()
                $(this).parent().siblings().find('.infoChart').show()
                render('.infoChart', 'columnChart', {}, function() {
                    var chartMeta = {
                        value: [],
                        categories: []
                    }
                    for (i in dataItem) {
                        chartMeta.categories.push(dataItem[i]._id)
                        chartMeta.value.push(dataItem[i].totalSale)
                    }
                    chartMeta.className = "piechartContainer"
                    columnChart(chartMeta)
                })
            }
        })
        $('.icons.dataTable').bind('click', function() {
            $(this).parent().siblings().find('.infoCard').show()
            $(this).parent().siblings().find('.infoChart').hide()
        })
        $('.itemConsumptionType').bind('click', function() {
            $('.itemConsumptionHeader .itemConsumptionType').removeClass('selected');
            $(this).addClass('selected');
            data.customerInfo["type"] = $(this).data('id')
            execute('getTWItemsSale', data.customerInfo).then(function(r) {
                render('.tableContent.itemConsumption', 'itemConsumption', r)
            })
        })
        $('.c1.detailsHeaderCol').bind('click', function() {
            var dataId = $(this).data('id')
            $('.c1.detailsHeaderCol').removeClass('selected');
            $(this).addClass('selected')
            if (dataId == "desicountBill") {
                execute('getDiscountBill', data.customerInfo).then(function(r) {
                    var billData = { name: dataId, items: r }
                    render('.orderDetailsContainer .orderDetailsTable.discountBill', 'discountBills', billData)
                })
            } else {
                data.customerInfo["billType"] = dataId
                execute('getComplementryAndOTHBill', data.customerInfo).then(function(r) {
                    var localData = { name: dataId, items: r }
                    render('.orderDetailsContainer .orderDetailsTable.discountBill', 'complentryOTHBills', localData)
                })
            }
        })
        $('.c2.detailsHeaderCol').bind('click', function() {
            var dataId = $(this).data('id')
            $('.c2.detailsHeaderCol').removeClass('selected');
            $(this).addClass('selected')
            if (dataId == "modificationBill") {
                execute('getModificationBill', data.customerInfo).then(function(r) {
                    var billData = { name: dataId, items: r }
                    console.log(billData)
                    render('.orderDetailsContainer .orderDetailsTable.modification', 'modifiedBills', billData)
                })
            } else {
                execute('getCancelBill', data.customerInfo).then(function(r) {
                    var localData = { name: dataId, items: r }
                    render('.orderDetailsContainer .orderDetailsTable.modification', 'cancelBills', localData)
                })
            }
        })


        $('.inputDate').on("change", function() {
            var dataId = $(this).data('id');
            var dateValue = moment($(this).val(), "YYYY-MM-DD").format("YYYYMMDD")
            var currentDate = moment().format("YYYYMMDD")
            if (helperMeta.endDate == 0) {
                helperMeta.endDate = moment().format("YYYYMMDD")
            }
            if (dateValue <= currentDate) {
                if (dataId == "endDate")
                    helperMeta.endDate = dateValue
                if (dataId == "startDate")
                    helperMeta.startDate = dateValue;
                if (helperMeta.startDate <= helperMeta.endDate && helperMeta.startDate != 0)
                    dashboardScreen.show(helperMeta)
            }
        })
        $('.homeIcon').bind('click', function() {
            outletScreen.show(helperMeta)
        })
        $('.syncIcon').bind('click', function() {
            dashboardScreen.show(helperMeta)
        })
    }


    var modifyData = function(r) {
        return new Promise((res, rej) => {
            var localData = JSON.parse(JSON.stringify(dashboardSetting))
            for (i in localData.screenConfig) {
                if (localData.screenConfig[i].id == 1) {
                    localData.screenConfig[i].value = r.dayInfo.totalSale;
                } else if (localData.screenConfig[i].id == 2) {
                    localData.screenConfig[i].categoryMeta = r.paymentMode
                } else if (localData.screenConfig[i].id == 3) {
                    localData.screenConfig[i].gridMeta[0].value = r.dayInfo.totalSale
                    localData.screenConfig[i].gridMeta[1].value = r.dayInfo.admission
                    localData.screenConfig[i].gridMeta[2].value = r.dayInfo.cover
                    localData.screenConfig[i].gridMeta[3].value = r.dayInfo.apb
                    localData.screenConfig[i].gridMeta[4].value = r.dayInfo.apc
                } else if (localData.screenConfig[i].id == 4) {
                    if (r.sellByCategory.length > 0)
                        localData.screenConfig[i].gridMeta = r.sellByCategory;
                } else if (localData.screenConfig[i].id == 7) {
                    if (r.sellByBillType.length > 0)
                        localData.screenConfig[i].gridMeta = r.sellByBillType;
                } else if (localData.screenConfig[i].id == 8) {
                    localData.screenConfig[i].orders = r.runningOrder;
                    localData.screenConfig[i].billedOrdersDetails = r.billedOrders
                    localData.screenConfig[i].currentOrdersDetails = r.currentOrders
                } else if (localData.screenConfig[i].id == 5) {
                    if (r.topItems.length > 0)
                        localData.screenConfig[i].items = r.topItems;
                } else if (localData.screenConfig[i].id == 6) {
                    localData.screenConfig[i].items = r.topCategories;
                } else if (localData.screenConfig[i].id == 9) {
                    localData.screenConfig[i].items = r.discountBill
                }
            }
            console.log(localData)
            res(localData)
        })
    }
}

var loginScreen = new function() {
    this.show = function() {
        render('.mainContainer', 'login', {})
        setCookies()
        loginScreen.bind()
    }
    this.bind = function() {
        $('.loginBtn').bind('click', function() {
            var loginInfo = {
                userID: $('.inputRow.userID').val(),
                password: $('.inputRow.password').val()
            }
            console.log(loginInfo)
            execute('login', loginInfo).then(function(r) {
                if (r.status == true) {
                    $('.loaderContainer').show();
                    createCookie(loginInfo)
                    helperMeta["customerName"] = r.customerName;
                    helperMeta["userName"] = r.userName;
                    helperMeta["outlets"] = r.outlets;
                    if (r.outlets.length > 1) {
                        outletScreen.show(r)
                        $('.loaderContainer').hide();
                    } else {
                        helperMeta.outletID = r.outlets[0].outletID
                        dashboardScreen.show(helperMeta)
                    }
                } else {
                    $(".loginBtn").effect("shake", { times: 2 }, 500);
                    $('.loginBtn').css({ "background": "#EF5350", "color": "#ffffff" })
                }
            })
        })
    }
}

function createCookie(data) {
    return new Promise((res, rej) => {
        Cookies.set('userID', data.userID, { expires: 7 });
        Cookies.set('password', data.password, { expires: 7 });
        res()
    })
}

function setCookies() {
    if (Cookies) {
        $('.inputRow.userID').val(Cookies.get('userID'))
        $('.inputRow.password').val(Cookies.get('password'))
    }
}


var outletScreen = new function() {
    this.show = function(data) {
        var localData = JSON.parse(JSON.stringify(data))
        render('.mainContainer', 'outlet', localData)
        outletScreen.bind()
    }
    this.bind = function() {
        $('.outlet').bind('click', function() {
            var dataIndex = $(this).data('index')
            helperMeta["outletID"] = $(this).tmplItem().data.outlets[dataIndex].outletID
            dashboardScreen.show(helperMeta)
        })
        $('.logout').bind('click', function() {
            loginScreen.show()
        })
    }
}


function scrollLogin() {
    document.getElementById("abc").style.top = "120px";
}