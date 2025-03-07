import React from 'react'

function Footer() {
  return (
    <section className='c-space  pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p></p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon"><a  className='w-1/2 h-1/2' target='_blank' href="https://github.com/Nafsdev0007"> <img src="/assets/github.svg"  className='w-full h-full'  alt="github"/></a></div>
        <div className="social-icon"><a  className='w-1/2 h-1/2' target='_blank' href="https://x.com/IqbalNafiz21530"> <img src="/assets/twitter.svg"  className='w-full h-full'  alt="twitter"/></a></div>
        <div className="social-icon"><a  className='w-1/2 h-1/2' target='_blank' href="https://instagram.com/mnc_910"> <img src="/assets/instagram.svg"  className='w-full h-full'  alt="instagram"/></a></div>
      </div>
      <p className="text-white-500">&copy; 2025 Nafiz. All rights reserved.</p>
    </section>
  )
}

export default Footer