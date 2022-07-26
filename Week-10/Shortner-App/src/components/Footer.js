import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/Footer.css'

const Footer = () =>{
    return(
        <>
            <footer>
                <div className="footer-container">
                    <div className="features">
                            <ul>
                                <li><NavLink to='/'  className='fi'>Features</NavLink></li>
                                <li><NavLink to='/'  className='fi'>Branded Links</NavLink></li>
                                <li><NavLink to='/'  className='fi'>Link Shrinking</NavLink></li>
                                <li><NavLink to='/'  className='fi'>Analytics</NavLink></li>

                            </ul>
        
                    </div>

                    <div className="resources">
                            <ul>
                                <li><NavLink to='/'  className='fi'>Resources</NavLink></li>
                                <li><NavLink to='/'  className='fi'>Blog</NavLink></li>
                                <li><NavLink to='/'  className='fi'>Developers</NavLink></li>
                                <li><NavLink to='/'  className='fi'>Support</NavLink></li>

                            </ul>
                    </div>

                    <div className="company">
                            <ul>
                                <li><NavLink to='/'  className='fi'>Company</NavLink></li>
                                <li><NavLink to='/about'  className='fi'>About</NavLink></li>
                                <li><NavLink to='/'  className='fi'>Our Team</NavLink></li>
                                <li><NavLink to='/'  className='fi'>Careers</NavLink></li>
                                <li><NavLink to='/'  className='fi'>Contact</NavLink></li>

                            </ul>
                    </div>



                </div>
            </footer>
         
        </>
    )
}

export default Footer