1 npm init
2 npm i express
3 touch server.js



    // res.send('Server is ready');
    // res.cookie("name", "ankit");
    // res.send("done");

    bcrypt.genSalt(10, function(err, salt){
    // bcrypt.hash("ankit", salt, function(err,hash){
    //     console.log("password: ",hash);
        
    // })
    // bcrypt.hash("ankit", salt, function(err,salt){
    //     console.log("salt: ",salt);
        
    // })

creeate account
mongoose
schema
model
usercreate -> password -> hash
jwt token -> cookie

login -> token decrypt -> email