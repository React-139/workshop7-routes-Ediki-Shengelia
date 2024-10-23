import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { routes } from "../constants/routers";

const Home = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({name:"", password: ""});

    const saveInputsHandler = (e) => {
        let name = e.target.name;
        setUserInfo((prev)=> ({...prev, [name]:e.target.value}))
    }
    console.log(userInfo);
    

    const submitHandler = (e) => {
        e.preventDefault();
        const checkUser = userInfo.name === "tato" && userInfo.password === "jakhua";
        if (checkUser) {
            navigate(routes.USERS)
        }else {
            console.log("Invalid Input");
        }
    }
    return (
        <div>
            <h1>Home</h1>
            <form onSubmit={submitHandler}>
                <label>name</label>
                <input type="text" name="name"  onChange={saveInputsHandler}/>
                <label>password</label>
                <input type="password" name="password"  onChange={saveInputsHandler}/>
                <button>Sign In</button>
            </form>
              <button onClick={()=>(navigate(routes.USERS))}>go to users rout</button>
        </div>
    )
};

export default Home;
