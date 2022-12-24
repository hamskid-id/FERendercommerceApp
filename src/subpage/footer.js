import React from "react";
export const Footer = ()=>{
    return(
        <div className='container-Fliud'>
            <div className='container-fluid text-white py-5 foot' style={{background:'dimgrey'}}>
                <div className='row'>
                   
                    <div className="col-md-6">
                        <div className='row justify-content-center'>
                            <div className='col-md-12 py-3'>
                                <p className='fw-bold display-5 text-center'>NEW TO LAWREX?</p>
                                <h6 className="text-center" > Subscribe to our news letter to get the latest updates from larex</h6>
                                <form className="d-flex flex-row align-items-center justify-content-center">
                                    <input className='rounded border border-white w-100 p-1 mb-0' type='text' placeholder=" Enter your email address"/>
                                    <button className='btn  btn-sm fs-6 p-1 ms-0 mt-0 text-white' type="button" style={{background:'darkslategrey'}}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  py-3">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                 <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="fw-bold text-center">DOWNLOAD LAWREX FREE APP</h6>  
                                        <p style={{fontSize:'14px'}} className="text-center">Get Access to exclusive offer</p>
                                    </div>
                            </div>
                            <div className="col-md-12">
                                <span className="d-flex flex-row justify-content-center">
                                    <div>
                                        <button type='button' className="text-white rounded border border-white playbtn" style={{background:'black'}}>
                                                <div className='d-flex flex-row' style={{paddingTop:'2px'}}>
                                                    <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-apple" viewBox="0 0 16 16">
                                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                                                    </svg>
                                                    </div>
                                                    <div className=" m-auto">
                                                        <p style={{fontSize:'8px'}} className=' my-0 py-0'>Download on</p>
                                                        <p style={{fontSize:'9px'}} className=' my-0 py-0'>App store</p>
                                                    </div>
                                                </div> 
                                        </button>
                                    </div>
                                    <div>
                                        <button type='button' className="text-white rounded border border-white playbtn" style={{background:'black'}}>
                                                <div className='d-flex flex-row' style={{paddingTop:'2px'}}>
                                                    <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-apple" viewBox="0 0 16 16">
                                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                                                    </svg>
                                                    </div>
                                                    <div>
                                                        <p style={{fontSize:'8px'}} className=' my-0 py-0'>Download on</p>
                                                        <p style={{fontSize:'9px'}} className=' my-0 py-0'>Google store</p>
                                                    </div>
                                                </div> 
                                        </button>
                                    </div>
                                </span> 
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}