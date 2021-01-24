// from data.js
var tableData = data;

// Identify the table and tbody
var tbody = d3.select("#ufo-table>tbody");

// Create function to generate and populate the table
function buildTable(tableData){

    // Dynamically build table
    tableData.forEach(record => {
        var row = tbody.append('tr');

        Object.values(record).forEach(col => {
            row.append('td').text(col);        
        }); 
    })
}

function filterTable(){
    // Create a copy of tableData specifically for filtering
    var filteredData = tableData;

    // capture value for all search fields */
    var datetime = d3.select('#datetime').property('value');
    var city = d3.select('#city').property('value');
    var state = d3.select('#state').property('value');
    var country = d3.select('#country').property('value');
    var shape = d3.select('#shape').property('value');

    // Build an object of fields to run through 
    var filterFields = {
    "datetime": datetime,
    "city": city,
    "state": state,
    "country": country,
    "shape": shape
       }
       console.log("----All filterFields----")
       console.log(filterFields)
    // Remove empty keys from the list of filters to search
    Object.entries(filterFields).forEach(([key, val]) => {
        
        // Use !val to check for empty strings or nulls
        if(!val) { 
            delete filterFields[key];
        }
        console.log("----Populated filterFields----")
        console.log(filterFields)
    });

    // Loop through each of the filter keys and return records from filteredData that match 
    Object.entries(filterFields).forEach(([key, value]) => {
        // Continue to refine the filteredData array 
        filteredData = filteredData.filter(row => row[key] == value);
        
      });    

    // Clear out the tbody
    
    tbody.html('');

    // Rebuild the filtered table using the buildTable function 
    buildTable(filteredData);    
}

// Identify web elements on the page
btn = d3.select('#filter-btn');
var datetime = d3.select('#datetime');
var city = d3.select('#city');
var state = d3.select('#state');
var country = d3.select('#country');
var shape = d3.select('#shape');


// Attach an event listener to the fields attached to the .filter class 
btn.on('click', filterTable);
datetime.on('change', filterTable);
city.on('change', filterTable);
state.on('change', filterTable);
country.on('change', filterTable);
shape.on('change', filterTable);



// Call the function to initially load the table and pass the tableData to that function
buildTable(tableData);