import { useState } from "react";
import React from "react";
import '../Css/Home.css'
// https://api.shrtco.de/v2/shorten?url=

const Home=()=>{
    const [text, setText] = useState("")
    const [shortURL, setShortURL] = useState([])
    const [buttonText,setButtonText] = useState("Copy")

    const handelSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert('input empty')
            return
        }
        else{
            const shorterLink = async () =>{
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
                const data = await res.json()
                console.log(data.result)
                setShortURL(data.result)
                // setText = ("")
            }
            shorterLink()
        }
        
        // fetch('https://api.shrtco.de/v2/shorten?url='+text).then()
        // setShortURL('heelo')
    }
    const handelCopy = () => {
        navigator.clipboard.writeText(shortURL.full_short_link)
        setButtonText = ("Copied!")
    }
    return(
        <div>
           <div className="home-container">

                <div className="home-item">
                    <h1>More than just shorter Links</h1>
                </div>

            <div className="info">
                <p>Build your brnd's recognition and get detailed insights on how your links are performing</p>
            </div>

            <form className="shortner" onSubmit={handelSubmit}>
                <input type='text' className="inputField" 
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                />
                <input onClick={handelSubmit} type='submit' value='Shorten It!' className="btn"/>
            </form>

            <div className="article">
                {/* <article>
                    <h6>{shortURL.original_link}</h6>
                </article> */}
                <article>
                <ul>
                <button className="finalLink"><li>{shortURL.full_short_link}</li></button>
                    <li><button onClick={handelCopy} className="btn2" >{buttonText}</button></li>
                </ul>
                </article>
            </div>   
        </div>
    </div>
    )
}
export default Home;