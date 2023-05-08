import { useEffect, useState } from "react";

const useFetch = (URL) => {


  const [response, setResponse] = useState({});
  const [error, setError] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /* (async (urlComplement = "") => {
      const urlGet = `${url}${urlComplement}`;
      setLoading(true);
      const response = await fetch(urlGet);//
      setResponse(response);//
      const datas = await response.json();//
      setLoading(false);
      setData(datas);
      console.log("test");
    })();*/
    
    setLoading(true);
    fetch(URL)
      .then((response) => {
        setResponse(response);
        return response.json();
      })
      .then((infoJson) => {
        //console.log("soy  datas",infoJson);
        setData(infoJson);
        setLoading(false);
        //data = infoJson;
      }).catch((_error) => {
        setError(_error);
      });
  }, [URL]);


  return [data,loading,response,error];
};

export default useFetch;