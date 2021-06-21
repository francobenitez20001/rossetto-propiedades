import React, { useReducer } from "react";
import { PARTIDOS_ERROR, PARTIDOS_LOADING, PARTIDOS_TRAER_TODOS } from "../../types";
import { PartidosContext } from "./partidosContext";
import partidosReducer from './partidosReducer';
import { API } from "../../config/index";

const PartidosState = (props) => {
  const INTIAL_STATE = {
    data:[],
    loading:false,
    error:null
  };

  const [state, dispatch] = useReducer(partidosReducer, INTIAL_STATE);

  const traerTodos = async()=>{
    dispatch({
      type:PARTIDOS_LOADING
    })
    try {
      const req = await fetch(`${API}/partidos`);
      const {partidos:data} = await req.json();
      //console.log(data);
      dispatch({
        type:PARTIDOS_TRAER_TODOS,
        payload:data
      })
    } catch (error) {
      dispatch({
        type:PARTIDOS_ERROR,
        payload:error
      })
    }
  }

  return (
    <PartidosContext.Provider
      value={{
        data:state.data,
        loading:state.loading,
        error:state.error,
        traerTodos
      }}>
      {props.children}
    </PartidosContext.Provider>
  );
}

export default PartidosState;
