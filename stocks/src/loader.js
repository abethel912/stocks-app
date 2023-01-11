import stocks from './data'

export const stockLoader = ({ params }) => {
  const symbol= params.symbol
  const stockData = stocks.find(element => element.symbol === symbol)
      return (stockData)
  
}