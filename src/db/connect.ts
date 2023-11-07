import mongoose from 'mongoose';
require('dotenv').config();

async function connect() {
  const dbUri = process.env.DB_URI as string;

  try {
    await mongoose.connect(dbUri);
    console.log('Database is connected');
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

export default connect;
