import { connect } from 'mongoose'
import { mongoURI } from './keys';


const connectDB = async () => {
  try {
    await connect(mongoURI)
    console.log('MongoDB Connected...');
  } catch (err: any) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;