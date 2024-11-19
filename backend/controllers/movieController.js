import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js"
import Movie from "../models/movieModel.js"



export const movieList = catchAsyncErrors(async (req, res, next) => {
    const movies = await Movie.find().select("movieName sideBanner totalCredits soldCredits")

    const movieslist = movies.map(movie => ({
        movieName: movie.movieName,
        sideBanner: movie.sideBanner,
        soldCredits: movie.soldCredits,
        totalCredits: movie.totalCredits,
        url: movie._id
    }))

    res.status(200).json({
        success: true,
        movies: movieslist
    })

})