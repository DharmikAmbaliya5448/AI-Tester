// AI-GENERATED TESTS START
Firstly, we need to install the `jest` package. If you haven't done this yet then run following command in your terminal or cmd prompt for Windows users -  ```npm i --save jest`` (or if using yarn add jest).  Then create a test file named serverTest.js and write our tests there:

--- FILE NAME ---
server/serverTest.js
----------------------- JEST TESTS STARTS HERE ------
const request = require('supertest'); // used for making requests in jest 
describe("Server Test Suite", () => {   // define a test suite by using describe function from 'jest' package. Each spec inside the block is considered as one set of tests to run on single instance and can be skipped or rerun if required, you are given options like --findRelatedTests
    it("Should return server running message", async () => { // define a test by using `it` function from 'jest' package.  It is an asynchronous block that returns promise to get the response after making request on our express application and then asserts if any of its property matches with expected value
        const res = await request(app).get('/api');   // make a GET request at '/', which should return 'Server running' message. After getting result we are storing it in `res` variable so that can be used further for testing 
         expect(JSON.parse (res.text)).toMatchObject({message: "✅ Server Running on port 3000"}); // here, jest is expected to match the response text with JSON object having property message as 'Server running' and if it does then we are successful otherwise not
    });  
     /* add more tests cases for other routes or function in your server */     
}) ----------------------- JEST TESTS END HERE ------;
--- FILE NAME --- //END OF CODE. You can use this file as a starting point to write the jest test code you need based on requirements mentioned above. Make sure that all route, functions and exports used in your server/server.js are covered by tests because they should not be changed without testing beforehand for any change would break our app's functionality

// AI-GENERATED TESTS END