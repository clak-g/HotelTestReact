export async function ServicioHabitacion(){


    //1.Uri

    const URI = "https://servercomfama.herokuapp.com/viajescomfama/habitaciones"

    //2. CONFIGURAR LA PETICION

    const PETICION={
        method: "GET"
    }

    //CONSUMIRR
    let respuesta=await fetch(URI, PETICION)

    let datos=await respuesta.json()

    return datos

}