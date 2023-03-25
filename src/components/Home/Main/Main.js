import React from "react";
import AsideRight from '../../Aside-right/Aside-right'
import AsideLeftZ from "../../AsideLeft/AsideLeftZ"
//import AsideLeft from "../../AsideLeft/AsideLeft";



const Main = () =>{

    return (
        <main>
            <selection className='page-container container-xl d-flex justify-content-between'>
                <selection className='page__leftColumn'>{/**Columna 1 */}
                    <AsideLeftZ/>
                </selection>
                <selection className='page__centerColumn'>{/**Columna 2 */}
                
                </selection>
                <section className="page__rightColumn">{/**Columna 3 */}
                    <AsideRight/>
                </section>
            </selection>
        </main>
    )
}

export default Main;