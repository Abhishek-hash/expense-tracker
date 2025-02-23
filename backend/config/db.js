/* eslint-disable no-undef */
// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // eslint-disable-next-line no-undef
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB Atlas connected...');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1); // Should work correctly
    }
};

export default connectDB;
