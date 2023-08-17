//Open database with API
const listings = " ";


////Crate Pie Chart for room type in total
//Create a function for private room, and length of that data
function private(room) {
    return room.roomType === privateRoom;
}

let privateCount = listings.filter(private);

let privateRoomCount = privateCount.length
console.log("There are ${privateRoomCount} private rooms.")

//Create a function for entire room/apt, and length of that data
function entire(room) {
    return room.roomType === EntireRoom;
}

let entireCount = listings.filter(entire);

let entireRoomCount = entireCount.length
console.log("There are ${entireRoomCount} entire rooms/appartments.")

//Create a function for shared room, and length of that data
function shared(room) {
    return room.roomType === sharedRoom;
}

let sharedCount = listings.filter(shared);

let sharedRoomCount = sharedCount.length
console.log("There are ${sharedRoomCount} shared rooms.")

//Create a function for hotel, and length of that data
function hotels(room) {
    return room.roomType === hotel;
}

let hotelCount = listings.filter(hotels);

let hotelRoomCount = hotelRoomCount.length
console.log("There are ${hotelRoomCount} hotels.")


//Pie Chart for different room types
let trace1 = [{
    values:[privateRoomCount, entireRoomCount, sharedRoomCount],
    labels: ['Private Room', 'Entire Room/Apt', 'Shared Room', 'Hotel'],
    type:"pie"
}];
let layout = {
    height: 600,
    width: 700
};
Plotly.newPlot("pie", trace1, layout);

////Creating dropdown bar chart for availiablity in different neighborhood group (avaliblity<20 and avalibility>300)



////Using new library - Highchart, draw a line for avarge cost for room types and neighborhood group
////https://www.highcharts.com/demo/highcharts/line-basic

