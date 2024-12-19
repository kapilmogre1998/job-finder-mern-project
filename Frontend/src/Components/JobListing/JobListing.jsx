
import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner from '../../assets/job-finder-top-banner.png'
import shade1 from '../../assets/job-finder-top-banner-shade1.png'
import shade2 from '../../assets/job-finder-top-banner-shade2.png'
import shade3 from '../../assets/job-finder-top-banner-shade3.png'
import SearchAndFilterJob from '../../Containers/JobListing/SearchAndFilterJob'

import './JobListing.scss'

const JobListing = () => {
    const navigate = useNavigate()

  return (
    <div className='job-listing-container' >
        <div className='job-top-banner relative overflow-hidden' >
            <img src={banner} alt="top-banner" />
            <img className='absolute bottom-0 shade-1' src={shade1} alt="" />
            <img className='absolute shade-2' src={shade2} alt="" />
            <img className='absolute shade-3' src={shade3} alt="" />
            <p className='absolute title text-white font-bold' >Jobfinder</p>
            <div className='absolute action-btns gap-4' >
                <p className='login text-white px-5 py-1 rounded-md cursor-pointer' onClick={() => navigate('/login')} >Login</p>
                <p className='register bg-white text-red-600 px-5 py-1 rounded-md cursor-pointer' onClick={() => navigate('/register')} >Register</p>
            </div>
        </div>
        <div className='m-auto w-7/12' >
          <SearchAndFilterJob />
          <div className='jobs-container' >
            <div className='job-card bg-white px-4 py-6 rounded-md flex' >
              <div className='mr-4 mt-2 flex-shrink-0' >
                <img className='company-logo rounded-lg' src="https://fastly.picsum.photos/id/491/200/300.jpg?hmac=1uGno3XFc0HqGY5bM9-mMu0M_wwx7oC0bC1hj_a9p04" alt="" />
              </div>
              
              <div className='flex justify-between w-full' >
                <div className='flex flex-col gap-1' >
                  <div>Frontend Developer</div>
                  <div className='flex gap-2' >
                    <div>11-55</div>
                    <div>&#8377; 50,000</div>
                    <div>Delhi</div>
                  </div>
                  <div className='flex gap-3 text-xs default-color font-medium' >
                    <div>Office</div>
                    <div>Full time</div>
                  </div>
                </div>

                <div className='flex flex-col justify-between text-xs' >
                  <div className='flex gap-2 skills-container justify-end ' >{['HTML','CSS', 'JS'].map((item, index) => (<span className='px-3 py-1 rounded-sm' key={index}>{item}</span>))}</div>
                  <div className='flex gap-3 text-sm btn-container' >
                    <button className='edit-btn px-3 py-1 rounded' >Edit Job</button>
                    <button className='view-btn px-3 py-1 text-white rounded' >View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default JobListing