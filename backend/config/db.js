require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
	try{
		await mongoose.connect(process.env.Mongo_URL, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});
		console.log("MongoDB connection SUCCESS");

	} catch(error){
		//console.log(error);
		console.error("MongoDB connection FAIL");
		process.exit(1);
	}
};
module.exports = connectDB;