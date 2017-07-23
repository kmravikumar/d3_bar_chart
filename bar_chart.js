

var dataArray = [5,10,18,40];
plot_bar_graph(dataArray, "#bar_chart");


function plot_bar_graph (dataArray, htmlObjectId) {
    var width = 500;
    var height = 400;
            
    var heightScale = d3.scaleLinear()
                            .domain([0,50])
                            .range([0,height]);

    var axis = d3.axisRight()
                .ticks(10)
                .scale(heightScale)

    var canvas = d3.select(htmlObjectId)
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height);

    var bars = canvas.selectAll("rect")
                    .data(dataArray)
                    .enter()
                        .append("rect")
                        .attr("height", function(d) {return heightScale(d); })
                        .attr("width", 50)
                        .attr("fill", "red")
                        .attr("x", function(d,i) {return i*100;});

    canvas.append("g")
              .call(axis);

}                            