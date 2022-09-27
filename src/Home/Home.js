import "./Home.css"
import { FormularioReserva } from "../FormularioReserva/FormularioReserva"
import { Actividades } from "../Actividades/Actividades.js"
import {Footer} from '../Footer/footer.js';
import { ServicioHabitacion } from "../services/ServicioHabitacion"
import { useEffect, useState } from "react" //HOOKS

export function Home(){

    //USANDO EL USESTATE (FUNCION ESPECIAL PARA CREAR UNA VARIABLE GLOBAL DENTRO DEL COMPONENTE)
    const [estadoCarga,setEstadoCarga]=useState(true)
    const [habitaciones,setHabitaciones]=useState(null)

    //usando el useEffect
    //funcion que controla el render(pintar) de un componente
    useEffect(function(){

        ServicioHabitacion()
        .then(function(respuesta){
                setHabitaciones(respuesta)

                setEstadoCarga(false)

                            })

    },[])

    if(estadoCarga){
        return(

            <>
                <h1>Estoy cargando...</h1>
            </>
        )

    }else{

        return(
            <>
                <div className="banner">
                <FormularioReserva/>
                </div>
                <Actividades></Actividades>


                <div className="row contenedor mt-3">
                <div className="container text-center text-light col-md-8 col-12 mt-5 mb-2 contenedor">
                
                <h1>Habitaciones disponibles: </h1>
                
                <div className="row row-cols-1 row-cols-md-4 g-3 ">
            {
                habitaciones.datos.map(function(habitacion){


                    return(
                        <div className="mt-5"> 
                           
                            

                            <div class="col">
                                <div className="card tarjeta text-dark"> 
                                    <img  className="h-100" src= {habitacion.imagenes[0]}></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{habitacion.nombre}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )

                })
            }



            </div>
           
        </div>
                </div>
                

              
            <Footer></Footer>

            </>

        )

    }

    
}