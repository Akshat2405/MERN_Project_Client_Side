import React from 'react'
import {useState,useEffect} from 'react';
const Home = () => {
    const [userName, setuserName] = useState("");
    const callHomePage= async ()=>{
        try{
            const res=await fetch('/getdata',{
                method: "GET",
                headers:new Headers({
                    "Content-Type": "application/json",
                })
            });
            const data=await res.json();
            // console.log(data);
            setuserName(data.name);
            if(res.status !==200){
                const error=new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        callHomePage();
    },[]);
    return (
        <>
        <div id="home">
            <h2 className="welcome">Welcome {userName}</h2>
            <h1 className="dev">We are the <span class="badge rounded-pill bg-info text-dark">MERN</span> Developer</h1>
        </div>
        </>
    )
}

export default Home
