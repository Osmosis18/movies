import React, { useState, useEffect } from 'react'
import "./style.css"
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

function Home() {
  // let [a, b] = useState(67)


  // function checkAge (age){
  //   if (age >= 18) {
  //      alert("You can drive");
  //     }else{
  //       alert ("You cannot drive")
  //     }}
  // function calc() {
  //   // alert('I HATE YOU')}
  //     alert(Math.random() * 1000)  
  //   }
  // function getData() {
  //   let text = document.querySelector("input").value
  //   alert(text)
  // }
  // const movies = [
  //   { image: "./../images/pic 1.jpg", tittle: "The 100", id: 1, desc: "csdycscyjybs" },
  //   { image: "./../images/pic2.jpg", tittle: "Grimm", id: 2, desc: "csdycscyjybs" },
  //   { image: "./../images/pic3.jpg", tittle: "The Mother", id: 3, desc: "csdycscyjybs" },
  //   { image: "./../images/pic4.jpg", tittle: "Damsel", id: 4, desc: "csdycscyjybs" },
  //   { image: "./../images/pic5.jpg", tittle: "Vampire Diaries", id: 5, desc: "csdycscyjybs" },
  //   { image: "./../images/pic6.jpg", tittle: "Flash", id: 6, desc: "csdycscyjybs" },
  // ]
  const[movies, setMovies] = useState([])
  const [movieId, setMovieId] = useState("")
  
  useEffect(() => {
    
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=c06e9cf7fad168fc5f9ac616ee2f9192")
    .then((res) => res.json())
    .then((res) => setMovies(res.results))
    .catch((err) =>console.log(err))
    
  }, [])

  // function changeNumbr() {
  //   b(100)
  // }
  function handleClick(title){
    movieTrailer(title)
    .then((res) => {
      let vidId = res.split("=")[1]

      setMovieId(vidId)
      
    })
  }
  const opt ={
    playerVars: {
      autoplay: 1,
  },
}


  return (
    // <div style={{color: "red", fontSize: "5rem", backgroundColor: "green"}}>Home</div>
    <div className='test'>
      {/* <button onClick={greet} style={{color: "red", borderRadius: "0.5rem", fontSize: "3rem" }}>click</button> */}
      {/* <button onClick={calc}>click</button> */}
      {/* <input type="text" onChange={(m) => console.log (m.target.value)} />

      <button onClick={getData}>button</button>

      <h1>I am a programmer</h1> */}
      <div className='banner'>
        <div>
          <h4>The Marvels</h4>
          <div>
            <button> Watch Now </button>
            <button> Save for later </button>
          </div>


          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, dolorum!</p>


        </div>
      </div>
      {/* <h3>{a}</h3> */}
      {/* <button onClick={changeNumbr}>click to change</button> */}
      <main className='bg-dark p-5'>

        <div className='container'>

          <h5 className='text-white mb-5 '>Trending</h5>

          <div className="moviesposter d-flex">
            {
              movies.map(each => (
                
                <img onClick={() =>handleClick(each.original_title)} src={"https://image.tmdb.org/t/p/w500/" + each.poster_path} alt="poster image" />

              ))
            }



          </div>
          <div className='player'>
            <YouTube
            videoId={movieId}
            opts={opt}
            /> 

          </div>

        </div>
      </main>
    </div>
  )
}

export default Home
