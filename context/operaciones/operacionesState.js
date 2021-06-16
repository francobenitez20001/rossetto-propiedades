import React, { useReducer } from "react";
import { OPERACIONES_ERROR, OPERACIONES_LOADING, OPERACIONES_TRAER_TODAS } from "../../types";
import { OperacionesContext } from "./operacionesContext";
import operacionesReducer from './operacionesReducer';
import { API } from "../../config/index";

const OperacionesState = (props) => {
  const INTIAL_STATE = {
    data:[],
    loading:false,
    error:null
  };

  const [state, dispatch] = useReducer(operacionesReducer, INTIAL_STATE);

  const traerTodas = async()=>{
    dispatch({
      type:OPERACIONES_LOADING
    })
    try {
      const req = await fetch(`${API}/operaciones`);
      const {operaciones:data} = await req.json();
      dispatch({
        type:OPERACIONES_TRAER_TODAS,
        payload:data
      })
    } catch (error) {
      dispatch({
        type:OPERACIONES_ERROR,
        payload:error
      })
    }
  }

  return (
    <OperacionesContext.Provider
      value={{
        data:state.data,
        loading:state.loading,
        error:state.error,
        traerTodas
      }}>
      {props.children}
    </OperacionesContext.Provider>
  );
}

export default OperacionesState;
