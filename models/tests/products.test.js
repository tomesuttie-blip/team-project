const request = require("supertest");
const app = require("../../server");

//prevents mongo connection keeping jest open
const mongoose = require("mongoose");
afterAll(async () => {
    await mongoose.connection.close();
})

//make a temp ID for tests
let createdID;



describe("GET /products", () => {

    //starting with getAll
    it("should return 200", async () => {
        const res = await request(app).get("/products");
        expect(res.statusCode).toBe(200);

        let result = "";

        if (res.statusCode === 200) {
            result = "sutt0091@algonquinlive.com - getAll to show all products - 200 - PASSED";
        }
        else {
            result = "sutt0091@algonquinlive.com - get all to show all product - " + res.statusCode + " - FAILED";
        }
        console.log(result);
    });


})