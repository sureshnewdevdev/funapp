import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConditionalDisplay from './ConditionalDisplay'
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './Greet'
import ListProduct from './ListProduct'
import ProductList from './ProductList'
import Login from './Login'
import Parent from './Parent'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

{/* <div>
      <h1>Children Props Example</h1>
      <Publisher>
        <Subscriber name="Subscriber 1" />
        <Subscriber name="Subscriber 2" />
        <Subscriber name="Subscriber 3" />
      </Publisher>
    </div> */}
 
     {/* <SelectableList />
     <Parent></Parent> */}
      {/* <ListProduct></ListProduct> */}

    {/* <div>
      <h1>Product Listing</h1>
     <ProductList/>
    </div> */}


    <div>
      <Login></Login>
    </div>


      {/* <Greet></Greet>
      <ConditionalDisplay></ConditionalDisplay> */}
      {/* <ListProduct></ListProduct> */}
    </div>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
