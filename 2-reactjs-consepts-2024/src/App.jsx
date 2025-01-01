import ClassBasedComponent from "./components/class-based-component"
import ContextButtonCoponent from "./components/context-concept/button";
import ContextTextCoponent from "./components/context-concept/text";
import FunctionComponents from "./components/function-component"
import UseReducerExample from "./components/use-reducer-example";
import Users from "./components/users";
import FormComponent from "./form";
import ProductList from "./products"


const dummyProductData = ["product1", "product2", "product3"];

function App() {
  // const [count, setCount] = useState(0)

  return (
  <div>
    <h1>React Js Concepts 2024</h1>
    {/* <ClassBasedComponent/> */}
    {/* <FunctionComponents/> */}
    {/* <ProductList ListOfProductData={dummyProductData} name="Dhaval" city="surat"/> */}
    {/* <Users/> */}
    {/* <ContextButtonCoponent/> */}
    {/* <ContextTextCoponent/> */}
    {/* <UseReducerExample/> */}
    <FormComponent/>
  </div>
  )
}

export default App
