import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    addressLine1: {
        type: String,
        required: true,
    },
    addressLine2: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    specializedIn: [
        {
            type: String
        }
    ],
    pincode: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const Hospital =  mongoose.model("Hospital", HospitalSchema);