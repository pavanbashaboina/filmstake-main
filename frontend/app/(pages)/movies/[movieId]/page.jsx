"use client"

import React from 'react'
import { useParams } from 'next/navigation'


const page = () => {

    const {movieId} = useParams()

    return (
        <div className='mt-[20vh]'>{movieId}</div>
    )
}

export default page