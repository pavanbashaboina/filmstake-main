"use client"

import manageStore from '@/lib/store/store'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import googlePng from "../../../public/google.png"
import { Button } from '@/components/ui/button'

const page = () => {

  const { googleSignIn, isAuthenticated } = manageStore()

  const router = useRouter()

  const handleGoogleSignin = () => {
    googleSignIn()
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated])

  return (
    <div className=' pt-[20vh] flex flex-col gap-10 items-center  h-[70vh]'>
      <h1 className='text-3xl uppercase text-center'>signin</h1>
      <Button onClick={handleGoogleSignin} className='flex '>
        <Image src={googlePng} alt='google' priority width={25} height={25}/>
        <p>Sign in with Google</p>
      </Button>
    </div>
  )
}

export default page