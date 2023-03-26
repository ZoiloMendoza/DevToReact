import React, { useState, useEffect } from "react";
import AsideRight from '../../Aside-right/Aside-right';
import AsideLeftZ from "../../AsideLeft/AsideLeftZ";
//import AsideLeft from "../../AsideLeft/AsideLeft";
import axios from 'axios';
import Card from '../../Card/Card'
import { WsSkeleton } from "../../SkeletonCard/SkeletonCard";

const Main = () => {

    const [ posts, setPosts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    

    //OBTIENE TODOS LOS POST DE LA API(LA API SE CONECTA CON MONGO)
    useEffect( () => { 
        setLoading(true)
        const fetchedPost = async () => {
            const postResponse = await axios.get('http://localhost:5000/api/v1/posts')
            setPosts(postResponse.data)
            setLoading(false)
        }
        fetchedPost()

    }, [])


console.log({posts})

    const numberOf = 5;

    return (
        <main>
            <selection className='page-container container-xl d-flex justify-content-between'>
                <selection className='page__leftColumn'>{/**Columna 1 */}
                    <AsideLeftZ/>
                </selection>
                <selection className='page__centerColumn'>{/**Columna 2 */}
                {loading ? <WsSkeleton numberOf={numberOf}/> : posts.map((post) => { 
                        return < Card key={post._id} props={post} />
                      }
                  )}
                </selection>
                <section className="page__rightColumn">{/**Columna 3 */}
                    <AsideRight/>
                </section>
            </selection>
        </main>
    )
}

export default Main;