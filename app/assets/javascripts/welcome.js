// $.getJSON('/json', function(data) {
//     console.debug(data);
// });
// var diameter = 960,
//     format = d3.format(",d"),
//     color = d3.scale.category20c();

// var bubble = d3.layout.pack()
//     .sort(null)
//     .size([diameter, diameter])
//     .padding(1.5);

// var svg = d3.select("body").append("svg")
//     .attr("width", diameter)
//     .attr("height", diameter)
//     .attr("class", "bubble");

// // potential way to input new data
// var refreshGraph = function() {
//     d3.json("/json", function(error, root) {
//         if (error) throw error;

//         var node = svg.selectAll(".node")
//             .data(bubble.nodes(classes(root))
//                 .filter(function(d) {
//                     return !d.children;
//                 }))
//             .enter().append("g")
//             .attr("class", "node")
//             .attr("transform", function(d) {
//                 return "translate(" + d.x + "," + d.y + ")";
//             });

//         node.append("title")
//             .text(function(d) {
//                 return d.className + ": " + format(d.value);
//             });

//         node.append("circle")
//             .attr("r", function(d) {
//                 return d.r;
//             })
//             .style("fill", function(d) {
//                 return color(d.packageName);
//             });

//         node.append("text")
//             .attr("dy", ".3em")
//             .style("text-anchor", "middle")
//             .text(function(d) {
//                 return d.className.substring(0, d.r / 3);
//             });
//     });
// };
// // this is the rendering portion of the d3, it recursively takes JSON children and colors
// // and appends them in relation to the current node that they exist in
// d3.json("/json", function(error, root) {
//     if (error) throw error;

//     var node = svg.selectAll(".node")
//         .data(bubble.nodes(classes(root))
//             .filter(function(d) {
//                 return !d.children;
//             }))
//         .enter().append("g")
//         .attr("class", "node")
//         .attr("transform", function(d) {
//             return "translate(" + d.x + "," + d.y + ")";
//         })
//         .on("mouseover", function(d, i) {
//           show_details(d, i, this);
//         })
//         .on("mouseout", function(d, i) {
//           hide_details(d, i, this);
//         });

//     node.append("title")
//         .text(function(d) {
//             return d.className + ": " + format(d.value);
//         });

//     node.append("circle")
//         .attr("r", function(d) {
//             return d.r;
//         })
//         .style("fill", function(d) {
//             return color(d.packageName);
//         });

//     node.append("text")
//         .attr("dy", ".3em")
//         .style("text-anchor", "middle")
//         .text(function(d) {
//             return d.className.substring(0, d.r / 3);
//         });
// });

// // Returns a flattened hierarchy containing all leaf nodes under the root.
// function classes(root) {
//     var classes = [];

//     function recurse(name, node) {
//         if (node.children) node.children.forEach(function(child) {
//             recurse(node.name, child);
//         });
//         else classes.push({
//             packageName: name,
//             className: node.name,
//             value: node.size
//         });
//     }

//     recurse(null, root);
//     return {
//         children: classes
//     };
// }
// function show_details(data, i, element) {
//     d3.select(element).attr("stroke", "black");
//     var content = "<span class=\"name\">Title:</span><span class=\"value\"> " + data.name + "</span><br/>";
//     content +="<span class=\"name\">Amount:</span><span class=\"value\"> " + data.size + "</span><br/>";
//     // content +="<span class=\"name\">Year:</span><span class=\"value\"> " + data.year + "</span>";
//     // tooltip.showTooltip(content, d3.event);
//   }
 
// function hide_details(data, i, element) {
//     d3.select(element).attr("stroke", "white");
//     // tooltip.hideTooltip();
//   }

// d3.select(self.frameElement).style("height", diameter + "px");

// // need to use the following code
// // .transition().duration(2000)


