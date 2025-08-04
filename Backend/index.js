//Initialization
import app from './app.js';
import mongoose from 'mongoose';
const port = 3000;

//Routes
app.get('/',(_req,res) => {
    res.send("This is the Homepage.");
});
//Starting the server in a port 
app.listen(port, () =>{
    console.log(`Server startes at a PORT ${port}`);
});
 

const uri = "mongodb+srv://Aaishma:Aaishma123@cluster0.sbmnhy4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(process.env.MONGO_URL,clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
    console.log("Pinged your deployment. You successfully connected to MongoDB ");
  }
}
run().catch(console.dir);
