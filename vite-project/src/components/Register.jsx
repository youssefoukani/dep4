import { Component, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.css"


export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            biografia:"",
            datanascita:"",
            impiego: "",
            ultimolavoro: "",
            lavoriprecedenti: "",
            indirizzosuperiore: "",
            corsodilaurea: "",
            posizionelavorativaricercata: "",
            luogonascita: "",
            luogoresidenza: "",
            cellulare: ""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    };
    handleSubmit(e){
        e.preventDefault();
        const{name,email,password, biografia, datanascita, luogo, impiego, ultimolavoro, lavoriprecedenti,indirizzosuperiore,corsodilaurea,posizionelavorativaricercata,luogonascita,luogoresidenza,cellulare }=this.state;
        console.log(name,email,password, biografia, datanascita)

        fetch("http://localhost:3000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                name,
                email, 
                password,
                biografia,
                datanascita,
                luogo,
                biografia, 
                impiego, 
                ultimolavoro, 
                lavoriprecedenti,
                indirizzosuperiore,
                corsodilaurea,
                posizionelavorativaricercata,
                luogonascita,
                luogoresidenza,
                cellulare
            }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister");
            window.location.href="./Login"
        })
    }



    render() {
        return(
        <body className="login">
        <div className="login-container">
            <h2>Registrati a SOCIAL</h2>
            <div className="form-group">
                <form onSubmit={this.handleSubmit} action="input" method="post">

                    <input 
                    type="text"
                     id="nome" 
                     name="nome" 
                     required 
                     onChange={(e)=>this.setState({name:e.target.value})}
                     placeholder="nome completo" />

                    <input
                    type="text"
                    id="email" 
                    name="email" 
                    onChange={(e)=>this.setState({email:e.target.value})}
                    required 
                    placeholder="E-mail"/>

                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="password" 
                    onChange={(e)=>this.setState({password:e.target.value})}
                    required/>
                    
                    <input
                    type="date"
                    id="datanascita" 
                    name="datanascita" 
                    onChange={(e)=>this.setState({datanascita:e.target.value})}
                    required 
                    placeholder="data di nascita"/>

                    <input
                    type="text"
                    id="biografia" 
                    name="biografia" 
                    onChange={(e)=>this.setState({biografia:e.target.value})}
                    required 
                    placeholder="biografia..."/>

                    <input
                    type="text"
                    id="impiego"
                    name="impiego"
                    onChange={(e) => this.setState({ impiego: e.target.value })}
                    required
                    placeholder="impiego..."
                    />

                    <input
                    type="text"
                    id="ultimolavoro"
                    name="ultimolavoro"
                    onChange={(e) => this.setState({ ultimolavoro: e.target.value })}
                    required
                    placeholder="ultimolavoro..."
                    />

                    <input
                    type="text"
                    id="lavoriprecedenti"
                    name="lavoriprecedenti"
                    onChange={(e) => this.setState({ lavoriprecedenti: e.target.value })}
                    required
                    placeholder="lavoriprecedenti..."
                    />

                    <input
                    type="text"
                    id="indirizzosuperiore"
                    name="indirizzosuperiore"
                    onChange={(e) => this.setState({ indirizzosuperiore: e.target.value })}
                    required
                    placeholder="indirizzosuperiore..."
                    />

                    <input
                    type="text"
                    id="corsodilaurea"
                    name="corsodilaurea"
                    onChange={(e) => this.setState({ corsodilaurea: e.target.value })}
                    required
                    placeholder="corsodilaurea..."
                    />

                    <input
                    type="text"
                    id="posizionelavorativaricercata"
                    name="posizionelavorativaricercata"
                    onChange={(e) => this.setState({ posizionelavorativaricercata: e.target.value })}
                    required
                    placeholder="posizionelavorativaricercata..."
                    />

                    <input
                    type="text"
                    id="luogonascita"
                    name="luogonascita"
                    onChange={(e) => this.setState({ luogonascita: e.target.value })}
                    required
                    placeholder="luogonascita..."
                    />

                    <input
                    type="text"
                    id="luogoresidenza"
                    name="luogoresidenza"
                    onChange={(e) => this.setState({ luogoresidenza: e.target.value })}
                    required
                    placeholder="luogoresidenza..."
                    />

                    <input
                    type="text"
                    id="cellulare"
                    name="cellulare"
                    onChange={(e) => this.setState({ cellulare: e.target.value })}
                    required
                    placeholder="cellulare..."
                    />




                    <button type="submit">Registrati</button>

                    

                </form>
                <div className="registrato"> <a href="/login"> Hai già un account? Accedi </a> </div>
            </div>

        </div>
        </body>
        )
    }
}

