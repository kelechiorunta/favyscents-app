'use client'
import React, { useState } from 'react'
import { createContext } from 'react'

export const slideContext = createContext(null)

export default function AppContext({children}) {
    const [slideNo, setSlideNo] = useState(0)
    const [productNo, setProductNo] = useState(null)
  return (
    <slideContext.Provider value={{slideNo, setSlideNo, productNo, setProductNo}}>
        {children}
    </slideContext.Provider>
  )
}
