"use client"
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation"
const StockList = () => {
  const [stocks,setStocks]=useState([]);
  const router=useRouter()
  useEffect(()=>{
    const fetcher=async()=>{
      const res=await fetch("http://localhost:3000/api/mongo")
      const data=await res.json(); 
      setStocks(data)
    }
    fetcher()
  },[])
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Stock List</h2>
      {!stocks.length?<h2>...Loading</h2>:<table className="w-full mt-2 border-collapse border border-gray-400 text-center">
        <thead>
          <tr className="bg-gray-200">
          <th className="p-2">Sl No.</th>
            <th className="p-2">Stock Name</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
            <th className="p-2">actualPrice</th>
            <th className="p-2">discount</th>

          </tr>
        </thead>
        <tbody>
          {stocks?.map((stock,i) => (
            <tr key={i} className="border-t border-gray-400" onClick={()=>router.push(`product/${stock._id}`)}>
              <td className="p-2">{i+1}</td>
              <td className="p-2">{stock.title}</td>
              <td className="p-2">{stock.stock}</td>
              <td className="p-2">{stock.price}</td>
              <td className="p-2">{stock.actualPrice}</td>
              <td className="p-2">{stock.discount}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
};

export default StockList;