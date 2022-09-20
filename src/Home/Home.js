import "./Home.css"
import { FormularioReserva } from "../FormularioReserva/FormularioReserva"
import { Actividades } from "../Actividades/Actividades.js"
export function Home(){


    return(
            <>
                <h1 className="bg-dark text-white">hola</h1>
                <div className="banner">
                <FormularioReserva/>
                </div>
                <Actividades></Actividades>
            </>

    )
}