import { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from 'axios';
import './login.css';
import { useRef } from 'react';

const Login = () => {

    const formularioRef = useRef(null);
    const eventoResetFormulario = () => {
        formularioRef.current.reset()
    }

    const [contentForm, setcontentForm] = useState({});
    const [ready, setReady] = useState(false);
    //const [userArray, setUserArray] = useState([]);
    //crea el objeto
    const onFormInputChange=(event)=>{
        event.preventDefault();
        const inputID= event.target.name
        const inputValue=event.target.value
        setcontentForm({
          ...contentForm,
          [inputID]:inputValue
        })
      }

    //vvalida que este completo
    const newUserSumbit = (event) => {
        setReady(false)
        event.preventDefault();
        setReady(false)
        if(Object.values(contentForm).length !== 4){
            return alert('Completa el formulario')    
        }
        setReady(true)
        //console.log(Object.values(contentForm).length)
    }
    //metodo post
    useEffect(() => {
        //if(Object.values(contentForm).length <= 3){
        //    return console.log('objeto vacio')
        //}
        if(ready){
            const addUser = async () => {
                const userPost = await axios.post('http://localhost:5001/api/v1/users', contentForm);
               console.log('statusCode',userPost.status)
                if(userPost.status !==201){
                    console.log('error al insertar')
                }else{
                    console.log(userPost.statusText)
                    //const newAddUserPost = addUser.data;
                    //const listaUser = [newAddUserPost, ...userArray]
                    //setUserArray(listaUser)
                }
            }
            addUser()
            eventoResetFormulario();
        }
    }, [ready])


    //console.log('userArray',userArray,ready)
    return (
        <body>
        <Navbar/>    

    <section>
        c
    </section>
        <Footer/>
        </body>
    )

}

export default Login