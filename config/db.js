const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI , {
            useUnifiedTopology : true,
            useNewUrlParser : true,
            useCreateIndex : true,
            useFindAndModify : true
        });

        console.log(`MongoDB database connection successful ✔ 👍`);
    } catch (error) {
        console.log(`MongoDb connection Failed 💥`);
        process.exit(1);
    }
}

module.exports = connectDB;