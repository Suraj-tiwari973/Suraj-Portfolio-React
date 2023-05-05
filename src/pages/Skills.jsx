import React from 'react'
import Navbar from "../components/Navbar"

export default function Skills() {
  return (
    <div>
      <Navbar/>

      <div className="conainer">
      <div class="row" style={{height:"50vh",backgroundColor:"green"}}>
        <div className="col-12 col-lg-6" style={{backgroundColor:"yellow"}}>
          
        </div>
        <div className="col-12 col-lg-6" style={{backgroundColor:"aqua"}}>

        </div>
      </div>

      <div className="row" style={{height:"50vh",backgroundColor:"blue"}}>
          <div className="col-12 col-lg-6" style={{backgroundColor:"red"}}>
          
          </div>
          <div className="col-12 col-lg-6" style={{backgroundColor:"black"}}>
  
          </div>
      </div>
      </div>
    </div>
  )
}
