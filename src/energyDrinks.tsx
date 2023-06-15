import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'
import { EnergyDrinksContainer } from './components/ProductsContainers/EnergyDrinksContainer/EnergyDrinksContainer'



//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar/>
        <ProductsHeader imageUrl={"https://i.imgur.com/gedrHlg.jpg"} text={"Energize-se"} description={"A melhor fonte de energia, você encontra aqui!"} />
        <EnergyDrinksContainer/>
        <Footer/>
    </React.StrictMode>,
)

