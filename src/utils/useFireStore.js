
import { collection, doc, getDoc, getDocs, getFirestore, where, limit, query } from 'firebase/firestore';
import { useEffect, useState, useMemo } from 'react';

const initialState = {
    response: {},
    error: {},
    data: [],
    loading: true,
};

const filterFunctions = { where, limit}; 

const useFirestore = ({ nameCollection, documentId, filters }) => {
    const [state, setState] = useState(initialState);

    const listFilters = useMemo(() => {
        return Object.keys(filters || {}).map(key =>{
            const filter = filterFunctions[key];
            const [field, operator, value ] = filters[key];
            return filter(field, operator, value) 
        })
    }, [filters]);

    useEffect(() => {
        const db = getFirestore(); 
        if (nameCollection && documentId) { 
            getDoc(doc(db, nameCollection, documentId)).then((snapshot) => { 
                if (snapshot.exists()) { 
                    const data = snapshot.data(); 
                    setState({ ...state, data: data, loading: false });
                }
            })

        }else if(nameCollection){ 
            const _query = query(collection(db, nameCollection),...listFilters);
            
            getDocs(_query).then((snapshot) => { 
                const data = snapshot.docs.map(doc => { 
                    const item = doc.data() 
                    item['id'] = doc.id; 
                    return item; 
                }); 
                setState({ ...state, data: data, loading: false }); 
            })
        }

    }, [documentId, nameCollection, listFilters]); 
    return [state.data, state.loading, state.response, state.error];
};

export default useFirestore;
