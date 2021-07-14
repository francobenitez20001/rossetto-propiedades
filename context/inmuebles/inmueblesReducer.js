import { INMUEBLE_ACTUALIZAR_FILTROS, INMUEBLE_ERROR, INMUEBLE_LOADING, INMUEBLE_LOADING_MAS, INMUEBLE_RESTABLECER_FILTROS, INMUEBLE_SIN_RESULTADOS, INMUEBLE_TRAER_DESTACADAS, INMUEBLE_TRAER_MAS, INMUEBLE_TRAER_TODOS, INMUEBLE_TRAER_UNO, INMUEBLE_UPDATE_PAGINATION } from "../../types";

const inmueblesReducer = (state,action) => {
  switch (action.type) {
    case INMUEBLE_LOADING:
      return {...state,loading:true,error:null}
    case INMUEBLE_LOADING_MAS:
      return {...state,loadingMasPropiedades:true,error:null}
    case INMUEBLE_ERROR:
      return {...state,loading:false,error:action.payload}
    case INMUEBLE_TRAER_TODOS:
      return {...state,loading:false,error:null,data:action.payload,seleccionado:null,sinResultados:false};
    case INMUEBLE_TRAER_MAS:
      return {...state,loadingMasPropiedades:false,error:null,data:[...state.data,...action.payload]}
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
          desde:state.pagination.desde+action.payload.limit
        }
      }
    case INMUEBLE_ACTUALIZAR_FILTROS:
      return {
        ...state,
        filtrando:true,
        filtros:{
          idOperacion:(action.payload.idOperacion!='') ? action.payload.idOperacion : null,
          idCategoria:(action.payload.idCategoria!='') ? action.payload.idCategoria : null,
          idPartido:(action.payload.idPartido!='') ? action.payload.idPartido : null
        }
      }
    case INMUEBLE_RESTABLECER_FILTROS:
      return {
        ...state,
        filtrando:false,
        filtros:{
          idOperacion:null,
          idCategoria:null,
          idPartido:null
        },
        pagination:{
          ...state.pagination,
          desde:0
        },
        order:'normal'
      }
    case INMUEBLE_SIN_RESULTADOS:
      return{
        ...state,
        sinResultados:true,
        loadingMasPropiedades:false,
        pagination:{
          ...state.pagination,
          desde:0
        }
      }
    default:
      return state;
  }
}

export default inmueblesReducer;
