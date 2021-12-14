// d3.select();
// d3.sleectAll();
//
// d3.select("h1").style('color','red');

var dataset = [80,100,56,120,180,30,40,120,160];
var svg = d3.select("svg");
var margin = {top: 20, right: 20, bottom: 30, left: 40};
var width = +svg.attr("width") - margin.left - margin.right;
var height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0,width]).padding(.1),
    y = d3.scaleLinear().rangeRound([height,0]),
    g = svg.append("g")
      .attr("transform","translate("+margin.left+","+margin.top+")");

d3.csv("https://raw.githubusercontent.com/alex-rind/viztutorial/master/diabetes-small.csv")
  .then((data) => {
    return data.map((d) => {
      d.BMI = +d.BMI;

      return d;
    });
  })
  .then((data) => {
    x.domain(data.map(function(d) {return d.Name; }));
    y.domain([0,d3.max(data,function(d){return d.BMI;})]);
    g.append("g")
      .attr("class","axis axis--x")
      .attr("transofrm","translate(0,"+height+")")
      .call(d3.axisBottom(x));
    g.append("g")
      .attr("class","axis axis--y")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("transform","rotate(-90)")
      .attr("y",6)
      .attr("dy","0.71em")
      .attr("text-anchor","end")
      .text("frequency");
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class","bar")
    .attr("x",function(d){return x(d.Name);})
    .attr("y",function(d){return y(d.BMI);})
    .attr("width",x.bandwidth())
    .attr("height",function(d){return height - y(d.BMI);});
  })
  .catch((error) =>{
    throw error;
  });









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// var dataset = [80,100,56,120,180,30,40,120,160];
// var categoryNames = ["Total # Killed","# Killed by Race","% Race Breakdown","# Killed by Age","# No Mental Illness","# Not Fleeing","# not attacking","# unarmed"];
//
// var svgWidth = 1500, svgHeight = 300, barPadding = 5;
// var barWidth = (svgWidth / dataset.length);
//
// var svg = d3.select('svg')
//   .attr("width",svgWidth)
//   .attr("height",svgHeight);
//
// var barChart = svg.selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("y",function(d){
//     return svgHeight - d
//   })
//   .attr("height",function(d){
//     return d;
//   })
//   .attr("width", barWidth - barPadding)
//   .attr("transform", function(d,i){
//     var translate = [barWidth * i, -30];
//     return "translate("+translate+")";
//   });
//
// var text1 = svg.selectAll(".text")
//   .data(dataset)
//   .enter()
//   .append("text");
//
//   text1
//     .attr("y",function(d,i){return svgHeight - d - 2}) // subtract to to adjust the height of the text
//     .attr("x",function(d,i){return barWidth * i})
//     .text(function(d){return d})
//     .attr("fill","blue");
//
// var text2 = svg.selectAll(".text")
//   .data(categoryNames)
//   .enter()
//   .append("text");
//
//   text2
//     .attr("y",290) // subtract to to adjust the height of the text
//     .attr("x",function(d,i){return barWidth * i})
//     .text(function(d){return d})
//     .attr("fill","blue");
