import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },
    soldCredits: {
        type: String,
        default: 0
    },
    totalCredits: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    bannerImage: {
        type: String,
        required: true
    },
    sideBanner: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        minLength: [1, "Add atleast one genre"],
    },
    crew: {
        director: {
            type: String,
            required: true
        },
        writers: {
            type: Array,
            minLength: [1, "add atleast one writer"]
        },
        stars: {
            type: Array,
            default: []
        }
    }
})