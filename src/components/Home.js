import React from 'react'
import Books from './Books'
import Form from './Form'
import { Route,Routes,Link } from 'react-router-dom'
import Button from '@mui/material/Button';

function Home() {
  return (
    <div>
      <div className='nav'>
            {/* <img src={kalvi} alt="logo" /> */}
            <Link style={{textDecorationLine:'none'}} to='/'><div className='kalvi'>
            <h3>KALVIUM</h3>
            <h5>Books</h5>
            </div>
            </Link>
            {sessionStorage.getItem('name')===null?
            <Link style={{textDecorationLine:'none',color:'white'}} to='register'>
            <Button variant="outlined" color="error">Register</Button>
            </Link>:<p>Welcome {sessionStorage.getItem('name')}!</p>}
      </div>
        <Routes>
          <Route path='/' element={<Books/>}/>
          <Route path='register' element={<Form/>}/>

        </Routes>
    </div>
  )
}

export default Home
