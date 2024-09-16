import React, {useCallback, useEffect,useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';


export const Search = () => {
    const navigate = useNavigate();
    const [keyword, setkeyword]=useState("")
    const [movie, setmovie]=useState([])


    useEffect(()=>{
        buscar();
      },[[keyword]]);



    const buscar = ()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzg4MTliMDQ3OTdlZTQ2OTI1MjUwYmNlOTFlYmJmOCIsIm5iZiI6MTcyNjQzNjY0OC4zODI3ODksInN1YiI6IjY2YmUwYWZiMTg3MjBjYTAxNWUxNDQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmWu_hF4jZXBebIXjIWhu0vuZt6Er51OaW-y3RmdG78'
            }
          };
          
          fetch('https://api.themoviedb.org/3/search/movie?query='+keyword+'&include_adult=false&language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setmovie(response.results))
            .catch(err => console.error(err));
    }

      const searching=(e,i) =>{
    
        setkeyword(e.target.value)
      }
      const movielist = movie.slice(0,8);

      console.log(movie);
      if(movie.length==0){
        return(
         
            <div className='search'>
            <svg onClick={()=>navigate("/")} className='back' fill="#ffffff" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path></g></svg>
            <div class="group">
            
              <input onKeyUp={e=>searching(e)}
                id="query"
                class="input"
                type="search"
                placeholder="Search..."
                name="searchbar"
              />
            </div>
            /* From Uiverse.io by mrhyddenn */ 
            <div class="typewriter">
            <div class="slide"><i></i></div>
            <div class="paper"></div>
            <div class="keyboard"></div>
            </div>
            </div>
        )

      }else{
        return (
            <div className='search'>
            <svg onClick={()=>navigate("/")} className='back' fill="#ffffff" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path></g></svg>
            <div class="group">
            
              <input onKeyUp={e=>searching(e)}
                id="query"
                class="input"
                type="search"
                placeholder="Search..."
                name="searchbar"
              />
            </div>
            <div className='search-list'>
                {  movielist.map((moviedata,index) => (
                  <>
                  <div className="card_load_extreme_descripion" ><img className='imgx-search' width={'100%'} height={'100%'} key={moviedata.id}   src={'https://image.tmdb.org/t/p/original/'+moviedata.backdrop_path}></img><div  onClick={()=>navigate("/watch/"+String(moviedata.id))} className='title-movie'> <h1>{moviedata.title}</h1></div></div>
                  </>
                 ))
                 }
        
                {/*<div class="card_load_extreme_descripion"></div>
                <div class="card_load_extreme_descripion"></div>
                <div class="card_load_extreme_descripion"></div>
                <div class="card_load_extreme_descripion"></div>
                <div class="card_load_extreme_descripion"></div>
                <div class="card_load_extreme_descripion"></div>
                <div class="card_load_extreme_descripion"></div>
                <div class="card_load_extreme_descripion"></div>*/
                }
                </div>
            </div>
          )
      }

 
}
