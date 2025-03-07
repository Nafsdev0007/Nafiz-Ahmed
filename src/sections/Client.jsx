import React from 'react'
import { clientReviews } from '../constant'

function Client() {
  return (
    <section className='c-space my-20'>
        <h3 className="head-text">Hear from My Client's</h3>

        <div className="client-container">
        {clientReviews.map(({id,name,img,review,position})=>(
                <div className="client-review" key={id}>
                    <div>
                        <p className="text-white font-light">{review}</p>
                        <div className="client-content">
                            <div className="flex gap-3 ">
                                <img src={img} alt={name} className="w-12 h-12 rounded-full" />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-white-800">{name}</p>
                                    <p className="md:text-base text-sm text-white-500">{position}</p>
                                </div>
                            </div>

                            <div className="flex self-end items-center gap-2">
                                {Array.from({length: 5}).map((_,idx)=>(
                                    <img src="assets/star.png" className='h-5 w-5' alt="star" key={idx} />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>  
            ))}
        </div>
    </section>
  )
}

export default Client