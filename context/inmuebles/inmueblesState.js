import React, { useReducer } from "react";
import { INMUEBLE_ACTUALIZAR_FILTROS, INMUEBLE_ERROR, INMUEBLE_LOADING, INMUEBLE_LOADING_MAS, INMUEBLE_RESTABLECER_FILTROS, INMUEBLE_SIN_RESULTADOS, INMUEBLE_TRAER_DESTACADAS, INMUEBLE_TRAER_MAS, INMUEBLE_TRAER_TODOS, INMUEBLE_TRAER_UNO, INMUEBLE_UPDATE_PAGINATION } from "../../types";
import { InmuebleContext } from "./inmueblesContext";
import inmueblesReducer from './inmueblesReducer';
import { API } from "../../config/index";
import {isMobile} from '../../helpers/index';

const InmuebleState = (props) => {
  const INTIAL_STATE = {
    data:[],
    destacadas:[],
    seleccionado:null,
    filtrando:false,
    sinResultados:false, //boolean para manejar cuando no hay resultados al traer mas propiedades.
    filtros:{
      idOperacion:null,
      idCategoria:null,
      idPartido:null
    },
    loading:false,
    loadingMasPropiedades:false,
    error:null,
    pagination:{
      limiteDesktop:10,
      limiteMobile:5,
      desde:0
    },
    order:'normal'
  };

  const [state, dispatch] = useReducer(inmueblesReducer, INTIAL_STATE);

  const traerInmuebles = async(desde=null)=>{
    dispatch({
      type:INMUEBLE_LOADING
    });
    let limit = isMobile() ? state.pagination.limiteMobile : state.pagination.limiteDesktop;
    let minimo = desde==0 ? desde : state.pagination.desde;
    try {
      const req = await fetch(`${API}/inmuebles?desde=${minimo}&cantidad=${limit}&order=${state.order}`);
      const {inmuebles} = await req.json();
      dispatch({
        type:INMUEBLE_TRAER_TODOS,
        payload:inmuebles
      })
    } catch (error) {
      dispatch({
        type:INMUEBLE_ERROR,
        payload:error
      })
    }
  }

  const filtrarInmuebles = async()=>{
    dispatch({
      type:INMUEBLE_LOADING
    })
    try {
      let limit = isMobile() ? state.pagination.limiteMobile : state.pagination.limiteDesktop;
      let url = `${API}/inmuebles/filtrar?`;
      if(state.filtros.idOperacion){
        url += `idOperacion=${state.filtros.idOperacion}&`;
      }
      if(state.filtros.idCategoria){
        url += `idCategoria=${state.filtros.idCategoria}&`;
      }
      if(state.filtros.idPartido){
        url += `idPartido=${state.filtros.idPartido}&`;
      }
      url += `order=${state.order}&cantidad=${limit}&desde=0`
      const req = await fetch(url);
      const {inmuebles} = await req.json();
      if(!inmuebles.length){
        return dispatch({
          type:INMUEBLE_SIN_RESULTADOS
        })
      }
      dispatch({
        type:INMUEBLE_TRAER_TODOS,
        payload:inmuebles
      })
    } catch (error) {
      dispatch({
        type:INMUEBLE_ERROR,
        payload:error
      })
    }
  }

  const traerMasInmuebles = async()=>{
    dispatch({
      type:INMUEBLE_LOADING_MAS
    })
    try {
      let limit = isMobile() ? state.pagination.limiteMobile : state.pagination.limiteDesktop;
      const req = await fetch(`${API}/inmuebles?desde=${state.pagination.desde}&cantidad=${limit}&order=${state.order}`);
      const {inmuebles} = await req.json();
      if(!inmuebles.length){
        return dispatch({
          type:INMUEBLE_SIN_RESULTADOS
        })
      }
      dispatch({
        type:INMUEBLE_TRAER_MAS,
        payload:inmuebles
      })
    } catch (error) {
      dispatch({
        type:INMUEBLE_ERROR,
        payload:error
      })
    }
  }

  const traerMasFiltradas = async()=>{
    dispatch({
      type:INMUEBLE_LOADING_MAS
    })
    try {
      let limit = isMobile() ? state.pagination.limiteMobile : state.pagination.limiteDesktop;
      let url = `${API}/inmuebles/filtrar?`;
      if(state.filtros.idOperacion){
        url += `idOperacion=${state.filtros.idOperacion}&`;
      }
      if(state.filtros.idCategoria){
        url += `idCategoria=${state.filtros.idCategoria}&`;
      }
      if(state.filtros.idPartido){
        url += `idPartido=${state.filtros.idPartido}&`;
      }
      url += `order=${state.order}&cantidad=${limit}&desde=${state.pagination.desde}`
      const req = await fetch(url);
      const {inmuebles} = await req.json();
      if(!inmuebles.length){
        return dispatch({
          type:INMUEBLE_SIN_RESULTADOS
        })
      }
      dispatch({
        type:INMUEBLE_TRAER_MAS,
        payload:inmuebles
      })
    } catch (error) {
      dispatch({
        type:INMUEBLE_ERROR,
        payload:error
      })
    }
  }


  const traerInmueble = async id=>{
    dispatch({
      type:INMUEBLE_LOADING
    })
    try {
      const req = await fetch(`${API}/inmuebles/${id}`);
      const data = await req.json();
      dispatch({
        type:INMUEBLE_TRAER_UNO,
        payload:data
      })
    } catch (error) {
      dispatch({
        type:INMUEBLE_ERROR,
        payload:error
      })
    }
  }

  const traerDestacadas = async ()=>{
    dispatch({
      type:INMUEBLE_LOADING
    })
    try {
      const req = await fetch(`${API}/inmuebles?desde=0&cantidad=6&order=normal&destacada=1`);
      const {inmuebles} = await req.json();
      dispatch({
        type:INMUEBLE_TRAER_DESTACADAS,
        payload:inmuebles
      })
    } catch (error) {
      dispatch({
        type:INMUEBLE_ERROR,
        payload:error
      })
    }
  }

  const updatePagination = ()=>{
    let limit = isMobile() ? state.pagination.limiteMobile : state.pagination.limiteDesktop;
    dispatch({
      type:INMUEBLE_UPDATE_PAGINATION,
      payload:{limit}
    })
  }

  const aplicarFiltros = (data)=>{//data es el objeto con los filtros
    dispatch({
      type:INMUEBLE_ACTUALIZAR_FILTROS,
      payload:data
    })
  }

  const restablecerFiltros = ()=>{
    dispatch({
      type:INMUEBLE_RESTABLECER_FILTROS
    });
    traerInmuebles(0);
  }


  return (
    <InmuebleContext.Provider
      value={{
        data:state.data,
        seleccionado:state.seleccionado,
        destacadas:state.destacadas,
        filtrando:state.filtrando,
        filtros:state.filtros,
        pagination:state.pagination,
        sinResultados:state.sinResultados,
        loading:state.loading,
        loadingMasPropiedades:state.loadingMasPropiedades,
        error:state.error,
        order:state.order,
        traerInmuebles,
        traerMasInmuebles,
        filtrarInmuebles,
        traerInmueble,
        traerDestacadas,
        traerMasFiltradas,
        updatePagination,
        aplicarFiltros,
        restablecerFiltros
      }}>
      {props.children}
    </InmuebleContext.Provider>
  );
}

export default InmuebleState;
