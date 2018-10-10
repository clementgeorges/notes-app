const now = new Date()

const timestamp = now.getTime()

const year = new Date(timestamp)

//console.log(year.getFullYear());

// Set variables
const lastYear = new Date('20 February 2017')
const thisYear = new Date()

// get timestamp
const lastYearTimestamp = lastYear.getTime()
const thisYearTimestamp = thisYear.getTime()

// Print the newest time in a string 
if (lastYearTimestamp > thisYearTimestamp) {
    console.log(lastYear.toString());
} else {
    console.log(thisYear.toString());
    
}