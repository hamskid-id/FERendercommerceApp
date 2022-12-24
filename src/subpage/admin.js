import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Header } from './header';
import { productsCreate } from './store/productSlice';
export const AdminPage =()=>{


    const dispatch = useDispatch()
    const [productImg, setproductImg]= useState("");
    const [name, setName]= useState("");
    const [brand, setBrand]= useState("");
    const [amount, setAmount]= useState("");
    const [price, setPrice]= useState("");


    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(productsCreate({
            name:name,
            brand:brand,
            amount:amount,
            price:price,
            image:productImg
        }
        ))
        setName('')
        setBrand('')
        setAmount('')
        setPrice('')
    }
    const handleImageUpload = (e)=>{
        const file = e.target.files[0]
        TransformFile(file)
    }

    const TransformFile = (file)=>{
       const reader = new FileReader()
       if(file){
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
            setproductImg(reader.result)
        }
       }
    }
    return(
        <>
        <Header/>
        <div className='container p-5 border'>
            <p className='fs-5 mb-5'>Products</p>
            <div className='row'>
                <div className='col-md-6  p-3'>
                    <p className='fs-5 fw-bold'>Create a product</p>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-md-12'>
                            <input className='border p-2 my-2 inpw-50' name='image' type="file" accept='image/' onChange={handleImageUpload}/>
                            </div>
                            <div className='col-md-12'>
                                <select className='border p-2 my-2 inpw-50' name="brand" id="product" onChange={(e)=>setBrand(e.target.value)}>
                                    <option value="Brand 1">Bran 1</option>
                                    <option value="Brand 2">Brand 2</option>
                                    <option value="Brand 3">Brand 3</option>
                                    <option value="Brand 4">Brand 4</option>
                                </select>
                            </div>
                            <div className='col-md-12'>
                                <input name='name' className='border p-2 my-2 inpw-50' type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className='col-md-12'>
                                <input name='price' className='border p-2 my-2 inpw-50' type="number" placeholder='price'  onChange={(e)=>setPrice(e.target.value)}/>
                            </div>
                            <div className='col-md-12'>
                            <input name='amount' className='border p-2 my-2 inpw-50' type="number" placeholder='amount'  onChange={(e)=>setAmount(e.target.value)}/>
                            </div>
                            <div className='col-md-12'>
                            <button className='btn btn-primary btn-md mb-5'>+ Create</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div className='col-md-6 mb-5'>
                    
                    <div className='inpw-50 border h-75 py-5 px-2'>
                       {productImg?<img className='w-100' src={productImg}/>:<p>image preview will appear here</p>} 
                    </div>
                    <Link to='/' className='btn btn-primary btn-md mb-5 mt-2'>Back to Home</Link>

                </div>

            </div>
            
        </div>
        </>
    )
}