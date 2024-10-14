
import './App.css'
import ManageCounter from './counter-app/manage-counter'
import CounterValue from './counter-app/counter-value'
import Products from './products'

function App() {
  return (
  <div>
    <h1>React with zustand</h1>
    <ManageCounter/>
    <CounterValue/>
    <Products/>
  </div>
  )
}

export default App
