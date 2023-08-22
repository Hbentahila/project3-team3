let data2, neighbourG, sAvalibility, lAvalibility;

async function fetchData() {
    const response = await fetch("/data/count_hood_availability_20_300");
    const data2 = await response.json();
    return data2;
}
async function retrive() {
    data2 = await fetchData();
    neighbourG = data2.map((entry) => entry[0]);
    sAvalibility = data2.map((entry) => entry[1]);
    lAvalibility = data2.map((entry) => entry[2]);
    // console.log(data2);
    // console.log("neighbourhoodGroup: ", neighbourG);
    // console.log("shortAvalilability: ", sAvalibility);
    // console.log("longAvalilability: ", lAvalibility);
    
    plotData();
}

// Draw a stacked bar chart
////https://plotly.com/javascript/bar-charts/
function plotData() {
    let trace1 = {
        x: neighbourG,
        y: sAvalibility,
        name:"Availability shorter than 20 days",
        type:"bar"
    };
    let trace2 = {
        x: neighbourG,
        y: lAvalibility,
        name:"Availability longer than 300 days",
        type:"bar"

    };
    let group = [trace1, trace2];

    let layout = {barmode: 'stack'};

Plotly.newPlot("bar",group, layout);
}

retrive();