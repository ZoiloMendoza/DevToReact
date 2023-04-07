import React, { useState, useEffect} from "react";
import AsideRight from '../../Aside-right/Aside-right';
import AsideLeftZ from "../../AsideLeft/AsideLeftZ";
import axios from 'axios';
import Card from '../../Card/Card'
import { WsSkeleton } from "../../SkeletonCard/SkeletonCard";

const Main = () => {
   
    const numPostsToLoad = 5;
    const [ posts, setPosts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
   
   
    useEffect( () => { 
        setLoading(true)
        const fetchedPost = async () => {
            try {
                const postResponse = await axios.get('http://localhost:5001/api/v1/posts')
                setPosts(postResponse.data.reverse())
                setLoading(false)
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchedPost()
    }, []);
    
    return (
        <main>
            <selection className='page-container container-xl d-flex justify-content-between'>
                <selection className='page__leftColumn'>
                    <AsideLeftZ/>
                </selection>
                <selection className='page__centerColumn'>
                  {loading ? <WsSkeleton numPostsToLoad={numPostsToLoad} /> : posts.map((post, index) => { 
                      
                      return <Card key={post._id} props={post} index={index}/>
                      } 
                    )}
                </selection>
                <selection className="page__rightColumn">
                    <AsideRight/>
                </selection>
            </selection>
        </main>
    )
}

export default Main;