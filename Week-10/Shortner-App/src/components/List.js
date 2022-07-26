import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/ListStyle.css';

const List = () =>{
    return (
    <>
        <header>
                <div className="container container-flex">
                <div>
                    <NavLink to='/' className="heading">Shortly</NavLink>
                </div>
            <nav>
                <div className="list">
                    <NavLink to='/' className='list-item'  activeClassName='activeItem'>Home</NavLink>
                    <NavLink to='/Features' className='list-item'  activeClassName= 'activeItem'>Features</NavLink>
                    <NavLink to='/Pricing' className='list-item' activeClassName= 'activeItem'>Pricing</NavLink>
                    <NavLink to='/Resources' className='list-item' activeClassName= 'activeItem'>Resources</NavLink>
                </div>
            </nav>
                <div className="sign">
                    <NavLink to='/' className='sign-up'>Sign Up</NavLink>
                    <NavLink to='/' className='sign-up'>Login</NavLink>
                </div>
            </div>     
        </header>

    </>
    )
}

export default List