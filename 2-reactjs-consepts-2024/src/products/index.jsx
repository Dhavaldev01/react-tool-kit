import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";
// import './components/style.css'

function ProductList({ name, city, ListOfProductData }) {
  // console.log(props)
  // const {name , city} = props;
  // const flag = true;
  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);
  const [changeCountStyle, setChangeCountStyle] = useState(false);

  // function renderTextBlock(getFlag) {
  //   return getFlag ? (
  //     <h4>
  //       Name is {name} he/She s belongs to the city {city}{" "}
  //     </h4>
  //   ) : (
  //     <h4>Hello World</h4>
  //   );
  // }

  function handleToggleText() {
    setFlag(!flag);
  }

  useEffect(()=>{
    setFlag(!flag);
    // console.log("run Only one page Load");
    
  },[]);

  useEffect(()=>{
    // console.log("count Changes");
    if(count === 10) setChangeCountStyle(true);
  } ,[count])
// console.log(changeCountStyle)
  function handleIncreCount(){
    setCount(count + 1);
  }

  const renderTextBlock = flag ? (
    <h4>
      Name is {name} he/She s belongs to the city {city}{" "}
    </h4>
  ) : (
    <h4>Hello World</h4>
  );

  return (
    <div>
      <h3 className="title">Ecomerce Project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>
      {/* <ProductItem/> */}
      {/* {flag ? (
        <h4>
          Name is {name} he/She s belongs to the city {city}
        </h4>
      ) : (
        <h4>Hello World</h4>
      )} */}
      {/* {
        renderTextBlock(flag)
      } */}
      {/* {renderTextBlock} */}
      {
        flag ? <h4>{name} and {city}</h4> : <h4>Hello</h4>
      }
      <div>
        <p>Count is {count}</p>
        <button 
        style={{backgroundColor : changeCountStyle ? "black" : "white" , color : changeCountStyle ? "white" : "black"}}
        onClick={handleIncreCount}
        >Increse Count</button>
      </div>
      {
        <ul>
          {ListOfProductData.map((item, index) => (
            // <li key={index}>{item}</li>
            <ProductItem singleProductItem={item} key={index} />
          ))}
        </ul>
      }
    </div>
  );
}

export default ProductList;
