import { INMUEBLE_ACTUALIZAR_FILTROS, INMUEBLE_ERROR, INMUEBLE_LOADING, INMUEBLE_RESTABLECER_FILTROS, INMUEBLE_TRAER_DESTACADAS, INMUEBLE_TRAER_MAS, INMUEBLE_TRAER_TODOS, INMUEBLE_TRAER_UNO, INMUEBLE_UPDATE_PAGINATION } from "../../types";

const inmueblesReducer = (state,action) => {
  switch (action.type) {
    case INMUEBLE_LOADING:
      return {...state,loading:false,error:null}
    case INMUEBLE_ERROR:
      return {...state,loading:false,error:action.payload}
    case INMUEBLE_TRAER_TODOS:
      return {...state,loading:false,error:null,data:action.payload,seleccionado:null};
    case INMUEBLE_TRAER_MAS:
      return {...state,loading:false,error:null,data:[...data,action.payload]}
    case INMUEBLE_TRAER_UNO:
      return {...state,
        loading:false,
        error:null,
        seleccionado:{
          data:action.payload.inmueble[0],
          imagenes:action.payload.imagenes
        }
      }
    case INMUEBLE_TRAER_DESTACADAS:
      return {...state,loading:false,error:null,destacadas:action.payload}
    case INMUEBLE_UPDATE_PAGINATION:
      return {
        ...state,
        pagination:{
          ...state.pagination,
          desde:desde+state.pagination.limiteDesktop
        }
      }
    case INMUEBLE_ACTUALIZAR_FILTROS:
      return {
        ...state,
        fitros:{
          idOperacion:action.payload.idOperacion!='' ? action.payload.idOperacion : null,
          idOperacion:action.payload.idCategoria!='' ? action.payload.idCategoria : null,
          idOperacion:action.payload.idBarrio!='' ? action.payload.idBarrio : null
        }
      }
    case INMUEBLE_RESTABLECER_FILTROS:
      return {
        ...state,
        fltrando:false,
        filtros:{
          idOperacion:null,
          idCategoria:null,
          idPartido:null
        },
        order:'normal'
      }
    default:
      return state;
  }
}

export default inmueblesReducer;
