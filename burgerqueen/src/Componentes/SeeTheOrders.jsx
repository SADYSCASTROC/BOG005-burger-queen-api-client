import React from 'react';
import '../style/styleSeeTheOrdersl.css'

const SeeTheOrders = () => {

    return (
        <section className="containe">
            <div className="divInfo">
                <label htmlFor="" className="infoUsuario"> Nombre
                    <input type="text" name="" id="infoNombre" className="info" />
                </label>
                <label htmlFor="" className="infoUsuario"> Mesa
                    <input type="text" name="" id="infoMesa" className="info" />
                </label>
            </div>
            <section className="vistaOrdenes">
            </section>

           <div className='botones'>
            <button className='confirmar'>Confirmas</button>
            <button className='cancelar'>Cancelar</button>

           </div>
        </section>

    )

}
export default SeeTheOrders;