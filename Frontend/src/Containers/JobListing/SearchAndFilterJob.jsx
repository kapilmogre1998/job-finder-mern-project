import React from 'react'
import { IoSearch } from "react-icons/io5";
import './SearchAndFilterJob.scss'

const SearchAndFilterJob = () => {

  return (
    <div className='search-and-filter-job py-6 px-10 rounded-md' >
        <div className='flex search-input rounded-md gap-2' >
          <IoSearch style={{ fontSize: '22px', color: '#73869F' }} />
          <input type="text" placeholder='Type and job title' className='w-full outline-none' />
        </div>
    </div>
  )
}

export default SearchAndFilterJob