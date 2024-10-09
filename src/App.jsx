import { useState } from 'react'
import Card from './Card'
import axios from "axios"
function App() {
  const [search, setSearch] = useState(" ")
  const [bookData,setData] = useState([])
  const searchBook=(evt)=>{
    if(evt.key==="Enter" )
    {
      axios.get(' https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBA5489SA8rbNidPcYZIDUrNkl5uZIn_bg'+'&maxResult=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
    }
  }

  return (
  <>
   <div className='header'>
      <div className='row1'>
        <h1>A room without books is like <br />a body without a soul</h1>
      </div>
      <div className="row2">
      <h2>Find your book</h2>
      <div className="search">
        <input type="text" placeholder='Enter book name' value={search} onChange={e=>setSearch(e.target.value)}  onKeyPress={searchBook}/>
       
      </div>
     
      
  
      </div>
     
    </div>
    <div className="container">
     {
     
     <Card book={bookData}/>
     }
    </div>
    </>
  )
}

export default App
