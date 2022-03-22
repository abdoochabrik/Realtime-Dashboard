import React from 'react'
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import './main.css'
import usa from '../assets/usa.png'
import france from '../assets/france.png'
import uk from '../assets/uk.jpg'
import sa from '../assets/sa.png'
import germany from '../assets/german.jpg'
import Logo from '../assets/logo.png'
export default function main() {
  return (
    <div className='container'>
        <div className='container3'>
        <img src={Logo} className="image2"/>
        <h4>Realtime Dashboard</h4>
        </div>
        <div className='container1'>
            
            <div className='container2'>
                <img src={france} className="image"/>
                <p className='country'>france</p>
            </div>
            <div className='container2'>
                <img src={sa} className="image"/>
                <p className='country'>Saudi arabia</p>
            </div>
            <div className='container2'>
                <img src={uk} className="image" />
                <p className='country'>united kingkdom</p>
            </div >
            <div className='container2'>
                <img src={usa} className="image"/>
                <p className='country'>USA</p>
            </div >
            <div className='container2'>
                <img src={germany} className="image"/>
                <p className='country'>allemagne</p>
            </div>
           
            
        </div>
    </div>
  )
}
