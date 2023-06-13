import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY,imageUrl} from '../../Constants/Constants'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        // fetchMovie();
        const interval=setInterval(()=>{
            fetchMovie();
        },3000)
        return () => clearInterval(interval);
    },[]);

    const fetchMovie=()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        setMovie(response.data.results[Math.floor( Math.random()*response.data.results.length)])
      })}
    
    
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
    <div className='content'>
        <h1 className='title'>{movie ? movie.original_title:''}</h1>
        <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview:''}</h1>
    </div>
    <div className="fade-bottom"></div>
 </div>
  )
}

export default Banner