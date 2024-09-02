'use client'
import React, { memo, useMemo, useState } from 'react'
import { createContext } from 'react'
import store from '@/utils/redux/store'
import { Provider } from 'react-redux'

export const slideContext = createContext(null)

 function AppContext({children}) {
    const [slideNo, setSlideNo] = useState(0)
    const [productNo, setProductNo] = useState(null)

    const memoizedValues = useMemo(() => 
      ({ productNo, setProductNo, slideNo, setSlideNo}), 
    [productNo, slideNo]);

  return (
    
    <slideContext.Provider value={memoizedValues} >
        {/* <Provider store={store}> */}
          {children}
        {/* </Provider> */}
    </slideContext.Provider>
    
  )
}
export default memo(AppContext)