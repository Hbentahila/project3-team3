////Crate Pie Chart for room type
//create variable will use for pie chart
let data, roomType, count;

//Fetch flask dataset - room_type
async function fetchData() {
    const response = await fetch("/data/room_type");
    return await response.json();
}

// retrievedata
async function retrieve() {
    data = await fetchData();
    roomType = data.map((entry) => entry[0]);
    count = data.map((entry) => entry[1]);
    //console.log(data);
    //console.log("roomType:", roomType);
    //console.log("count: ", count);
   
    plot();
}

//plot pie chart
function plot() {
    let trace = {
        values: count,
        labels: roomType,
        type: "pie"
    };
    
    let layout = { height: 600, width: 700 };
    Plotly.newPlot("pie", [trace], layout);
}

retrieve();

