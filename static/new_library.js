// create variable
let dataset, rt, ng, avg;

//fetch flask for avarage price data
async function fetchData() {
    const response = await fetch("/data/avg_price");
    const data2 = await response.json();
    return data2;
}
async function retrive() {
    dataset = await fetchData();
    rt = dataset.map((entry) => entry[0]);
    ng = dataset.map((entry) => entry[1]);
    avg = dataset.map((entery) => entery[2]);
    // console the data to html, and mannualy copy the contain to the blow new library
    //
    console.log(dataset);
    console.log("room_type ", rt);
    console.log("neighbourhoodGroup: ", ng);
    console.log("averagePrice: ", avg);

}

retrive();

////Get data drom http://127.0.0.1:5000/data/avg_price, manually put in the value
//using new library:https://www.highcharts.com/demo/highcharts/bar-basic
//https://www.highcharts.com/docs/getting-started/your-first-chart
Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Average Cost',
        align: 'center'
    },
    xAxis: {
        categories: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'],
        title: {
            text: 'Neighbourhood Group'
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Dollar Value',
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: '$'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Entire home/apt',
        data: [161, 224, 341, 196, 173]
    }, {
        name: 'Hotel room',
        data: [0, 249, 512, 196, 0]
    }, {
        name: 'Private room',
        data: [99, 117, 242, 110, 456]
    }, {
        name: 'Shared room',
        data: [62, 104, 190, 81, 99]
    }]
    
});