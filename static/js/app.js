// from data.js
var tableData = data;

// YOUR CODE HERE!



var filterResults = [];

// Function to handle input change



function filterData() {
    
    const tableBody = d3.select('tbody')
    var dateTime = d3.select('#datetime').node().value;
    console.log(dateTime)
    
    
    tableData.forEach((result) => {
        // Iterate through each key and value
        
        
        // Use the key to determine which array to push the value to
        if (dateTime === result.datetime) {
            console.log(result)
                var row = tableBody.append("tr")
                row.append('td').text(result.datetime)
                row.append('td').text(result.city)
                row.append('td').text(result.state)
                row.append('td').text(result.country)
                row.append('td').text(result.shape)
                row.append('td').text(result.durationMinutes)
                row.append('td').text(result.comments)
            }
        

     });
    
    }
