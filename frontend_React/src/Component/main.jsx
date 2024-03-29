import React from 'react'
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
import {io} from 'socket.io-client';
import Gare from './Gare'

export default function main() {
    const percentage = 66;
    const date = new Date().toISOString().substring(0,10);
    const [GareDepart, setGareDepart] = React.useState("Paris");

    const gare_départ = [
        {id:1, départ: "Paris", flag:france},
        {id:2, départ: "Arriyad", flag:sa},
        {id:3, départ: "Washington", flag:usa},
        {id:4, départ: "Berlin", flag:germany},
        {id:5, départ: "London", flag:uk},
        {id:6, départ: "London", flag:uk},
        {id:7, départ: "London", flag:uk},
        {id:8, départ: "London", flag:uk}
    ]


    const TableData = [
      {depart: GareDepart, arrivee: "London", date: "12/9/2022", statut: "en retard", retard: "9"},
      {depart: GareDepart, arrivee: "Munich", date: "16/9/2022", statut: "non", retard: "9"},
      {depart: GareDepart, arrivee: "Abu dabi", date: "10/9/2022", statut: "non", retard: "9"},
      {depart: GareDepart, arrivee: "arriyad", date: "14/9/2022", statut: "en retard", retard: "9"},
      {depart: GareDepart, arrivee: "moscow", date: "6/9/2022", statut: "en retard", retard: "9"},
      {depart: GareDepart, arrivee: "Madrid", date: "22/9/2022", statut: "non", retard: "9"},
      {depart: GareDepart, arrivee: "Marseille", date: "9/9/2022", statut: "en retard", retard: "9"},
      {depart: GareDepart, arrivee: "Marseille", date: "9/9/2022", statut: "en retard", retard: "9"},
      {depart: GareDepart, arrivee: "Barcelone", date: "11/9/2022", statut: "non", retard: "9"},
      {depart: GareDepart, arrivee: "Rabat", date: "30/9/2022", statut: "en retard", retard: "9"},
      {depart: GareDepart, arrivee: "Pékin", date: "4/9/2022", statut: "en retard", retard: "9"},
    ];

    /*const socket = io('http://localhost:8082/user')
    socket.on("connect", () => {
        console.log('connected')
    })*/
    return (
     <div className='containerGlobal'>
    <div className='container'>
        <div className='container3' >
        <img src={Logo} className="image2"/>
        <h4>Realtime Dashboard</h4>
        </div>
        <div className='container1'>
           {
                gare_départ.map(gare => (
                  <div onClick={() => setGareDepart(gare.départ)}> 
                  <Gare  {...gare}/>
                  </div> 
               ))
           } 
             
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
               <label>vols en retard</label>
               <p>42 vols</p>
               </div>
               <div  style={{ width: 100, height: 100, marginLeft:70 }}>
               <CircularProgressbar styles={buildStyles({  pathColor: 'red', })} value={percentage} text={`${percentage}%`} />
               </div>
           </div>
           <label>retard ~~ 10 minutes</label>
       </div>
       <div className='box'>
           <div className='labeldiv2'>
           </div>
           <div className='boxDiv1'>
               <div >
               <label>vols en retard</label>
               <p>80 vols</p>
               </div>
               <div  style={{ width: 100, height: 100, marginLeft:70 }}>
               <CircularProgressbar styles={buildStyles({  pathColor:'orange', })} value={percentage} text={`${percentage}%`} />
               </div>
           </div>
           <label>retard ~~ 5 minutes</label>
       </div>
       <div className='box'>
           <div className='labeldiv3'>
           </div>
           <div className='boxDiv1'>
               <div >
               <label>vols en retard</label>
               <p>64</p>
               </div>
               <div  style={{ width: 100, height: 100, marginLeft:70 }}>
               <CircularProgressbar styles={buildStyles({  pathColor: 'green', })} value={percentage} text={`${percentage}%`} />
               </div>
           </div>
           <label>retard ~~ 2 minutes</label>
       </div>
     { /* <div>
       <FlightsDetails />
  </div> */ }
       </div>
       <div className='box2'>
       <h4>Détails des vols pour {GareDepart}</h4>
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
