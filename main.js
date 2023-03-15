const url = "https://raw.githubusercontent.com/Raviesh/Graph/parent/Setninel2_Profile.csv";

//getData function                     // ? D:\VSCODE\dataVisualisation\data\Setninal2_Profile.csv

async function getData() {

// Get CSV

// Fetch Data
const response = await fetch(url);

//process Data
const rawData = await response.text();

//publish data
document.getElementById("csv").innerHTML = rawData;

//developer info
console.log(rawData);
console.log("rawData type :" + typeof rawData)
}

getData();


// var xArray = [25,60,70,80,90,100,110,120,130,140,150];
// var yArray = [7,8,8,9,9,9,10,11,14,14,15];

// // Define Data
// var data = [{
//   x: xArray,
//   y: yArray,
//   mode:"lines"
// }];

// // Define Layout
// var layout = {
//   xaxis: {range: [40, 160], title: "YEARS"},
//   yaxis: {range: [5, 16], title: "NDVI"},  
//   title: "NDVI / YEARS"
// };

// // Display using Plotly
// Plotly.newPlot("myPlot", data, layout);
  