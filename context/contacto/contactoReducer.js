import { CONTACTO_ERROR, CONTACTO_LOADING, CONTACTO_TRAER_TODAS } from "../../types/index";

const contactoReducer = (state,action)=>{
  switch (action.type) {
    case CONTACTO_LOADING:
      return {...state,loading:true,error:null}
    case CONTACTO_ERROR:
      return {...state,loading:false,error:action.payload}
    case CONTACTO_TRAER_TODAS:
      return {...state,loading:false,error:null,data:action.payload}
    default:
      return state;
  }
}

export default contactoReducer;
