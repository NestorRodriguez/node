module.exports = (app) => {
    app.get("/",(req,res)=>{
        res.send("Yo estoy en la ruta '/'")
    });
    app.get("/route",(req,res)=>{
        res.send("Yo estoy en la ruta '/route'")
    });
    app.get("*",(req,res)=>{
        res.send("donde diablos estoy?")
    });
}