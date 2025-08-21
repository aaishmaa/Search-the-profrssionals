import User from "../modules/user.model.js";
import { uploadBufferToCloudinary } from "../middleware/image-uploader.middleware.js";
import cloudinary from"../"

export async function uploadProfilePicture(req, res) {
    try{
        if (!req.file) throw new Error("No file uploaded");

    
    const result = await uploadBufferToCloudinary(req.file.buffer, {
       folder: "profilePic",
       public_id: `profile_${req.user._id}`,
       transformation: [
        {width:1600, height:1600, crop: 'fill', gravity: 'auto'},
        {quality: 'auto', fetch_format: 'auto'}
       ]
    });
    //save the image details to MongoDB
    const user = await User.findByIdAndUpdate(
        req.user._id,
        { 
            profilePicture: { 
            url: result.secure_url,
            public_id:result.public_id
            }
        },
        { new: true,}
    );
    res.json({success: true, image: user.profilePicture});
    } catch (error) {
        res.status(400).json({ success: false, message: e.message });
    }
}