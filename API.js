console.log("Starting")



//Example
var Table = [
    {
        "Hours":1,
        "Streak":2,
        "User":3
    },

    {
        "Hours":4,
        "Streak":5,
        "User":6
    }
];

for (let row in Table) {
    console.log(Table[row]["Hours"]);
}