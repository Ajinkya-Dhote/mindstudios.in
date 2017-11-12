import { Component, OnInit , AfterViewInit, Input,OnChanges} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit, AfterViewInit, OnChanges{

  @Input() width;
  @Input() height;

  constructor() { } 

  ngOnInit() {
  }

  ngAfterViewInit() {
   
  }

  ngOnChanges() {
    console.log("width",this.width );
    console.log("height",this.height);
    this.render();
  }


  render() {
    let dim = d3.select("body");
    // set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
width = this.width- margin.left - margin.right,
height = (this.height - margin.top - margin.bottom)/2;

console.log("width",width );
console.log("height",height);



// parse the date / time
var parseTime = d3.timeParse("%d-%b-%y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
console.log(d3.select("body"));

var svg = d3.select("body").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("./data.csv", function(error, data) {
if (error) throw error;

// format the data
data.forEach(function(d) {
  d.date = parseTime(d.date);
  d.close = +d.close;
});

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.date; }));
y.domain([0, d3.max(data, function(d) { return d.close; })]);

// Add the valueline path.
svg.append("path")
  .data([data])
  .attr("class", "line")
  .attr("d", valueline);

// Add the X Axis
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add the Y Axis
svg.append("g")
  .call(d3.axisLeft(y));

});
  }

}
