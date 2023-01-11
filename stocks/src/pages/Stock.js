import stocks from '../data'
import {useLoaderData} from "react-router-dom"
import '../App.css'

const Stock = (props) => {
  
  const stocks = useLoaderData()

  return (
    <div>
      <h1>{stocks.name}</h1>
      <h2>({stocks.symbol})</h2>
      <p>
        <span className="boldText">Last Price:</span> ${stocks.lastPrice}
      </p>
      <p>
        <span className="boldText">Change:</span> ${stocks.change}
      </p>
      <p>
        <span className="boldText">Highest Price:</span> ${stocks.high}
      </p>
      <p>
        <span className="boldText">Lowest Price:</span> ${stocks.low}
      </p>
      <p>
        <span className="boldText">Opened At:</span> ${stocks.open}
      </p>
    </div>
  )
}

export default Stock
