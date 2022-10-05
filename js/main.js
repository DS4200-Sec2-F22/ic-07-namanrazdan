const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};


// const FRAME1 = 
// 	d3.select("#vis1")
// 		.append("svg")
// 		.attr("height", FRAME_HEIGHT)
// 		.attr("width", FRAME_WIDTH)
// 		.attr("class", "frame")

// FRAME1.append("circle")
// 		.attr("cx", 50 + MARGINS.left)
// 		.attr("cy", 50 + MARGINS.top)
// 		.attr("r", 30)
// 		.attr("class", "firstCircle")

// FRAME1.append("circle")
// 		.attr("cx", 50)
// 		.attr("cy", 50)
// 		.attr("r", 30)
// 		.attr("class", "firstCircle")

// const FRAME2 = d3.select("#vis2")
// 				.append("svg")
// 					.attr("height", FRAME_HEIGHT)
// 					.attr("width", FRAME_WIDTH)
// 					.attr("class", "frame")

// FRAME2.selectAll("points")
// 			.data(data1)
// 			.enter()
// 			.append("circle")
// 				.attr("cx", (d) => {return d;})
// 				.attr("cy", 0)
// 				.attr("r", 20)
// 				.attr("class", "point");


// FRAME2.selectAll("points")
// 		.data(data1)
// 		.enter()
// 		.append("circle")
// 			.attr("cx", (d) => {
// 				return (d + MARGINS.left)
// 			})
// 			.attr("cy", MARGINS.top)
// 			.attr("r", 20)
// 			.attr("class", "point");


// const data2 = [10000, 20000, 40000]; 

const data = [55000, 48000, 27000, 66000, 90000]


const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;


//define scaling function

const MAX_X = d3.max(data, (d) => {return d;});
console.log("Max x: " + MAX_X);

const X_SCALE = d3.scaleLinear()
 						.domain([0, MAX_X])
 						.range([0, VIS_WIDTH]);


console.log("Input 40000, X_SCALE output: " + X_SCALE(40000))


const FRAME = d3.select("#vis")
 				.append("svg")
 					.attr("height", FRAME_HEIGHT)
					.attr("width", FRAME_WIDTH)
 					.attr("class", "frame")

FRAME.selectAll("points")
 				.data(data)
 				.enter()
 				.append("circle")
 					.attr("cx", (d) => {
 						return (X_SCALE(d) + MARGINS.left);
 					})
 					.attr("cy", MARGINS.top)
 					.attr("r", 20)
 					.attr("class", "point");


FRAME.append("g")
 			.attr("transform", "translate(" + MARGINS.left + 
 				"," + (VIS_HEIGHT + MARGINS.top) + ")")	
 			.call(d3.axisBottom(X_SCALE).ticks(10))
 				.attr("font-size", "8px");
