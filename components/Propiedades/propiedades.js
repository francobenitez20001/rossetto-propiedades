import CardPropiedad from "./CardPropiedad";
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import { CategoriaContext } from "../../context/categorias/categoriasContext";
import { useEffect, useContext, useState } from "react";
import Spinner from "../Spinner";
import Router, { useRouter } from 'next/router';
import Swal from "sweetalert2";

const Propiedades = () => {
  const router = useRouter();
  const {query:{propiedades:params}} = router;
  const {data:propiedades,filtrando,filtros,loading,error,traerInmuebles,aplicarFiltros,filtrarInmuebles} = useContext(InmuebleContext);
  const {data:categorias,traerTodas:traerCategorias} = useContext(CategoriaContext);
  const [evitarRequest, setEvitarRequest] = useState(false);

  useEffect(() => {
    if(params){

      // Si params.length == 1 --> /propiedades
      // Si params.length == 2 --> /propiedades/:categoria
      if(params.length==1){
        //traer inmuebles solo si no hay en el state o si quedaron filtradas de antes
        if(!propiedades.length || (propiedades.length && !filtrando)){
          traerInmuebles();
        }
      }else if(params.length==2 && !filtrando){
        // aca tiene que filtrar por la categoria que vino en la url. Si no hay categorias, primero hace el GET para obtenerlas
        // luego, una vez que estan las categorias, filtro la categoria desde el state para obtener el idCategoria y enviar al endpoint de filtrado.
        if(!categorias.length){
          traerCategorias();
        }else{
          aplicarFiltroCategoria(params[1]);
        }
      }
    }
  }, [params]);

  useEffect(() => {
    if(!evitarRequest && filtrando){
      filtrarInmuebles();
      setEvitarRequest(true);//parche temporal para evitar doble request
    }
  }, [filtros]);

  useEffect(() => {
    if(categorias.length>0 && params.length==2){
      aplicarFiltroCategoria(params[1]);
    }
  }, [categorias]);

  useEffect(() => {
    if(propiedades.length==0 && filtros.idCategoria){
      Swal.fire('Atención','No se han encontrado propiedades','warning').then(()=>Router.push('/propiedades'));
    }
  }, [propiedades]);

  const aplicarFiltroCategoria = (param)=>{
    let categoriaSeleccionada = categorias.filter(categoria=>categoria.categoria.toLowerCase() == param);
    if(categoriaSeleccionada.length==0){
      Swal.fire('Error','Categoria inexistente','error').then(()=>Router.push('/'));
      return;
    }
    let idCategoria = categoriaSeleccionada[0].idCategoria;

    //al modificar el state de inmuebles con esta funcion, se va ejecutar el loop que tiene la dependencia 'filtros'(linea 37) para hacer el HTTP Request.
    aplicarFiltros({
      idOperacion:'',
      idCategoria:idCategoria,
      idPartido:''
    })
  }

  if(error){
    return <div className="alert alert-danger">Error al obtener las propiedades, intente más tarde</div>
  }

  return (
    loading ?<div className="text-center"><Spinner/></div> :
    <div className="row">
      {propiedades.map((inmueble)=>(
        <div key={inmueble.ID_INMUEBLE} className="my-3 col-12 col-md-4">
          <CardPropiedad fullWidth="true"
                        idInmueble={inmueble.ID_INMUEBLE}
                        header={inmueble.HEADER}
                        partido={inmueble.PARTIDO}
                        barrio={inmueble.BARRIO}
                        dormitorios={inmueble.DORMITORIOS}
                        moneda={inmueble.MONEDA_PROPIEDAD}
                        precio={inmueble.PRECIO}/>
        </div>
      ))}
    </div>
  );
}

export default Propiedades;
