
import { collection, doc, getDoc, getDocs, getFirestore, where, limit, query } from 'firebase/firestore';
import { useEffect, useState, useMemo } from 'react';

const initialState = {
    response: {},
    error: {},
    data: [],
    loading: true,
};

const filterFunctions = { where, limit}; // funciones de filtro o consulta. 

const useFirestore = ({ nameCollection, documentId, filters }) => {
    const [state, setState] = useState(initialState);

    // generamos un filtro de manera dinamica
    const listFilters = useMemo(() => {
        // si los filtros no existen (no pasamos la propiedad), usa un arreglo vacio, si no...
        //Object.keys obtiene las llaves de un arreglo. Desps le pedimos que lo MAP y recupere cada llave
        return Object.keys(filters || {}).map(key =>{
            // cada llave que obtenga la recupera e identifica que tiene dentro esa llave y obten la funcion que esta filtrando
            const filter = filterFunctions[key];
            // en el objeto de filtros, segun su llave, obten el campo, el operador y el valor
            const [field, operator, value ] = filters[key];
            // mando a ejecutar el filtro
            return filter(field, operator, value) 
        })
    }, [filters]); // actualizala cuando se actualicen los filtros

    useEffect(() => {
        // Esta es la manera de obtener una coleccion
        const db = getFirestore(); // referencia a la base de datos (responde a ¿Donde tengo mi base de datos?, podemos usar getFirestore gracias a que hicimos la configuracion)
        //const biciRef = collection(db, nameCollection) //  Ahora dime la coleccion que quieres recuperar de la base de datos (nameCollection), este nombre se lo vamos a pasar al hook al momento de su creacion

        if (nameCollection && documentId) { // si paso las 2 propiedades, es porque quiero hacer lo siguiente (traer un dato en especifico)
            // Esta es la manera de obtener un documento en especifico
            getDoc(doc(db, nameCollection, documentId)).then((snapshot) => { // vamos a obtener el documento del documneto 
                // si el documento que mando a llamar esta ahi dentro (el ID existe)
                if (snapshot.exists()) { 
                    const data = snapshot.data(); // entonces dame la data
                    setState({ ...state, data: data, loading: false });
                }
            })

        }else if(nameCollection){ // si solo paso 1 propiedad, (quiero traer la coleccion)
            const _query = query(collection(db, nameCollection),...listFilters);
            // Cuando recuperes el documento, vas a hacer lo siguiente...
            getDocs(_query).then((snapshot) => { 
                const data = snapshot.docs.map(doc => { // snapshot.doc nos devuelve un arreglo pero con mas datos de los que necesito, entonces lo mapeamos para que traiga un nuevo array .data(), osea con los datos que necesitamo
                    const item = doc.data() // retorno la data del item, pero necesito el ID del doc (para detailProducView)
                    item['id'] = doc.id; // item en la posicion ID es el ID del documento (id de firebase)
                    return item; // Todo esto lo hacemos para no modificar todo el flujo de codigo 
                }); 
                setState({ ...state, data: data, loading: false }); // en el estado, guardamos el valor de la data y le decimos que ya no esta cargando la info (loading:false)
            })
        }

    }, [documentId, nameCollection, listFilters]); // cuando estos valores cambien, te vas a refrescar

    return [state.data, state.loading, state.response, state.error];
};

export default useFirestore;