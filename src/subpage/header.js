import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import { cartActions } from './store/cartslice';
import { LogOutUser } from './store/authslice';
import { toast } from 'react-toastify';
export const Header =()=>{
  
  const dispatch = useDispatch();
    const product = useSelector((state)=>state.cart.cartContent);
    const auth = useSelector((state)=>state.auth)

    useEffect(()=>{
      dispatch(cartActions.setcartContent())
    },[product,dispatch])
 

    return(
      <div>
        <nav className="navbar navbar-expand-lg  navBg py-0 firstNavPx" style={{color:'darkblue'}}>
          <div className="container-fluid ">
            <p className="navbar-brand snav text-darkt ">sell on lawrex </p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
              <ul className="navbar-nav snav">
                <li className="nav-item">
                  <a className="nav-link active text-dark" aria-current="page" href="#">Top Sales</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Electronics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Fashion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Edibles</a>
                </li>
              </ul>
            </div>
           
          </div>
        </nav>
        
      <nav className="navbar navbar-expand-lg navbar-light border border-bottom secondNav">
              <div className="container-fluid navPad">
                <div className="navbar-brand fw-bold fs-3 law">Law<span className='rex'>Rex</span> </div>
                <Link to='/cartpage' style={{textDecoration:'none'}} className="nav-link text-dark mobile-cart">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg> Cart
                          {product.length!==0?<p style={{position:'absolute',top:'0'}}className='bg bg-danger text-light rounded px-1'>{product.length}</p>:null}
                </Link>
                <button className="navbar-toggler handBurger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-center" id="navbarSupportedContent">
                    <form className="d-flex formWidth ">
                      <input className="form-control formbg burger-input" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn ms-2 burger-input" type="submit" style={{background:"darkslategrey"}}>Search</button>
                    </form>
                  <ul className="navbar-nav headList  mb-2 mb-lg-0  ">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                      </svg> Account
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                       <Link to='/registerUser' className="dropdown-item" href="#">Sign In</Link>
                        <li><a className="dropdown-item" href="#">My Account</a></li>
                        <li><a className="dropdown-item" href="#">Saved Items</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                      </svg> Help
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Help Center</a></li>
                        <li><a className="dropdown-item" href="#">Place and track order</a></li>
                        <li><a className="dropdown-item" href="#">Order Cancellation</a></li>
                        <li><a className="dropdown-item" href="#">Return and Refunds</a></li>
                      </ul>
                    </li>
                   
                    <li className="nav-item burger-cart" style={{position:'relative'}}>
                      <Link to='/cartpage' style={{textDecoration:'none'}} className="nav-link text-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg> Cart
                          {product.length!==0?<p style={{position:'absolute',top:'0'}}className='bg bg-danger text-light rounded px-1'>{product.length}</p>:null}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/Adminpage' style={{textDecoration:'none'}} className="nav-link text-none"> Admin</Link>
                    </li>
                    
                  </ul>
                  <div className='log'>
                      {
                        auth._id?  <button className='btn btn-primary btn-sm me-auto'onClick={()=>{
                          dispatch(LogOutUser(null));
                          toast.warning('Logged Out',{
                            position:"bottom-left",
                           })
                        }}>log Out</button>:<Link className='btn btn-primary btn-sm me-auto' to='/logInUser'>log In</Link>
                      }
                </div>
                </div>
                
          </div>
      </nav>
        <div className="mobile-input">
            <form className="d-flex">
                <input className="form-control formbg" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn mobile-input-button text-white" style={{background:"darkslategrey"}} type="submit">Search</button>
            </form>
        </div>
        
      </div>
            
    )
}