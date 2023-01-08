import React, { useEffect, useState } from "react";
import Productos from '../api'
import logo from '../resources/Burger-King-logo-removebg-preview 2.png';
import '../style/styleProductos.css';


const Products = () => {

    const [producto, setproducto] = useState(null);
    const [menu, setmenu] = useState([]);
    const [agregado, setagregado] = useState([]);
    const [total, setTotal] = useState(0);

    // useEffect accede a las variables del estado
    useEffect(() => {
        Productos(setproducto);
        if (agregado.length) {

            setTotal(agregado.reduce((acumulador, { price, quantity }) => acumulador + (price * quantity), 0))
        }

    }, [agregado])

    const cambiaMenu = (event) => {
        // console.log(producto)
        const result = producto.filter(item => item.type.toLowerCase() === event.target.id);
        // console.log(result)
        setmenu(result)
        console.log()
    }

    const agregarPoductos = (produc) => {
        if (agregado.length) {
            if (agregado.find(item => item.id === produc.id)) {
                const product = agregado.map(item =>
                    item.id === produc.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );

                // return 
                setagregado([...product])
            } else {
                setagregado([...agregado, { ...produc, quantity: 1 }])
            }


            //

            //  orden:{
            //     'userId': variableUser,
            //     'client': idmesa,
            //     'status': 'pendiente',
            //     'dateEntry': fecha,
            //     'products':[]
            //  }

             

            //


        } else {
            setagregado([...agregado, { ...produc, quantity: 1 }])
            setTotal(produc.price)
        }

    }

    // console.log(agregado)
    // console.log(agregado.reduce((acumulador, { price, quantity }) => acumulador + (price * quantity), 0));


    const remove = (produc) => {
        console.log('remover')

    }

    const agre = (produc) => {
        console.log('agregar')

    }

    return (

        <section className="comProduc" >

            <div className="header d-flex align-items-center shadow-lg  ">
                <div>
                    <img src={logo} alt={logo} className="logoProduc" />
                </div>
                <ul className="ulHerder d-flex justify-content-around">
                    <li className="listaHerder"><a href="/Products">Productos</a></li>
                    <li className="listaHerder"><a href="/orders">Pedidos</a></li>
                </ul>
            </div>

            <section className="">
                <div className="ulOrdenes d-flex align-items-center">
                    <button type="button" className="butonPro m-3" id="desayuno" onClick={cambiaMenu}>Desayunos</button>
                    <button type="button" className="butonPro" id="almuerzo" onClick={cambiaMenu}>Almuerzo</button>

                </div>

                <section className="sectionProducto d-flex">
                    <div className="listProduc d-flex">
                        {menu !== null ? (
                            menu.map(produc => (
                                <section key={produc.id} className="cardProducts" onClick={() => agregarPoductos(produc)}>
                                    <img src={produc.image} alt="" className="imgProduct" />
                                    <p className="nombreProducto" >{produc.name} </p>
                                    <p className="precio">${produc.price}</p>
                                    <button className="agreagar btn btn-primary w-50" type="button" onClick={() => agregarPoductos(produc)}><i class="material-icons ">add_circle_outline</i></button>
                                </section>
                            ))
                        ) : ('El token ha expirado, Porfvaor vuelva a entrar para generar un nuevo')
                        }
                    </div>


                    {/* //produstos agragados */}
                    <div className="lisProductosAdd"  >
                    <input type="text" name="" id="" placeholder="Nombre" className="info" />
                        <input type="text" name="" id="" placeholder="N° Mesa" className="info" />
                        {/* <h2 className="tituloAgregado">Productos agregados</h2> */}
                        <section className="sectionProductsAgre">
                            {agregado.map(producAdd => (
                                <div className="carProductosAdd" key={producAdd.id}>
                                    <p className="nombreProductoAdd" >{producAdd.name} </p>
                                    <p className="precioProducAdd">${producAdd.price} </p>
                                    <div className="conCantidad">
                                        <div className="cantidades menos" onClick={remove}><h2>-</h2></div>
                                        <div className="cantidad">{producAdd.quantity}</div>
                                        <div className="cantidades" onClick={agre}><h2>+</h2></div>
                                        <div className="eliminarProducto" ><i class="material-icons ">delete_forever</i></div>
                                    </div>
                                    <hr />
                                </div>
                            ))
                            }
                        </section>
                        <div>
                            <p>Total: {total}</p>
                            <div className="botonesAddConfirmar d-flex">
                                <button className="cancelar"><i class="material-icons ">cancel</i></button>
                                <button className="confirmar"><i class="material-icons ">check</i></button>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        </section>

    )
}

export default Products;