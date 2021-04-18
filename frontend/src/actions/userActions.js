import Axios from 'axios';
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from '../constants/userConstants';



export const listUsers = (
  pageNumber
  ) => async (dispatch, getState) => {
    dispatch({ type: USER_LIST_REQUEST });
    try {
  
      const { data } = await Axios.get('/api/users/', {
        params:{
          page: pageNumber ? pageNumber : 1,
          
        }
      });
      
      
      dispatch({ type: USER_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: USER_LIST_FAIL, payload: message });
  }
};