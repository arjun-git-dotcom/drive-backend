import mongoose from 'mongoose'

export const dbConnect = async()=>{
    try {
        const mongoString = process.env.MONGO_STRING
        console.log('MongoDB Connection String:', mongoString); 
      const connection =   await mongoose.connect('mongodb://arjunkrishnaraj5:Vrzvpo3RCtHRcpHG@drive-backend-shard-00-00.6p9nc.mongodb.net:27017,drive-backend-shard-00-01.6p9nc.mongodb.net:27017,drive-backend-shard-00-02.6p9nc.mongodb.net:27017/auth?ssl=true&replicaSet=atlas-2zc4im-shard-0&authSource=admin&retryWrites=true&w=majority&appName=drive-backend')
      if(connection){
        console.log('Db connected Succesfully')
      }
    } catch (error) {
        console.error(error);
        throw error
    }
} 