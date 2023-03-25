import React, { useState, useEffect } from "react";
import AsideRight from '../../Aside-right/Aside-right';
import AsideLeftZ from "../../AsideLeft/AsideLeftZ";
//import AsideLeft from "../../AsideLeft/AsideLeft";
import axios from 'axios';
import Card from '../../Card/Card'

const Main = () => {

    const [ posts, setPosts ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const [users, setUsers] = useState([])

    useEffect( () => {
        const fetchedPost = async () => {
            const postResponse = await axios.get('http://localhost:5000/api/v1/posts')
            setPosts(postResponse.data)
            setLoading(false)
        }
        fetchedPost()

    }, [])

    useEffect(() => {
        const fetchedUser = async () => {
            const userResponse = await axios.get('http://localhost:5000/api/v1/users')
            setUsers(userResponse);
        }
        fetchedUser()
    }, [])
    console.log(users)


    return (
        <main>
            <selection className='page-container container-xl d-flex justify-content-between'>
                <selection className='page__leftColumn'>{/**Columna 1 */}
                    <AsideLeftZ/>
                </selection>
                <selection className='page__centerColumn'>{/**Columna 2 */}
                  {loading ? <span>loading...</span> : posts.map((item) => {return <Card props={item}/>})}
                </selection>
                <section className="page__rightColumn">{/**Columna 3 */}
                    <AsideRight/>
                </section>
            </selection>
        </main>
    )
}

export default Main;