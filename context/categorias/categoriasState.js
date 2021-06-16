import React, { useReducer } from "react";
import { CATEGORIAS_ERROR, CATEGORIAS_LOADING, CATEGORIAS_TRAER_TODAS } from "../../types";
import { CategoriaContext } from "./categoriasContext";
import categoriasReducer from './categoriasReducer';
import { API } from "../../config/index";

const CategoriasState = (props) => {
  const INTIAL_STATE = {
    data:[],
    loading:false,
    error:null
  };

  const [state, dispatch] = useReducer(categoriasReducer, INTIAL_STATE);

  const traerTodas = async()=>{
    dispatch({
      type:CATEGORIAS_LOADING
    })
    try {
      const req = await fetch(`${API}/categorias`);
      const {categorias:data} = await req.json();
      dispatch({
        type:CATEGORIAS_TRAER_TODAS,
        payload:data
      })
    } catch (error) {
      dispatch({
        type:CATEGORIAS_ERROR,
        payload:error
      })
    }
  }

  return (
    <CategoriaContext.Provider
      value={{
        data:state.data,
        loading:state.loading,
        error:state.error,
        traerTodas
      }}>
      {props.children}
    </CategoriaContext.Provider>
  );
}

export default CategoriasState;
