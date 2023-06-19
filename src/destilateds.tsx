import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'
import { DestilatedsContainer } from './components/ProductsContainers/DestilatedsContainer/DestilatedsContainer'
import { PageSpinner } from './components/Spinner/Spinner'

function App() {
    const [loading, setLoading] = useState(true)
    if(loading) {
        setTimeout(() => {
            setLoading(false)
        }, 300)
        return <PageSpinner/>
    }

    return  (
        <>
        <Navbar/>
        <ProductsHeader imageUrl={"https://i.imgur.com/9POP9dN.jpg"} text={"Destilados & adoçados"} description={"Para drinks, ou para sozinho ser apreciado"} />
        <DestilatedsContainer/>
        <Footer/>
        </>
    )
}

//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)

