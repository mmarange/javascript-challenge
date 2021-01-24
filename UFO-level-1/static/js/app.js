// from data.js
var tableData = data;


//var date = '1/10/2010' when hard coding

// var City = ""
// var State = ""
// var Country = ""
// var Duration = ""
var tbody = d3.select("#ufo-table>tbody");
//Create boolean function to use with filter function
function datefilter() {
    
    var datechange = d3.select("#datetime")
    var date = datechange.property("value")
    tbody.html(''); // 
    //console.log(datechange.property("value"))
    table_date_filtered = tableData.filter(d => d.datetime == date );
 buildtable(table_date_filtered)
};
//console.log(datefilter(tableData))

//identify tbody



//create a buildtable function with a filter function imbedded in it.
function buildtable(table) {
   
    
   
    console.log(table)

    // appending data into table
    table.forEach((item) => {
       
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
buildtable(tableData);

// listening to date form and button
var datechange = d3.select("#datetime")
button = d3.select('#filter-btn')
datechange.on("change", datefilter);
button.on("click", datefilter);
//console.log(table_date_filtered)
//buildtable(table_date_filtered)



