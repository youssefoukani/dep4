import { Component, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.css"


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    };
    handleSubmit(e){
        e.preventDefault();
        const{email,password}=this.state;
        console.log(email,password)

        fetch("http://localhost:3000/login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email, 
                password
            }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userLogin");
            if(data.status=="ok"){
                alert("login successfull");
                window.localStorage.setItem("token",data.data)
                window.location.href="./Profilo"
            }
        })
    }


    render() {
        return(
        <body className="login">
        <div className="login-container">
            <h2>Accedi a SOCIAL</h2>
            <div className="form-group">
                <form onSubmit={this.handleSubmit} action="input" method="post">

                    <input 
                    type="text"
                    id="email" 
                    name="email" 
                    onChange={(e)=>this.setState({email:e.target.value})}                    
                    required 
                    placeholder="E-mail"/>
                    
                    <input type="password" 
                    id="password" 
                    name="password" 
                    onChange={(e)=>this.setState({password:e.target.value})}                    
                    placeholder="password"  
                    required/>
                            
                    <button type="submit">Accedi</button>

                </form>
            </div>
            <div className="registrato"> <a href="/register"> Non hai un account? Registrati </a> </div>
        </div>
        </body>
    )
}
}
