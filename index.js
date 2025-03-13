const express = require ("express");
const app = express();

let requestCount = 0;

function requestIncreaser(req , res, next){
    requestCount = requestCount + 1;
    console.log("Total number of requests = " + requestCount);
    if(req.ended) {
          res.json({
            msg : "req ended early",
          });
    } else {
        next()
    }
}

function realSumHandler(req , res) {
    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(req.name);
    
    res.json({
        answer : a + b
    });
}

// route handler ---> better routing , middlerwares
app.get("/sum" , requestIncreaser , realSumHandler);

// app.get("/multiply" , function(req , res){
//     requestIncreaser(); 
//     // main logic
//     const a = req.query.a;
//     const b = req.query.b;
    
//     res.json({
//         answer : a * b
//     })
// })


// app.get("/divide" , function(req , res){
//     const a = req.query.a;
//     const b = req.query.b;
    
//     res.json({
//         answer : a / b
//     })
// })

// app.get("/substract" , function(req , res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
    
//     res.json({
//         answer : a - b
//     })
// })

app.listen(3000);