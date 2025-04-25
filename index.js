var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://127.0.0.1/Hospital')
var db=mongoose.connection
db.on('error',()=> console.log("Error in Connecting to Database"))
db.once('open',()=> console.log("Connected to Database"))

app.post("/sign_up",(req,res) => {
    var doctors= req.body.doctors
    var name= req.body.name
    var age=req.body.age
    var add=req.body.add
    var phone=req.body.phone
    var email=req.body.email
    var date=req.body.date
    var time=req.body.time  

    var data={
        "doctors":doctors,
        "name":name,
        "age":age,
        "add":add,
        "phone":phone,
        "email":email,
        "date":date,
        "time":time,
    }
    db.collection('main').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Succesfully")
    })
    return res.redirect('signup_successful.html')
})

app.post("/dentistry", (req, res) => {
    var doctors = req.body.doctors;
    var name = req.body.name;
    var age = req.body.age;
    var add = req.body.add;
    var phone = req.body.phone;
    var email = req.body.email;
    var date = req.body.date;
    var time = req.body.time;

    var data = {
        "doctors": doctors,
        "name": name,
        "age": age,
        "add": add,
        "phone": phone,
        "email": email,
        "date": date,
        "time": time,
    };

    db.collection('Dentistry').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).send("Error inserting data");
        }
        console.log("Record Inserted Successfully");
        return res.redirect('signup_successful.html');
    });
});

app.post("/Cardiology", (req, res) => {
    var doctors = req.body.doctors;
    var name = req.body.name;
    var age = req.body.age;
    var add = req.body.add;
    var phone = req.body.phone;
    var email = req.body.email;
    var date = req.body.date;
    var time = req.body.time;

    var data = {
        "doctors": doctors,
        "name": name,
        "age": age,
        "add": add,
        "phone": phone,
        "email": email,
        "date": date,
        "time": time,
    };

    db.collection('Cardiology').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).send("Error inserting data");
        }
        console.log("Record Inserted Successfully");
        return res.redirect('signup_successful.html');
    });
});

app.post("/entspc", (req, res) => {
    var doctors = req.body.doctors;
    var name = req.body.name;
    var age = req.body.age;
    var add = req.body.add;
    var phone = req.body.phone;
    var email = req.body.email;
    var date = req.body.date;
    var time = req.body.time;

    var data = {
        "doctors": doctors,
        "name": name,
        "age": age,
        "add": add,
        "phone": phone,
        "email": email,
        "date": date,
        "time": time,
    };

    db.collection('ENT Specialists').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).send("Error inserting data");
        }
        console.log("Record Inserted Successfully");
        return res.redirect('signup_successful.html');
    });
});

app.post("/oste", (req, res) => {
    var doctors = req.body.doctors;
    var name = req.body.name;
    var age = req.body.age;
    var add = req.body.add;
    var phone = req.body.phone;
    var email = req.body.email;
    var date = req.body.date;
    var time = req.body.time;

    var data = {
        "doctors": doctors,
        "name": name,
        "age": age,
        "add": add,
        "phone": phone,
        "email": email,
        "date": date,
        "time": time,
    };

    db.collection('Osteoporosis').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).send("Error inserting data");
        }
        console.log("Record Inserted Successfully");
        return res.redirect('signup_successful.html');
    });
});
app.post("/lung", (req, res) => {
    var doctors = req.body.doctors;
    var name = req.body.name;
    var age = req.body.age;
    var add = req.body.add;
    var phone = req.body.phone;
    var email = req.body.email;
    var date = req.body.date;
    var time = req.body.time;

    var data = {
        "doctors": doctors,
        "name": name,
        "age": age,
        "add": add,
        "phone": phone,
        "email": email,
        "date": date,
        "time": time,
    };

    db.collection('Lung Cancer').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).send("Error inserting data");
        }
        console.log("Record Inserted Successfully");
        return res.redirect('signup_successful.html');
    });
});

app.post("/blood", (req, res) => {
    var doctors = req.body.doctors;
    var name = req.body.name;
    var age = req.body.age;
    var add = req.body.add;
    var phone = req.body.phone;
    var email = req.body.email;
    var date = req.body.date;
    var time = req.body.time;

    var data = {
        "doctors": doctors,
        "name": name,
        "age": age,
        "add": add,
        "phone": phone,
        "email": email,
        "date": date,
        "time": time,
    };

    db.collection('Blood Screening').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).send("Error inserting data");
        }
        console.log("Record Inserted Successfully");
        return res.redirect('signup_successful.html');
    });
});


const UserSchema = new mongoose.Schema({
    doctors: String,
    name: String,
    age: String,
    add: String,
    phone: String,
    email: String,
    date: String,
    time: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel


app.get('/getUsers', (req, res)=> {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.get("/",(req,res) => {
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(4000);

console.log("Listening on port 4000")

// ../../../../Final year project/medi-Point/index.html