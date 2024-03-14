import React from 'react';
import ReactDOM  from 'react-dom';

const Heading =  <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WWyr1Bo0GrohgOzpbLeAGHcysfLFYgAXEg&usqp=CAU'></img>

const Head = ()=>{
    return (
    <div className='head'>
        {Heading}
      
        <div className='list'>
        <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Help</li>
        </ul>
        </div>
       
    </div>
    )
}
 const Rastaulist =  [
        {
    type:"Restaurent",
    data:{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjQxRreOUVNjulD5dsi_BKprXOUYAj-buoA&usqp=CAU",
        Name:"KFC",
        Cusines:["wings","popcorn"],
        Address:"188/9 Amruthakani Nilya,somweswara layout,billekhalli"
    }
        },
        {
        type:"Restaurent",
        data:{
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5VWpkR62aW-lOZAxFsUuKG6x5cTRQs9KxA&usqp=CAU",
            Name:"Burger King",
            Cusines:["Drinks","Burger"],
            Address:"188/9 Amruthakani Nilya,somweswara layout,billekhalli"
        }
    }, {
        type:"Restaurent",
        data:{
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5VWpkR62aW-lOZAxFsUuKG6x5cTRQs9KxA&usqp=CAU",
            Name:"Burger King",
            Cusines:["Drinks","Burger"],
            Address:"188/9 Amruthakani Nilya,somweswara layout,billekhalli"
        }
    }, {
        type:"Restaurent",
        data:{
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5VWpkR62aW-lOZAxFsUuKG6x5cTRQs9KxA&usqp=CAU",
            Name:"Burger King",
            Cusines:["Drinks","Burger"],
            Address:"188/9 Amruthakani Nilya,somweswara layout,billekhalli"
        }
    }

] 
 
const Cards =({img,Name,Cusines,Address})=>{
    return(
    <div className="Nav-item">
    <img className='Restimg'src={img} />
    <h2>{Name}</h2>
    <h3>{Cusines}</h3>
    <h3>{Address}</h3>
    </div>
    )
}
 
const Body = () =>{
return(
    <div className="map">
        {
    Rastaulist.map((Restaurent) =>
    {
       return <Cards {...Restaurent.data} />
    }
      )}
    </div>
)
}
const Footer = () =>{
    <h2>Footer</h2>
}

const Applayout = ()=>{
    return (
    <>
    <Head />
    <Body />
    <Footer />
    </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)