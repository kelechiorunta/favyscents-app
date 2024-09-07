'use client'
import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchProduct() {
    const [name, setName] = useState('')

    const handleSearch = (e) => {
        const { name, value } = e.target
        setName(value)
    }
  return (
    <form className='flex gap-x-4 container max-w-[90%] p-2 shadow-md
     rounded-md my-4 mx-auto'>
        <input
        placeholder='Enter Search'
        name='name'
        type='text'
        value={name}
        onChange={handleSearch}
        className='p-2 min-w-[70%] text-white rounded-md bg-gradient-to-t
        from-slate-950 via-slate-600 to-slate-950
        shadow-md border'/>
        <button className='p-4 rounded-md bg-gradient-to-t
        from-slate-950 via-slate-600 to-slate-950
        shadow-md border'
        type='submit'>
            <FaSearch fill='white' size={20}/>
        </button>
    </form>
  )
}
