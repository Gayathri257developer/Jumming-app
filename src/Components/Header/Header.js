import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import './Header.css'

const Header = ({setUser,user}) => {
  return (
    <div className='outline'>
      <div className='header'>
      <h1>Choira</h1>
      <h4>Friday Night</h4>
      <div className="right-side">
        <select name={user} onChange={(e) => setUser(e.target.value)} className="select-layout">
          <option value="select">select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div className="invite">
          <AddIcon/>
          <p>invite</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header