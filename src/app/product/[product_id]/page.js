"use client"
import { useEffect, useState } from "react";
const SingleProduct = ({ params: { product_id } }) => {
    const [data, setData] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [newStock, setNewStock] = useState(null);
    const handleUpdate = async () => {

    };
    const handleDelete = async () => {

    }
    useEffect(() => {
        const getSingleProduct = async () => {
            const res = await fetch(`http://localhost:3000/api/mongo/${product_id}`);
            const inf = await res.json();
            setData(inf);
            setNewStock(inf);
        }
        getSingleProduct()
    }, [product_id])
    return (
        <div class="bg-gray-500 min-h-screen flex items-center justify-center">
            {
                !data ? <h2>...Loading</h2> : <>
                    <div class="max-w-sm rounded overflow-hidden shadow-md bg-white">
                        <img class="w-full h-96" src={data.image} alt="Product Image" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{data.title}</div>
                            <p class="text-gray-700 text-base">
                                {data.brand}
                            </p>
                            <p class="text-gray-600 text-sm mt-2">
                                ₹399 <span class="line-through text-gray-400 ml-1">₹2,495</span>
                                <span class="text-green-500 text-sm ml-1">{data.discount}</span>
                            </p>
                        </div>
                        <div class="px-6 pb-4">
                            <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{!data.sttock ? "#InStock" : "#OutStock"}</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" onClick={() => setOpen(true)}>Edit</span>
                            <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" onClick={handleDelete}>Delete</span>
                        </div>
                    </div>
                    <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="fixed inset-0 bg-black opacity-50"></div>
                        <div className="fixed inset-0 flex justify-center items-center">
                            <div className="bg-white rounded p-4">
                                <h2 className="text-lg font-semibold mb-4">Update Stock</h2>
                                <div>
                                    <div>
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            value={newStock.title}
                                            onChange={(e) => setNewStock({ ...newStock,title: e.target.value })}
                                            className="border rounded p-2 mb-2 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label>Stock</label>
                                        <input
                                            type="number"
                                            value={newStock.stock}
                                            onChange={(e) => setNewStock({ ...newStock, stock: e.target.value })}
                                            className="border rounded p-2 mb-2 w-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        onClick={handleUpdate}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="px-4 py-2 ml-2 bg-gray-300 rounded hover:bg-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }


        </div>
    )
}

export default SingleProduct