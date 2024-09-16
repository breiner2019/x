import React, {useEffect,useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';

export const Watch = () => {

    const [data, setdata]=useState([]);
    const [other, setother]=useState([]);
    const [trailer, settrailer]=useState("");
    const {id} =useParams();
    const [movieid, setmovieid]=useState(id);

    const navigate = useNavigate();


    useEffect(()=>{

      CargarData();
      similar();
      video();


  },[]);


  const seetid =(x)=>{
    setmovieid(x)
    console.log(movieid)
    CargarData();
    similar();
    video();

  }


    const similar=()=>{
     
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzg4MTliMDQ3OTdlZTQ2OTI1MjUwYmNlOTFlYmJmOCIsIm5iZiI6MTcyNDYxOTA3NS45MTA4MTYsInN1YiI6IjY2YmUwYWZiMTg3MjBjYTAxNWUxNDQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vfCx9tBgwU1HjWcXLd5E2TTV8tQZMyfbpscS4bqPyjs'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/'+movieid+'/similar?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setother(response.results))
        .catch(err => console.error(err));
    }
    const video=()=>{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzg4MTliMDQ3OTdlZTQ2OTI1MjUwYmNlOTFlYmJmOCIsIm5iZiI6MTcyNDYxOTA3NS45MTA4MTYsInN1YiI6IjY2YmUwYWZiMTg3MjBjYTAxNWUxNDQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vfCx9tBgwU1HjWcXLd5E2TTV8tQZMyfbpscS4bqPyjs'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US', options)
        .then(response => response.json())
        .then(response => settrailer(response.results[0].key))
        .catch(err => console.error(err));
    }

    const CargarData = () =>{

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzg4MTliMDQ3OTdlZTQ2OTI1MjUwYmNlOTFlYmJmOCIsIm5iZiI6MTcyNDYxOTA3NS45MTA4MTYsInN1YiI6IjY2YmUwYWZiMTg3MjBjYTAxNWUxNDQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vfCx9tBgwU1HjWcXLd5E2TTV8tQZMyfbpscS4bqPyjs'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/'+movieid+'?language=en-US', options)
        .then(response => response.json())
        .then(response => setdata(response))
        .catch(err => console.error(err));
  
      } 




    if (data.length==0 || other.length==0|| trailer.length==0){
    
        return (
          <div className='cargando'>
  
        <div class="loader"></div>
        </div>
        )
     }else{

        console.log(data)
        console.log(other)
      
        const movies = other.slice(0,6);

        const style = {
            backgroundImage: 'url(https://image.tmdb.org/t/p/original/'+data.backdrop_path+')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            with: '100vh',
            minHeight: '100vh'
            
          };

        


        return (
          <>
          <div className='s' >
            <div on className='bg' style={style}> 
              <div className='dg'>
              <div className='ddx'>
              <svg onClick={()=>navigate("/")} className='back' fill="#ffffff" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path></g></svg>
                    <div className='xx'>
                      <img className='image' src={'https://image.tmdb.org/t/p/original/'+data.poster_path}></img>
                      <div className='do'>

                        <div className='genero'>
                        {data.genres.map((genre,index) => (
                            <>
                            <p className='genre'>{genre.name}</p>
                            </>
                           ))
                        }
                        </div>
                        <div className='descrip'>
                          <h2>{data.original_title}</h2>
                          <p>{data.overview}</p>
                          <div className='data-movie'>
                            <div>
                              <svg width="30px" height="30px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#f9f06b" stroke-width="0.528" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                              <p>{data.vote_average}</p>  
                              </div>
                            <div>
                            <svg  width="30px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#f9f06b"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#f9f06b"></path> </g></svg>
                            <p>{data.popularity}</p>
                            </div>
                            <div>
                            <svg width="30px" height="30px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5493 4.50005C11.3193 4.04005 8.70926 5.49996 6.54926 7.40996H4.94922C3.88835 7.40996 2.87093 7.83145 2.12079 8.58159C1.37064 9.33174 0.949219 10.3491 0.949219 11.41V13.41C0.949219 14.4708 1.37064 15.4883 2.12079 16.2385C2.87093 16.9886 3.88835 17.41 4.94922 17.41H6.54926C8.65926 19.35 11.2693 20.78 12.5493 20.33C14.6493 19.55 14.9992 15.33 14.9992 12.41C14.9992 9.48996 14.6493 5.28005 12.5493 4.50005Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                              <p>{data.original_language}</p>
                            </div>
                          
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className='trailer'>
                    <h1>Trailer</h1>
                  <iframe className='video'
                      title='Youtube player'
                      sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                      src={`https://youtube.com/embed/`+trailer+`?autoplay=0`}>
                  </iframe>
                  </div>
                  <div className='pr'>
                    <h1>Produtoras</h1>
                    <div>
                    {data.production_companies.map((x,index) => (
                            <>
                            <img width={80} className='image' src={'https://image.tmdb.org/t/p/original/'+x.logo_path}></img>
                            </>
                           ))
                        }
                    </div>

                  </div>
                  <div className='similar'>
                    <h1>May you like these</h1>
                    <div>
                    {movies.map((x,index) => (
                            <>
                            <img onClick={()=>seetid(x.id)} width={150} className='image' src={'https://image.tmdb.org/t/p/original/'+x.poster_path}></img>
                            </>
                           ))
                        }
                    </div>

                  </div>


              </div>

            </div>
          </div>
          </div>
            


          </>
        )
}
}
