import React, {useEffect,useState} from 'react'
import { useNavigate} from 'react-router-dom';

export const Com1 = () => {

    const [data, setdata]=useState([])
    const [banner, setBanner]=useState(0)
    const [page, setpage]=useState(0)
    const navigate = useNavigate();



    useEffect(()=>{
        
      CargarData();
      window.addEventListener('scroll', handleScroll);

    },[]);

    const  loadMoreData =()=>{
      console.log("Cargando");
    }

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.scrollHeight 
       
      ) {
        loadMoreData();
      }
    };

    const addUser = (newUser) => {
      setdata(prevUsers => [...prevUsers, newUser]);
     };


    const CargarData = () =>{

   

      for (let i = 0; i < 5; i++) {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzg4MTliMDQ3OTdlZTQ2OTI1MjUwYmNlOTFlYmJmOCIsIm5iZiI6MTcyNDAxODI0MC4yNjY2Niwic3ViIjoiNjZiZTBhZmIxODcyMGNhMDE1ZTE0NDNjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.MrTJ5_HNI6oIJd_zL_tc8JbBEUWdT2k2o6q3mqTFjmE'
          }
        };
        
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page='+String(i+1), options)
          .then(response => response.json())
          .then(response =>  addUser(response.results))
          .catch(err => console.error(err));

        }
    
        
    } 




  
   if (data.length==0){
    return (
      <div className='cargando'>

      <div class="loader"></div>
      </div>
    )   
     
   }else{





    const Popular = data.flat().slice(0,5);
    const Popular2 = data.flat().slice(5, 20);
    console.log(data.flat())
    const PopularList = data.flat().slice(10, 30);
    const PopularList2 = data.flat().slice(30, 50);
    const PopularList3 = data.flat().slice(50, 70);
    const PopularList4 = data.flat().slice(70, 90);
    const PopularList5 = data.flat().slice(90, 100);
    const hoverChangeBanner=(e,i) =>{
      setBanner(i);
    }
    

    const scrollxy=(e,i,y) =>{
     
      const scrollableElement = document.getElementById('c'+y);
      const IconElementR = document.getElementById('iconR');
      const IconElementL = document.getElementById('iconL');
      
      if(i==1){

        scrollableElement.scrollTo({
          left:  scrollableElement.scrollLeft+700 ,
          behavior: 'smooth'

      });

      }else{
        console.log(scrollableElement.scrollLeft)
        scrollableElement.scrollTo({
          left:  scrollableElement.scrollLeft-700 ,
          behavior: 'smooth'
          
      });

     
      }


    }




    const style = {
        backgroundImage: 'url(https://image.tmdb.org/t/p/original/'+Popular[banner].backdrop_path+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        with: '100vh',
        minHeight: '100vh'
        
      };
 
    return (

      <>

      <div on className='bg' style={style}> 



        <div className='dg'>
        
        <nav class="navbar">
         <ul class="nav-menu">

         </ul>
              
         <ul class="nav-menu2">
          <li class="nav-item"><div class="group"></div>  
           <svg onClick={()=>navigate("/search")} viewBox="0 0 24 24" aria-hidden="true" class="icon">
            <g  >
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>
      </li>
          <li class="nav-item"><a href="#home">Home</a></li>
         </ul>
        </nav>
        <div className='description'>
        <h1>{Popular[banner].title}</h1>
        <p>{Popular[banner].overview}</p>      
        <button onClick={()=>navigate("/watch/"+String(Popular[banner].id))} id="bottone1"><strong>WATCH NOW</strong></button>
        </div>
        <div className='GroupImgsDad'>
     
        <div className='GroupImgs'>
        <h1>Tendencias</h1>
        {Popular.map((populardata,index) => (
          <>
          <img key={populardata.id} onMouseOver={e=>hoverChangeBanner(e,index)} className='image' src={'https://image.tmdb.org/t/p/original/'+populardata.poster_path}></img>
          </>
         ))
         }
        </div></div>
 
        <div className='dd'>

        <div className='Top'>
             <a>  <h1>Nuevas</h1></a> 
             <div id='SigBotnR' className='SigBotnR' ><svg id='iconR' onClick={e=>scrollxy(e,1,'1')} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
             <div id='SigBotnL' className='SigBotnL' > <svg id='iconL'  onClick={e=>scrollxy(e,0,'1')}viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </div>
             <div id='c1' className='GroupImg'> 
             {Popular2.map((populardata,index) => (
               <div>
               <img width={300} className='image' src={'https://image.tmdb.org/t/p/original/'+populardata.backdrop_path}></img>
               <h4>{populardata.title}</h4>
               <p>{populardata.release_date}</p>
               </div>
              ))
              }
             </div>
          </div>

          <div className='Popular'>
             <a>  <h1>Popular</h1></a> 
             <div id='SigBotnR' className='SigBotnR' ><svg id='iconR' onClick={e=>scrollxy(e,1,'2')} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
             <div id='SigBotnL' className='SigBotnL' > <svg id='iconL'  onClick={e=>scrollxy(e,0,'2')}viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </div>
             <div id='c2' className='GroupImg'> 
             {PopularList.map((populardata,index) => (
               <div>
               <img onClick={()=>navigate("/watch/"+String(populardata.id))} className='image' src={'https://image.tmdb.org/t/p/original/'+populardata.poster_path}></img>
               <h4>{populardata.title}</h4>
               <p>{populardata.release_date}</p>
               </div>
              ))
              }
             </div>
          </div>

          <div className='Popular'>
             <a>  <h1>Mas vistas</h1></a> 
             <div id='SigBotnR' className='SigBotnR' ><svg id='iconR' onClick={e=>scrollxy(e,1,'3')} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
             <div id='SigBotnL' className='SigBotnL' > <svg id='iconL'  onClick={e=>scrollxy(e,0,'3')}viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </div>
             <div id='c3' className='GroupImg'> 
             {PopularList2.map((populardata,index) => (
               <div>
               <img onClick={()=>navigate("/watch/"+String(populardata.id))} className='image' src={'https://image.tmdb.org/t/p/original/'+populardata.poster_path}></img>
               <h4>{populardata.title}</h4>
               <p>{populardata.release_date}</p>
               </div>
              ))
              }
             </div>
          </div>


          <div className='Popular'>
             <a>  <h1>Premiadas</h1></a> 
             <div id='SigBotnR' className='SigBotnR' ><svg id='iconR' onClick={e=>scrollxy(e,1,'4')} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
             <div id='SigBotnL' className='SigBotnL' > <svg id='iconL'  onClick={e=>scrollxy(e,0,'4')}viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </div>
             <div id='c4' className='GroupImg'> 
             {PopularList3.map((populardata,index) => (
               <div>
               <img onClick={()=>navigate("/watch/"+String(populardata.id))} className='image' src={'https://image.tmdb.org/t/p/original/'+populardata.poster_path}></img>
               <h4>{populardata.title}</h4>
               <p>{populardata.release_date}</p>
               </div>
              ))
              }
             </div>
          </div>

          <div className='Popular'>
             <a>  <h1>Aclamadas por la critica </h1></a> 
             <div id='SigBotnR' className='SigBotnR' ><svg id='iconR' onClick={e=>scrollxy(e,1,'5')} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
             <div id='SigBotnL' className='SigBotnL' > <svg id='iconL'  onClick={e=>scrollxy(e,0,'5')}viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </div>
             <div id='c5' className='GroupImg'> 
             {PopularList4.map((populardata,index) => (
               <div>
               <img onClick={()=>navigate("/watch/"+String(populardata.id))}  className='image' src={'https://image.tmdb.org/t/p/original/'+populardata.poster_path}></img>
               <h4>{populardata.title}</h4>
               <p>{populardata.release_date}</p>
               </div>
              ))  
              }
             </div>
          </div>

          <div className='Popular'>
             <a>  <h1>Imperdibles</h1></a> 
             <div id='SigBotnR' className='SigBotnR' ><svg id='iconR' onClick={e=>scrollxy(e,1,'6')} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
             <div id='SigBotnL' className='SigBotnL' > <svg id='iconL'  onClick={e=>scrollxy(e,0,'6')}viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#f9f06b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </div>
             <div id='c6' className='GroupImg'> 
             {PopularList5.map((populardata,index) => (
               <div>
               <img onClick={()=>navigate("/watch/"+String(populardata.id))} className='image' src={'https://image.tmdb.org/t/p/original/'+populardata.poster_path}></img>
               <h4>{populardata.title}</h4>
               <p>{populardata.release_date}</p>
               </div>
              ))
              }
             </div>
          </div>







        </div>
        </div>
      </div>
      <div className='d'>

      </div>
      </>
    )
   }

   
}
