import { useEffect, useState } from "react";

const initialState = {
  response:{},
  error:{},
  data:[],
  loading:true
};

const useFetch = (URL) => {

  const [state, setState ] = useState(initialState);

  useEffect(() => {

    fetch(URL)
    .then((response) => {
      //setState(...state, response);
      return response.json();
    })
    .then((infoJson) => {
      //console.log("soy  datas",infoJson);
      setState({...state, data:infoJson,loading:false });
      //data = infoJson;
    }).catch((_error) => {
      setState({...state, error:_error});
    });

  },[URL]);


  return [state.data,state.loading,state.response,state.error];
};

export default useFetch;