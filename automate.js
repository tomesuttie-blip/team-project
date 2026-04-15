const fetch = require("node-fetch")

//list of get all end points being tested, one per group mate
//mine first
const urls = [
    {
        name: "sutt0091@algonquinlive.com",
        url: "https://team-project-suttie.onrender.com/products"
    },
    //first teammate when I get it
    {
        name: "yose0008@algonquinlive.com",
        url: "https://team-project-xuce.onrender.com/products"
    },
    //third teammate goes here
    {
        name: "moor0760@algonquinlive.com",
        url: "https://crochet-store-z5rg.onrender.com/products"
    }
];

//async function so they run sequentially
async function runTests() {

    //loop to go through the end point for each
    for (const test of urls) {
        try {
            //debug line
            console.log("Testing:", test.url);

            //send get request
            const res = await fetch(test.url);

            //check if it works aka 200
            if (res.status === 200) {
                console.log(`${test.name} - getAll to show all product - 200 - Passed`);
            }
            else {
                consle.log(`${test.name} - getAll to show all product - ${res.status} - Failed`);
            }
        }
        catch (err) {
            //in case of error
            console.log(`${test.name} - getAll to show all product - ERROR`)
            console.log(err.message);
        }
    }

}

//actually run the tests
runTests();