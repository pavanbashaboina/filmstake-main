import mongoose from 'mongoose';

export const GENRES = [
    { value: 'ACTION', label: 'Action' },
    { value: 'ADVENTURE', label: 'Adventure' },
    { value: 'ANIMATION', label: 'Animation' },
    { value: 'COMEDY', label: 'Comedy' },
    { value: 'CRIME', label: 'Crime' },
    { value: 'DOCUMENTARY', label: 'Documentary' },
    { value: 'DRAMA', label: 'Drama' },
    { value: 'FAMILY', label: 'Family' },
    { value: 'FANTASY', label: 'Fantasy' },
    { value: 'HORROR', label: 'Horror' },
    { value: 'MYSTERY', label: 'Mystery' },
    { value: 'ROMANCE', label: 'Romance' },
    { value: 'SCIFI', label: 'Science Fiction' },
    { value: 'THRILLER', label: 'Thriller' }
];

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: [true, 'Movie name is required'],
        trim: true,
        maxLength: [100, 'Movie name cannot exceed 100 characters']
    },
    soldCredits: {
        type: Number,
        default: '0',
        validate: {
            validator: function(v) {
                return !isNaN(v);
            },
            message: 'Sold credits must be a valid number'
        }
    },
    totalCredits: {
        type: Number,
        required: [true, 'Total credits is required'],
        min: [0, 'Total credits cannot be negative']
    },
    bannerImage: {
        type: String,
        required: [true, 'Banner image is required']
    },
    sideBanner: {
        type: String,
        required: [true, 'Side banner is required']
    },
    caption: {
        type: String,
        required: [true, 'Caption is required'],
        trim: true,
        maxLength: [500, 'Caption cannot exceed 500 characters']
    },
    genre: {
        type: [{
            type: String,
            enum: GENRES.map(g => g.value)
        }],
        validate: {
            validator: function(v) {
                return v.length >= 1;
            },
            message: 'At least one genre is required'
        }
    },
    crew: {
        director: {
            type: String,
            required: [true, 'Director name is required'],
            trim: true
        },
        writers: {
            type: [String],
            validate: {
                validator: function(v) {
                    return v.length >= 1;
                },
                message: 'At least one writer is required'
            }
        },
        stars: {
            type: [String],
            default: []
        }
    },
    status: {
        type: String,
        enum: ['DRAFT', 'PUBLISHED', 'ARCHIVED'],
        default: 'DRAFT'
    },
  
}, {
    timestamps: true
});

// Optimize queries with indexes
movieSchema.index({ movieName: 1 });
movieSchema.index({ genre: 1 });
movieSchema.index({ status: 1 });
movieSchema.index({ 'crew.director': 1 });

export default mongoose.model('Movie', movieSchema);