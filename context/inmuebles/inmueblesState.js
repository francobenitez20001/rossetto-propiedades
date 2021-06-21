import React, { useReducer } from "react";
import { INMUEBLE_ACTUALIZAR_FILTROS, INMUEBLE_ERROR, INMUEBLE_LOADING, INMUEBLE_RESTABLECER_FILTROS, INMUEBLE_TRAER_DESTACADAS, INMUEBLE_TRAER_MAS, INMUEBLE_TRAER_TODOS, INMUEBLE_TRAER_UNO, INMUEBLE_UPDATE_PAGINATION } from "../../types";
import { InmuebleContext } from "./inmueblesContext";
import inmueblesReducer from './inmueblesReducer';
import { API } from "../../config/index";

const InmuebleState = (props) => {
  const INTIAL_STATE = {
    data:[],
    destacadas:[],
    seleccionado:null,
    filtrando:false,
    filtros:{
      idOperacion:null,
      idCategoria:null,
      idPartido:null
    },
    loading:false,
    error:null,
    pagination:{
      limiteDesktop:10,
      limiteMobile:5,
      desde:0
    },
    order:'normal'
  };

  const [state, dispatch] = useReducer(inmueblesReducer, INTIAL_STATE);

  const traerInmuebles = async()=>{
    dispatch({
      type:INMUEBLE_LOADING
    })
    try {
      const req = await fetch(`${API}/inmuebles?desde=${state.pagination.desde}&cantidad=${state.pagination.limiteDesktop}&order=${state.order}`);
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

  const traerMasInmuebles = async()=>{
    dispatch({
      type:INMUEBLE_LOADING
    })
    try {
      const req = await fetch(`${API}/inmuebles?desde=${state.pagination.desde}&cantidad=${state.pagination.limiteDesktop}&order=${state.order}`);
      const {inmuebles} = await req.json();
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

  const filtrarInmuebles = async()=>{
    dispatch({
      type:INMUEBLE_LOADING
    })
    try {
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
      url += `order=${state.order}&cantidad=${state.pagination.limiteDesktop}&desde=${state.pagination.desde}`
      const req = await fetch(url);
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
    dispatch({
      type:INMUEBLE_UPDATE_PAGINATION
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
    traerInmuebles();
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
        loading:state.loading,
        error:state.error,
        order:state.order,
        traerInmuebles,
        traerMasInmuebles,
        filtrarInmuebles,
        traerInmueble,
        traerDestacadas,
        updatePagination,
        aplicarFiltros,
        restablecerFiltros
      }}>
      {props.children}
    </InmuebleContext.Provider>
  );
}

export default InmuebleState;
