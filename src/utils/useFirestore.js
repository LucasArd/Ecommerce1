
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const initialState = {
    response: {},
    error: {},
    data: [],
    loading: true,
};

const useFirestore = ({ nameCollection, documentId }) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        // Esta es la manera de obtener una coleccion
        const db = getFirestore(); // referencia a la base de datos (responde a ¿Donde tengo mi base de datos?, podemos usar getFirestore gracias a que hicimos la configuracion)
        const biciRef = collection(db, nameCollection) //  Ahora dime la coleccion que quieres recuperar de la base de datos (nameCollection), este nombre se lo vamos a pasar al hook al momento de su creacion

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
            // Cuando recuperes el documento, vas a hacer lo siguiente...
            getDocs(biciRef).then((snapshot) => { 
                const data = snapshot.docs.map(doc => { // snapshot.doc nos devuelve un arreglo pero con mas datos de los que necesito, entonces lo mapeamos para que traiga un nuevo array .data(), osea con los datos que necesitamo
                    const item = doc.data() // retorno la data del item, pero necesito el ID del doc (para detailProducView)
                    item['id'] = doc.id; // item en la posicion ID es el ID del documento (id de firebase)
                    return item; // Todo esto lo hacemos para no modificar todo el flujo de codigo 
                }); 
                setState({ ...state, data: data, loading: false }); // en el estado, guardamos el valor de la data y le decimos que ya no esta cargando la info (loading:false)
            })
        }

    }, [documentId, nameCollection]); // cuando estos valores cambien, te vas a refrescar

    return [state.data, state.loading, state.response, state.error];
};

export default useFirestore;