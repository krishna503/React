import React from "react";
import ReactDOM from "react-dom";

//JSX
// Javascript element

const Heading = () =>   <img className="img" alt="logo" src="https://foodvilla.no/src/img/logo.png"></img>

const Head =() => (
<div className="Head">
<Heading />
<div className="Navitem">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
    </ul>
</div>
</div>
)

const Restaulist = 
[
    {
    type: "Restaurent",
   data:{img: "https://www.shutterstock.com/image-illustration/situbondo-indonesia-june-06-2023-260nw-2313601567.jpg",
     Name:"KFC",
     Cuisines:["Wings","lollipop"],
     Price:"250 for two",
     Rating: "4.5 Stars"}
    } ,
    {
     type:"Restaurent",
     data:
  {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHSySjzdkopvz3wyUDQKlq8DtANLLPN3wZA&usqp=CAU",
     Name:"Burger King",
     Cuisines:["Wings","lollipop"],
     Price:"250 for two",
     Rating: "4.5 Stars"}
    },
    {
     type:"Restaurent",
     data:
  {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-xy12M7uJSewVYTP1omsMyjTnteQJno_4Q&usqp=CAU",
     Name:"Paradise",
     Cuisines:["Wings","lollipop"],
     Price:"250 for two",
     Rating: "4.5 Stars"}
    },
    {
     type:"Restaurent",
  data:{img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUeBr3mRNTzWlA_rDMx8ZjXJxEcWKsMzdQw&usqp=CAU",
     Name:"Meghana Foods",
     Cuisines:["Wings"," lollipop"],
     Price:"250 for two",
     Rating: "4.5 Stars"}
    }
]

const Resturentcard = ({img,Name,Cuisines,Price,Rating}) =>{
    return(
    <div className="card">
    <img className="image" alt="kfc" src={img}/>
    <h3>{Name}</h3>
    <h3>{Cuisines}</h3>
    <h3>{Price}</h3>
    <h3>{Rating}</h3>
  </div>
)}
const Body =() =>
{
   
return(

    <div className="Restaurent-list">
        {
            Restaulist.map((Restaurent)=>
            {
                return    <Resturentcard {...Restaurent.data}/>
            }
            )
        }
    </div>

)
}

const Footer =() =>
(
<h2>footer</h2>
)
// Function or Component
const Applayout = () => (
    <>
    <Head />
    <Body />
    <Footer />
    </>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);

