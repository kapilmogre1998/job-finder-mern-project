
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
        <SearchAndFilterJob />
    </div>
  )
}

export default JobListing