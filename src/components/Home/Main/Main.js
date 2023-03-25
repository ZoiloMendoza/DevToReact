import React, { useState, useEffect } from "react";
import AsideRight from '../../Aside-right/Aside-right'
import AsideLeftZ from "../../AsideLeft/AsideLeftZ"
//import AsideLeft from "../../AsideLeft/AsideLeft";
import Card from "../../Card/Card";
import axios from "axios";


const Main = () =>{

    const [ post, setPost ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect( () => {
        const fetchedPost = async () => {
            const postResponse = await axios.get('http://localhost:5000/api/v1/posts')
            setPost(postResponse.data)
            setLoading(false)
        }
        fetchedPost()

    }, [])


    return (
        <main>
            <selection className='page-container container-xl d-flex justify-content-between'>
                <selection className='page__leftColumn'>{/**Columna 1 */}
                    <AsideLeftZ/>
                </selection>
                <selection className='page__centerColumn'>{/**Columna 2 */}
                  {loading ? <span>loading...</span> : post.map((item) => {return <Card props={item}/>})}
                </selection>
                <section className="page__rightColumn">{/**Columna 3 */}
                    <AsideRight/>
                </section>
            </selection>
        </main>
    )
}

export default Main;