// from data.js
var tableData = data;


//var date = '1/10/2010'

var City = ""
var State = ""
var Country = ""
var Duration = ""


function datefilter(table) {
    var datechange = d3.select("#datetime")
    var date = datechange.property("value")
    console.log(datechange.property("value"))
    return table.datetime == date;
   
};



var tbody = d3.select("#ufo-table>tbody");



function buildtable() {
    tbody.html('');
    table_date_filtered = tableData.filter(datefilter);
    console.log(table_date_filtered)
    table_date_filtered.forEach((item) => {
       
    
    
    var row = tbody.append("tr");
    row.append("td").text(item.datetime);
    row.append("td").text(item.city);
    row.append("td").text(item.state);
    row.append("td").text(item.country);
    row.append("td").text(item.shape);
    row.append("td").text(item.durationMinutes);
    row.append("td").text(item.comments);
    })
};

var datechange = d3.select("#datetime")
button = d3.select('#filter-btn')
datechange.on("change", buildtable);
button.on("click", buildtable)
//console.log(table_date_filtered)
//buildtable(table_date_filtered)



