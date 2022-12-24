import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "./cartslice";
import { Header } from "../header";


export const CartDetail=()=>{

    const dispatch = useDispatch();
    const product = useSelector((state)=> state.cart.cartContent);
    const subtotal = useSelector((state)=> state.cart.Subtotal);
    const auth = useSelector((state)=>state.auth)
    const handleRemove =(e)=>{
        const indProd = product.find((item) => item.id === e.id);
        dispatch(cartActions.removeFromCart({
            id:indProd.id,
            img:indProd.img,
            name:indProd.name,
            quantity: indProd.quantity,
            price: indProd.price,
            totalPrice:indProd.totalPrice
        }))
    }
        useEffect(()=>{
            var amount = 0;
            product.filter(prodamount=>{
                amount += prodamount.totalPrice;
                return amount
            })
            dispatch(cartActions.updateSubtotal({totalamount:amount}));
            dispatch(cartActions.setcartContent())
        },[product,dispatch])
    return(
       <>
            <Header/>
           { product.length !==0?
            <div className='container p-3'>
                <p className='fw-bold text-center mb-3 fs-4'>Shopping Cart</p>
                <div className="row p-2  fw-bold cartmainInfo">
                    <div className="col-md-6">
                        <p>Product</p>
                    </div>
                    <div className="col-md-2">
                        <p>Price</p>
                    </div>
                    <div className="col-md-2">
                        <p>Quantity</p>
                    </div>
                    <div className="col-md-2">
                        <p>Total Price</p>
                    </div>
                </div>
                <div className='row'>
                    {
                        product.map((prod,index)=>{
                            const {name,id,quantity,img,price,totalPrice} = prod;
                            return(
                                <div key={index} className='col-md-12'>
                                    <div className='row align-items-center'>
                                        
                                        <div className='col-md-6 p-4'>
                                            <div className='row align-items-center'>
                                                <div className='col-md-6'>
                                                    <img src={img} className="w-75 me-auto "alt='object not found'/>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p>{name}</p>
                                                    <button type="button" className="btn btn-primary btn btn-md" onClick={()=>handleRemove({id})}>Remove</button>
                                                </div>

                                            </div>
                                            
                                            
                                        </div>
                                        <div className='col-md-2 mb-1'>
                                            <span className='mobileView' >Price: </span><span>{price}</span>
                                        </div>
                                        <div className='col-md-2  mb-1'>
                                            <span className='mobileView' >Quantity: </span><span>{quantity}</span>
                                        </div>
                                        <div className='col-md-2'>
                                            <span className='mobileView' >Total Price: </span><span>{totalPrice}</span>
                                        </div>
                                    </div>

                                </div>
                                
                            )}
                        )
                    }

                </div>
                <div className="row p-2"  style={{float:'right'}}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className="col-md-6">
                                <p>Subtotal</p>

                            </div>
                            <div className="col-md-6">
                                <p>$ {subtotal}</p>
                            </div> 
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <p>Taxes and shopping calculated at the checkout</p>
                        {
                            auth._id?<button className='btn btn-primary btn-lg w-100 mb-2'>Check Out</button>:<Link className="btn btn-warning  btn-lg w-100 mb-2" to='/logInUser'>Log In To Check Out</Link>
                        }
                        
                        <p><Link to='/'>  Continue Shopping</Link></p>
                    </div>
                
                </div>
        </div>:null
       }{product.length ===0?
            <div className='row justify-content-center p-5'>
                <div className='col-md-12'>
                    <div  className=" m-auto mb-3 cartWidth">
                        <img className="w-100" src="https://jersix.com/wp-content/uploads/2020/10/Empty-pana-uai-516x387.png" alt="object not found"/>
                    </div>
                    
                    <p className='text-center'>Your Cart is empty!</p>
                    <p className='text-center'>Browse our categories and discover our best deals!</p>
                </div>
                <div className='col-md-2'>
                     <Link to='/' className="btn btn-md btn-success w-100">START SHOPPING</Link>

                </div>
            </div>
            :null 
            }
       </>
    )
}