import {Schema, model} from "mongoose";
import {USER} from "../configuretion/constant.js";
import bcrypt from "bcrypt";

const userAccountSchema = new Schema({
        _id: {
            type: String,
            required: true,
            alias: 'login'
        },
        password: {
            type: String,
            required: true,
            // select: false
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        roles: {
            type: [String],
            default: [USER]
        }
    },
    {
        versionKey: false,
        toJSON:{
            transform: (doc, ret) => {
                ret.login = ret._id;
                delete ret._id;
                delete ret.password;
            }
        }
    }
)

userAccountSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
})

userAccountSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export default model('UserAccount', userAccountSchema, 'users');