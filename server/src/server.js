import "dotenv/config";

import app from "./index.js";
// import connect from "./config";

const port = process.env.PORT || 4000;

app.listen(port,async () => {
    try {

        // await connect(); //To be used when trying to connect database
        console.log("Server is listening on",port)
        
    } catch (error) {
        console.log(error);
    }
})