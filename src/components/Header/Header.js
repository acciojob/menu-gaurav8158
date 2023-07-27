import React, { useState } from 'react'

const Header = (val,setVal) => {
   
    const selectAll = ()=>{
setVal("All");
    }
    const selectBreakfast=()=>{
setVal("Breakfast");
    }
    const selectLunch=()=>{
setVal("Lunch");
    }
    const selectShakes=()=>{
setVal("Shakes");
    }
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Our Menu</h1>
        <hr style={{width:"100px",color:"brown"}} />
    <div style={{display:"flex", justifyContent:"center", gap:"1rem"}}>
        
        <p onClick={selectAll}>All</p>
        <p onClick={selectBreakfast}>Breakfast</p>
        <p onClick={selectLunch}>Lunch</p>
        <p onClick={selectShakes}>Shakes</p>
    </div>
    </div>
  )
}

export default Header