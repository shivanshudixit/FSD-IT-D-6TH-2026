import { MongoClient } from "mongodb";
const MONGO_URI = "mongodb+srv://user:admin@userlogin.gvzptpp.mongodb.net/?appName=userLogin";
const DB_NAME = "users";

const url = "mongodb+srv://shivanshudixitco_db_user:rRB3kBUrnIEgsnL4@cluster0.4y42rzv.mongodb.net/college?appName=Cluster0";
const client = new MongoClient(MONGO_URI);
const dbConnect = async () => {
    try {
        await client.connect();
        console.log("MongoDB is connected successfully ✅ ");
        return  client.db(DB_NAME);
    } catch (error) {
        console.log("DB connection Error", error.message);
    }
}
export default dbConnect;
// dbConnect();