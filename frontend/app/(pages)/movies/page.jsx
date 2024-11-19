"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import manageStore from '@/lib/store/store'
import Link from 'next/link'

const Page = () => {
  const { movieListAction, moviesList } = manageStore()

  useEffect(() => {
    movieListAction()
  }, [])

  return (
    <div className="container mx-auto p-6 mt-[15vh] mb-[5vh]">
      {moviesList?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {moviesList.map((movie) => (
            <Link
              href={`/movies/${movie.url}`}
              key={movie.url}
              className="block"
            >
              <Card className="group overflow-hidden transition-transform duration-200 hover:scale-105 relative">
                <CardContent className="p-0">
                  <div className="relative aspect-[2/3] w-full">
                    <Image
                      src={movie.sideBanner}
                      alt={movie.movieName}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <p className='absolute top-2 right-2 text-xs bg-black/50 px-2 py-1 rounded'>
                      <span className='text-green-500'>{movie.soldCredits} </span>
                      <span className='text-white'>/ {movie.totalCredits}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-xl text-gray-500">No movies available</p>
        </div>
      )}
    </div>
  )
}

export default Page