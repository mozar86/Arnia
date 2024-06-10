import { mongoose } from '../database';
import { IAdmin } from '../entities/Admin';

const AdminSchema = new mongoose.Schema<IAdmin>({
    emailAdmin: {
        type: String,
        required: true,
        unique: true
    },
    passwordAdmin: {
        type: String,
        required: true
    }
})

export const AdminModel = mongoose.model("AdminModel", AdminSchema);