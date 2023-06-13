import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY,imageUrl} from '../../Constants/Constants'


function RowPost(props) {
    const [movies, setMovies]=useState([])
    const [urlId, seturlId]=useState('')
    const [showVideo, setShowVideo]=useState(true)
    useEffect(() => {
     axios.get(props.url).then(response=>{
       console.log(response.data)
       setMovies(response.data.results)
     }).catch(err=>{
        alert('Network Error')
     })
    }, [])
    const opts = {
        playerVars: {
          
          autoplay: 1,
        },
      };

   const handleMovie=(id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
             console.log(response.data)
             if(response.data.length!==0){
                seturlId(response.data.results[0])
             }else{
              axios.get(`tv/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
                if(response.data.length!==0){
                  seturlId(response.data.results[0])
                }else{
                  alert('Trailer Not Available')
                }
              })
             }
        })
   }

   const closeYoutube=()=>{
    setShowVideo(false)
   }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>{
        return(<img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.poster_path}`} alt="Poster" />)
    })}
        </div>
      
          {showVideo && urlId &&(
       <div className='youtube'>
        <YouTube opts={opts} videoId={urlId.key}/>
        <button className='closeButton' onClick={closeYoutube}>X</button>
        </div>
          )}
    </div>
          
  )
}

export default RowPost