"use client"

import manageStore from '@/lib/store/store'
import React from 'react'

const page = () => {

  const { googleSignIn } = manageStore()

  const handleGoogleSignin = () => {
    googleSignIn()
  }

  return (
    <div className=' pt-[20vh] h-[70vh]'>
      <h1 className='text-3xl uppercase text-center'>signin</h1>
      <p className='cursor-pointer' onClick={handleGoogleSignin}>google</p>
    </div>
  )
}

export default page