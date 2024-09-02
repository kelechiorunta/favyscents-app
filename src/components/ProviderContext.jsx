'use client'
import React, { memo, useMemo, useState } from 'react'
import { createContext } from 'react'
import store from '@/utils/redux/store'
import { Provider } from 'react-redux'

export const reduxContext = createContext(null)

 function ProviderContext({children}) {
    const [slideNos, setSlideNos] = useState(0)
    const [productNos, setProductNos] = useState(null)

    const memoizedValues = useMemo(() => 
      ({ productNos, setProductNos, slideNos, setSlideNos}), 
    [productNos, slideNos]);

  return (
    
    <reduxContext.Provider value={memoizedValues} >
        <Provider store={store}>
          {children}
        </Provider>
    </reduxContext.Provider>
    
  )
}
export default memo(ProviderContext)