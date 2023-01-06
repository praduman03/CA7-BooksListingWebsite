import React from 'react'
import Books from './Books'
import Form from './Form'
import { Route,Routes,Link } from 'react-router-dom'

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
            <Link style={{textDecorationLine:'none',color:'white'}} to='register'>
            <button>Register</button>
            </Link>
            </div>
        <Routes>
          <Route path='/' element={<Books/>}/>
          <Route path='register' element={<Form/>}/>

        </Routes>
    </div>
  )
}

export default Home
