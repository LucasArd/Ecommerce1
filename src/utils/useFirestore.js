import React from 'react';

import {collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import {useEffect, useState} from 'react';

const initialState ={
    response: {},
    error: {},
    data: [],
    loading: true,
};

const useFirestore = ({nameCollection, documentId}) => {
    const [state, setState ] = useState(initialState);

    useEffect(() =>{
        const db = getFirestore(); // referencia a la base de datos (responde a ¿Donde tengo mi base de datos?, podemos usar getFirestore gracias a que hicimos la configuracion)
        const biciRef = collection(db, nameCollection ) //  Ahora dime la coleccion que quieres recuperar de la base de datos (nameCollection), este nombre se lo vamos a pasar al hook al momento de su creacion
        getDocs(biciRef).then((snapshot) => { // Cuando recuperes el documento, vas a hacer lo siguiente...
            const data = snapshot.docs.map(doc => doc.data()); // snapshot.doc nos devuelve un arreglo pero con mas datos de los que necesito, entonces lo mapeamos para que traiga un nuevo array .data(), osea con los datos que necesitamo
            setState({...state, data:data,loading:false}); // en el estado, guardamos el valor de la data y le decimos que ya no esta cargando la info (loading:false)
        })

    }, [documentId, nameCollection]); // cuando estos valores cambien, te vas a refrescar

    return [state.data, state.loading, state.response, state.error];
};

export default useFirestore;