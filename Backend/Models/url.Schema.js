import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    urlName:{
        type: String,
        required: [true, 'Url name required']
    },
    longUrl:{
        type: String,
        required: [true, 'LongUrl is required'],
    },
    shortUrl: {
        type: String
    }
})

const Url = mongoose.model('url',urlSchema);
export default Url;