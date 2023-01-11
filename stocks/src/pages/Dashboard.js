import { Link } from "react-router-dom"
import stocks from '../data'


const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>All Stocks</h1>
      {stocks.map((singleStock) => {
        const { name, symbol, lastPrice, change} = singleStock
        return (
          <Link to={`/stocks/${symbol}`}>
            <h2>{name}({symbol}){lastPrice} {change}   </h2>
          </Link>
        )
      })}
    </div>
  )
}
export default Dashboard
