import React, { useReducer } from "react";
import { CONTACTO_ERROR, CONTACTO_LOADING, CONTACTO_TRAER_TODAS } from "../../types";
import { ContactoContext } from "./contactoContext";
import contactoReducer from './contactoReducer';
import { API } from "../../config/index";

const ContactoState = (props) => {
  const INTIAL_STATE = {
    data:null,
    loading:false,
    error:null
  };

  const [state, dispatch] = useReducer(contactoReducer, INTIAL_STATE);

  const traerInfo = async()=>{
    dispatch({
      type:CONTACTO_LOADING
    })
    try {
      const req = await fetch(`${API}/contacto`);
      const {data} = await req.json();
      dispatch({
        type:CONTACTO_TRAER_TODAS,
        payload:data[0]
      })
    } catch (error) {
      dispatch({
        type:CONTACTO_ERROR,
        payload:error
      })
    }
  }

  return (
    <ContactoContext.Provider
      value={{
        data:state.data,
        loading:state.loading,
        error:state.error,
        traerInfo
      }}>
      {props.children}
    </ContactoContext.Provider>
  );
}

export default ContactoState;
