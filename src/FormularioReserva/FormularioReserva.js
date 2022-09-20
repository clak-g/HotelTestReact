export function FormularioReserva(){
    return(
        <>
        

            <form>
            <div className="row">
                <div className="col-12 col-md-8 text-light">
                    <h1>Reserva con nosotros</h1>
                    <h5>Los precios más económicos del mercado</h5>
                    <h5>Reserva ya</h5>
                </div>
            </div>      
                <div className="row text-light fw-bold">
                    <div className="col-12 col-md-4 ">
                    <label>Fecha Entrada</label>
                    <div className="input-group mb-3">
                    <span className="input-group-text"><i ClassName="bi bi-calendar3"></i></span>
                    <input type="date" className="form-control" placeholder="Fecha Reserva" ></input>
                        </div>

                    </div>
                    
                    <div className="col-12 col-md-4 ">
                    <label>Fecha Salida</label>
                    <div className="input-group mb-3">
                    <span className="input-group-text"><i className="bi bi-calendar3"></i></span>
                    <input type="date" className="form-control" placeholder="Fecha Reserva" ></input>
                        </div>

                    </div>

                    
                    
                </div>
                
                <div className="row">
                <div className="col-12 col-md-4 text-light fw-bold">
                    <label>Numero adultos</label>
                    <div className="input-group mb-3">
                    <span className="input-group-text"><i className="bi bi-file-person"></i></span>
                    <input type="number" className="form-control" placeholder="Fecha Reserva" ></input>
                        </div>

                    </div>
                    
                    <div className="col-12 col-md-4 text-light fw-bold">
                    <label>Numero niños</label>
                    <div className="input-group mb-3">
                    <span className="input-group-text"><i className="bi bi-file-person"></i></span>
                    <input type="number" className="form-control" placeholder="Fecha Reserva" ></input>
                    
                        </div>

                    </div>

                   
                </div>

                <button type="button" className="btn btn-info">Enviar</button>
            </form>
        
        
        
        
        
        </>
    )
}