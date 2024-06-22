import { Link } from "react-router-dom";
import React, {Component} from "react"
import "./Profilo.css"


export default class Profilo extends Component{
    constructor(props){
      super(props);
      this.state={
        userData:"",
        paragrafo:"panoramica"
      }
      
    }
    
    componentDidMount(){
      fetch("http://localhost:3000/userData",{
              method:"POST",
              crossDomain:true,
              headers:{
                  "Content-Type":"application/json",
                  Accept:"application/json",
                  "Access-Control-Allow-Origin":"*",
              },
              body:JSON.stringify({
                  token: window.localStorage.getItem("token")
              }),
          }).then((res)=>res.json())
          .then((data)=>{
              console.log(data,"userData");
              this.setState({userData: data.data});
          })
    }
  
  
    render(){
    return (
        <div className="container">


        <div className="header">
            <img src="immagini/pfp.jpeg"/>
            <div className="nomeutente">
                <h1>{this.state.userData.name}</h1></div>
            <button type="submit">Chat</button>
        </div>
    
        <div className="footer">
            <div className="leftbar">
                <h2>Informazioni su {this.state.userData.name}</h2>
    
                <div className="formsx">
                    <button onClick={()=>{this.setState({paragrafo:"panoramica"})}}>Panoramica  {this.state.paragrafo === "panoramica" ? "si" : "no"}</button>
                    <button onClick={()=>{this.setState({paragrafo:"lavoro"})}}>Lavoro {this.state.paragrafo === "lavoro" ? "si" : "no"} </button>
                    <button onClick={()=>{this.setState({paragrafo:"istruzione"})}}>Istruzione {this.state.paragrafo === "istruzione" ? "si" : "no"}</button>
                    <button onClick={()=>{this.setState({paragrafo:"certificazioni"})}}>Certificazioni</button>
                    <button onClick={()=>{this.setState({paragrafo:"informazioni di contatto"})}}>Informazioni di contatto</button>
                </div>
            </div>
    
            <div className="vertical-line"></div>
            <div className="paragrafo">
                <h2>{this.state.paragrafo}</h2>
                <div className="testo"> 
                                            {this.state.paragrafo === "panoramica" && (
                                                <ul>
                                                    <li><b>{this.state.userData.impiego}</b></li>
                                                    <li>Vive a: {this.state.userData.luogoresidenza} </li>
                                                    <li>Nato a: {this.state.userData.luogonascita} </li>
                                                    <li>posizione lavorativa ricercata: {this.state.userData.posizionelavorativaricercata}</li>
                                                </ul>
                                                )}
                                            {this.state.paragrafo === "lavoro" && (
                                            <ul>
                                                <li>esperienza lavorativa più recente: {this.state.userData.ultimolavoro} </li>
                                                <li>esperienze lavorative precedenti: {this.state.userData.lavoriprecedenti}</li>
                                            </ul>
                                            )}
                                            {this.state.paragrafo === "istruzione" && (
                                                <ul>
                                                    <li>Scuola secondaria:{this.state.userData.scuolasuperiore}</li>
                                                    {this.state.userData.corsodilaurea === ""? "" :(<li>Università: {this.state.userData.corsodilaurea}</li>)}
                                                </ul>
                                                )} 
                                            {this.state.paragrafo === "lingue e certificazioni" && (
                                                <ul>
                                                    <li>lingua madre: {this.state.userData.linguamadre}</li>
                                                    <li>altre lingue: {this.state.userData.altrelingue}</li>
                                                    {this.state.userData.certificazionilinguistiche === ""? "" :(<li>certificazioni linguistiche: {this.state.userData.certificazionilinguistiche}</li>)}
                                                    {this.state.userData.certificazioniinformatiche === ""? "" :(<li>certificazioni informatiche: {this.state.userData.certificazioniinformatiche}</li>)}
                                                </ul>
                                                )}
                                            {this.state.paragrafo === "informazioni di contatto" && (
                                            <ul>
                                                <li>email: {this.state.userData.email}</li>
                                                <li>cellulare: {this.state.userData.cellulare} </li>
                                            </ul>
                                            )}
                </div>
                
            </div>
            
    
        </div>
    
    </div>
    )
  }
  }
  //probabilmente perche non ho ancora compilato i campi user