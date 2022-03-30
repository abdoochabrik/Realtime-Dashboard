import React from 'react'
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import './main.css'
import usa from '../assets/usa.png'
import france from '../assets/france.png'
import uk from '../assets/uk.jpg'
import sa from '../assets/sa.png'
import germany from '../assets/german.jpg'
import Logo from '../assets/flight.jpg'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import FlightsDetails from './FlightsDetails';
import RightCurve from './RightCurve';
import Table from './Table';

export default function main() {
    const percentage = 66;
    const date = new Date().toISOString().substring(0,10);
    const TableData = [
      {depart: "hhh", arrivee: "mmm", date: "ddd", statut: "llll", retard: "9"},
      {depart: "hhh", arrivee: "mmm", date: "ddd", statut: "llll", retard: "9"},
      {depart: "hhh", arrivee: "mmm", date: "ddd", statut: "llll", retard: "9"},
      {depart: "hhh", arrivee: "mmm", date: "ddd", statut: "llll", retard: "9"},
      {depart: "hhh", arrivee: "mmm", date: "ddd", statut: "llll", retard: "9"},
      {depart: "hhh", arrivee: "mmm", date: "ddd", statut: "llll", retard: "9"},
      {depart: "hhh", arrivee: "mmm", date: "ddd", statut: "llll", retard: "9"},
      {depart: "hhh", arrivee: "mmm", date: "ddd", statut: "llll", retard: "9"},
      {depart: "hhh", arrivee: "mmm", date: "ddd", statut: "llll", retard: "9"},
      {depart: "hhh", arrivee: "mmm", date: "ddd", statut: "llll", retard: "9"},
    ]
  return (
     <div className='containerGlobal'>
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
    <div className='container4'>
       <label className='date'>{date}</label>
       <div className='container5'>
     
       <div className='box'>
           <div className='labeldiv1'>
           </div>
           <div className='boxDiv1'>
               <div >
               <label>Total soldes</label>
               <p>$25,042</p>
               </div>
               <div  style={{ width: 100, height: 100, marginLeft:70 }}>
               <CircularProgressbar styles={buildStyles({  pathColor: 'red', })} value={percentage} text={`${percentage}%`} />
               </div>
           </div>
           <label>last one</label>
       </div>
       <div className='box'>
           <div className='labeldiv2'>
           </div>
           <div className='boxDiv1'>
               <div >
               <label>Total soldes</label>
               <p>$25,042</p>
               </div>
               <div  style={{ width: 100, height: 100, marginLeft:70 }}>
               <CircularProgressbar styles={buildStyles({  pathColor:'orange', })} value={percentage} text={`${percentage}%`} />
               </div>
           </div>
           <label>last one</label>
       </div>
       <div className='box'>
           <div className='labeldiv3'>
           </div>
           <div className='boxDiv1'>
               <div >
               <label>Total soldes</label>
               <p>$25,042</p>
               </div>
               <div  style={{ width: 100, height: 100, marginLeft:70 }}>
               <CircularProgressbar styles={buildStyles({  pathColor: 'green', })} value={percentage} text={`${percentage}%`} />
               </div>
           </div>
           <label>last one</label>
       </div>
     { /* <div>
       <FlightsDetails />
  </div> */ }
       </div>
       <div className='box2'>
       <h4>Flights Details</h4>
       <RightCurve />
       </div>

    </div>

    <div className='sideContainer'>
    <table className='table'>
    <tr  className='tr'>
    <th  className='th'>Gare de départ</th>
    <th className='th'>Gare d'arrivé</th>
    <th className='th'>Date de départ</th>
    <th className='th'>statut</th>
    <th className='th'>temps de retard</th>
  </tr>
  <tbody>
  {  TableData.map(o => (
    <Table {...o} />
  )) }
 </tbody>
 
</table>
    </div>
    </div> 
  )
}
