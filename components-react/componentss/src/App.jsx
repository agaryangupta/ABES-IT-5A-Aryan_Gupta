import React from 'react'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/about" element = {<About/>}></Route>
      </Routes> 
    </div>
  )
}
