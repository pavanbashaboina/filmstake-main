import React from 'react'
import pavanImg from "../../../public/pavan-img.jpeg"
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { LucideLinkedin } from 'lucide-react'
import Link from 'next/link'


const page = () => {

    const teamDetails = [
        {
            name: "Pulisheri Jashwanth",
            role: "Founder [CMD]",
            linkedIn: "https://www.linkedin.com/in/pulisheri-jashwanth-243196313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            email: "Pulisherijashwanth3@gmail.com"
        },
        {
            name: "Pavan Bashaboina",
            role: "Co-Founder [CTO]",
            linkedIn: "https://www.linkedin.com/in/pavan-bashaboina-ba7275333",
            email: "pavanbashaboina88@gmail.com"
        },
        {
            name: "P Vikas",
            role: "Founder [CEO]",
            linkedIn: "https://www.linkedin.com/authwall?trkInfo=AQEoJus0VXpCzwAAAZNNUMQYm86oHqkqTr6NtSphi6ObqciPXIuxN6toRcFeBTJHNGf-1JHn-__h3gWrwwZihAffnEuZelf_TxEKKTcoQ9xPWjmo1bdvkMO07w6-uts8c3pi2eE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fpilli-vikas-89870a248%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app",
            email: "Pillivikas2006@gmail.com"
        },
    ]

    return (
        <div className='px-10 flex flex-col items-center w-[100%] mt-[15vh] '>
            <h1 className='text-center text-3xl '>TEAM</h1>
            <div className='flex  flex-col gap-10 my-16 '>
                {
                    teamDetails.map((detail, i) => (
                        <div key={i} className='flex flex-col border-b border-input pb-4'>
                            <div className='flex flex-col mb-3'>
                                <h1 className='text-2xl max-md:text-xl lg:text-4xl'>{detail.name}</h1>
                                <p className='text-muted-foreground'>-{detail.role}</p>
                            </div>
                            <div className='flex gap-5 max-md:gap-2 max-md:flex-col'>
                                <Link href={detail.linkedIn} target='_blank'><LucideLinkedin /></Link>
                                <p>{detail.email}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page