import CardPropiedad from "./CardPropiedad";
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import { CategoriaContext } from "../../context/categorias/categoriasContext";
import { useEffect, useContext, useState } from "react";
import Spinner from "../Spinner";
import Router, { useRouter } from 'next/router';
import Swal from "sweetalert2";
import styled from "styled-components";

const Propiedades = () => {
  const router = useRouter();
  const {query:{propiedades:params}} = router;
  const {data:propiedades,filtrando,filtros,sinResultados,loading,loadingMasPropiedades,error,pagination,traerInmuebles,aplicarFiltros,filtrarInmuebles,updatePagination,traerMasInmuebles,traerMasFiltradas} = useContext(InmuebleContext);
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
    //console.log('aca');
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

  useEffect(() => {
    if(pagination.desde > 0){
      if(filtrando){
        traerMasFiltradas();
      }else{
        traerMasInmuebles();
      }
    }
  }, [pagination])

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

  if(loading || loadingMasPropiedades){
    return <div className="text-center"><Spinner/></div>
  }

  if(sinResultados){
    return <div className="alert alert-warning text-center">No se encontraron resultados</div>
  }

  return (
    <>
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
                          precio={inmueble.PRECIO}
                          descripcion={inmueble.DESCRIPCION}
                          categoria={inmueble.CATEGORIA}
                          operacion={inmueble.OPERACION}/>
          </div>
        ))}
      </div>
      {propiedades.length < pagination.limiteDesktop  ? null : <div className="text-center"><BotonVerMas onClick={updatePagination}>Traer más</BotonVerMas></div> }
    </>
  );
}

const BotonVerMas = styled.button`
  border:none;
  padding:9px 13px;
  border-radius:10px;
  background-color:var(--primary);
  color:var(--white);
  font-family:'Open Sans',sans-serif;
  font-size:12px;
  font-weight:bold;
  box-shadow:0px 2px 1px -1px rgba(228, 224, 224, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  margin: 0 auto;
`;

export default Propiedades;
