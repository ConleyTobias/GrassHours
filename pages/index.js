console.log("Starting")

const response = await fetch("https://api.github.com/users").json()


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