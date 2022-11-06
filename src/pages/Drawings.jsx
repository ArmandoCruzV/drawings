import React from "react";
import '../styles/drawings.css';

const Drawings = () => {

    let nombre = localStorage.getItem('nombre');

    const pulsar = () =>{
    document.getElementById('fullBox').style.display = 'none';
    }

    const open = (reference) => {
        document.getElementById('fullBox').style.display = 'flex';
        document.getElementById('fulImg').src = reference;  
    }

//Aplicacion del clima
    let lon;
    let lat;

    window.addEventListener('load', ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(posicion => {
                lon = posicion.coords.longitude;
                lat = posicion.coords.latitude;

                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e11c36f2bfd2dc4998b106330996021e`

                fetch(url)
                .then( response => { return response.json()})
                .then( data => {
                    document.getElementById('temperatura').textContent = `${data.main.temp}`;
                    document.getElementById('temperatura-descripcion').textContent = `${data.weather[0].description}`;
                    document.getElementById('ubicacion').textContent = `${data.name}`;
                    document.getElementById('viento').textContent = `${data.wind.speed}`;
                    
                    let img = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
                    document.getElementById('icono-ubicacion').src = img;
                    console.log(img)
                }) 
                .catch( error => {
                    console.log(error)
                })
            })
        }
    })

    return(
        <div>

            <div className="fullImg"
             id="fullBox"
            >
                <img src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1551278826/content-items/002/822/285/2D_A_mi_Estilo2-original.jpg?1551278826"
                id="fulImg"
                ></img>
               <button onClick={()=>{pulsar()}}>x</button>
            </div>

            <header>
            <nav>
                <h1 id="welcome">Hello {nombre},        
                welcome to the world exclusive!
                </h1>

                <a href="https://www.facebook.com"> 
                <img src="https://w7.pngwing.com/pngs/179/128/png-transparent-computer-icons-logo-button-facebook-text-orange-grayscale.png"
                id="instagram">
                </img> 
                </a>

                <a href="https://www.instagram.com"> 
                <img src="https://ouch-cdn2.icons8.com/p_CvHdL8yd9AAeRBTyoHw2p_POdjIoRSryoVGj-17oA/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjc4/L2ViYmU1NGE5LTA0/ZTctNGNlMC1hMjM2/LWZiYzAzOTVmZWE2/NS5zdmc.png"
                id="instagram">
                </img> 
                </a>

                <ul  className="nav0">
                    <li>
                        <a> 
                        <img src="https://icones.pro/wp-content/uploads/2021/08/icone-x-avec-cercle-rouge.png"
                        id="boton-icon">
                        </img> 
                        </a>
                            <ul  className="nav" >
                                <li>
                                 <a href="/">Inicio</a>
                                </li>
                                <li>
                                 <a href="/login">Login</a>
                                </li>
                            </ul>
                    </li>
                    </ul>                

            </nav>
            </header>

            <section className="main-container">
                <div className="cards-container">

                    <div id="clima" >
                        <div id="caja1">
                            <h1 id="temperatura" ></h1>
                            <h1 id="temperatura-descripcion" ></h1>
                        </div>
                        <div id="caja2">
                            <h2 id="ubicacion" ></h2>
                            <img id="icono-ubicacion" src="" ></img>
                        </div>
                        <div id="caja3">
                            <h3>Vientosky</h3>
                            <h1 id="viento" ></h1>
                        </div>

                    </div>

                    <div className="card"
                         id="imgCards" >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6tgq-64698b48-8a5e-4d58-8a9e-adf8294a5cff.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnRncS02NDY5OGI0OC04YTVlLTRkNTgtOGE5ZS1hZGY4Mjk0YTVjZmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._UT0sDfp8HTOAOpo6wtr8ZGGgYKnEne3m_7L4nQqZC4"
                         className="card-img"
                         id="img"
                         onClick={()=>{open(
                            document.getElementById('img').src
                         )}} ></img>
                    </div>

                    <div className="card"
                         id="imgCards" 
                    >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6til-75bb7378-5631-4918-a666-62ee8f0bc604.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnRpbC03NWJiNzM3OC01NjMxLTQ5MTgtYTY2Ni02MmVlOGYwYmM2MDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3i0QGzB_bHkLqxsZeTCB1LWWE4MnUmqwBUXcd_0uE4E"
                         className="card-img"
                         id="img1"
                         onClick={()=>{open(
                            document.getElementById('img1').src
                         )}} ></img>
                    </div>

                    <div className="card"
                         id="imgCards" 
                    >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6tkc-c7a4d157-5c36-472c-bff6-27342932e6b1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnRrYy1jN2E0ZDE1Ny01YzM2LTQ3MmMtYmZmNi0yNzM0MjkzMmU2YjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mbT_KIhJGcNm5ON4-DM7Qmz7h8GN6pk3nm5C_YPkc2Y"
                         className="card-img"
                         id="img2"
                         onClick={()=>{open(
                            document.getElementById('img2').src
                         )}} ></img>
                    </div>

                    <div className="card"
                         id="imgCards" 
                    >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6tba-f2248408-7450-4bdc-a182-6ad58cfb7502.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnRiYS1mMjI0ODQwOC03NDUwLTRiZGMtYTE4Mi02YWQ1OGNmYjc1MDIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S19AW3EZEOPpUcNdmpthTsBT3zvaPxbW9UyKXr3TNco"
                         className="card-img"
                         id="img3"
                         onClick={()=>{open(
                            document.getElementById('img13').src
                         )}} ></img>
                    </div>

                    <div className="card"
                         id="imgCards" 
                    >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6tf6-530f7d77-3064-49c5-8890-fca9f201f253.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnRmNi01MzBmN2Q3Ny0zMDY0LTQ5YzUtODg5MC1mY2E5ZjIwMWYyNTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SDBPEctxXhKM0KerABEMqz3c-7LsqkBUuaXh0650xW8"
                         className="card-img"
                         id="img4"
                         onClick={()=>{open(
                            document.getElementById('img4').src
                         )}} ></img>
                    </div>

                    <div className="card"
                         id="imgCards" 
                    >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6t8t-d4aca3a4-3db3-4a50-a5fa-42a1c5bfd28d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnQ4dC1kNGFjYTNhNC0zZGIzLTRhNTAtYTVmYS00MmExYzViZmQyOGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SZcyjuABsn7kmWJsSn_AbrSsi6OUmEbH8GqW5CzCQA0"
                         className="card-img"
                         id="img5"
                         onClick={()=>{open(
                            document.getElementById('img5').src
                         )}} ></img>
                    </div>

                    <div className="card"
                         id="imgCards" 
                    >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6t11-f92e821b-9e1a-4a13-a105-c3f23493273f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnQxMS1mOTJlODIxYi05ZTFhLTRhMTMtYTEwNS1jM2YyMzQ5MzI3M2YuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._n5Hi1tAfWlYrdFmwK01whfguDZbnHtFB8XhwYyPRAk"
                         className="card-img"
                         id="img6"
                         onClick={()=>{open(
                            document.getElementById('img6').src
                         )}} ></img>
                    </div>

                    <div className="card"
                         id="imgCards" 
                    >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6sl9-788eb184-9908-4d72-9905-1e1b54f61f82.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnNsOS03ODhlYjE4NC05OTA4LTRkNzItOTkwNS0xZTFiNTRmNjFmODIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0r0R2QEws2qeHSG4AvzWJqBTP6gqIl7aYGkGfimVgR0"
                         className="card-img"
                         id="img7"
                         onClick={()=>{open(
                            document.getElementById('img7').src
                         )}} ></img>
                    </div>
                    
                    <div className="card"
                         id="imgCards" 
                    >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6sch-a2bd2962-71c9-43fd-92d1-5d17c90f794c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnNjaC1hMmJkMjk2Mi03MWM5LTQzZmQtOTJkMS01ZDE3YzkwZjc5NGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zvhn3IMs7M221T4fqjph2yBU_9XgkhKJw2kE-hhPqjE"
                         className="card-img"
                         id="img8"
                         onClick={()=>{open(
                            document.getElementById('img8').src
                         )}} ></img>
                    </div>

                    <div className="card"
                         id="imgCards" 
                    >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6s1n-a031afee-618a-44ba-864b-8017a31e52ec.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnMxbi1hMDMxYWZlZS02MThhLTQ0YmEtODY0Yi04MDE3YTMxZTUyZWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hoG3jMs--WtYUOxsqM9XuvdpxV6QAAr4nKYSVRHGQjY"
                         className="card-img"
                         id="img9"
                         onClick={()=>{open(
                            document.getElementById('img9').src
                         )}} ></img>
                    </div>

                    <div className="card"
                         id="imgCards" 
                    >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ffea3-5a32-41b3-9f18-78639d3cdd66/dfh6tcq-f32b7686-8176-4083-9894-8b1d8d621f77.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NWZmZWEzLTVhMzItNDFiMy05ZjE4LTc4NjM5ZDNjZGQ2NlwvZGZoNnRjcS1mMzJiNzY4Ni04MTc2LTQwODMtOTg5NC04YjFkOGQ2MjFmNzcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.C0jyoeqeGKqvYU6CG0oTGxMyUiGSR9lqv6-yisbyJyY"
                         className="card-img"
                         id="img10"
                         onClick={()=>{open(
                            document.getElementById('img10').src
                         )}} ></img>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Drawings;