const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')


exports.register=async (req, res)=>{
    
    const{name,email,password, datanascita, luogo, biografia, impiego, ultimolavoro, lavoriprecedenti,indirizzosuperiore,corsodilaurea,posizionelavorativaricercata,luogonascita,luogoresidenza,cellulare }=req.body;
    const salt= await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try{
        const existingUser = await UserModel.findOne({ email });

        if (!email || !password) { //se manca uno dei 2 invia errore
        return res.json("mancaqualcosa");
        }else{
            if(existingUser) {  //se mail gia usata
            return res.json('esistegia');
            }else{
                // salva i dati in users
                const newuser = new UserModel({ name:name, email:email, password:hashedPassword, luogo:luogo, 
                                                datanascita:datanascita,biografia:biografia,impiego: impiego, ultimolavoro: ultimolavoro, 
                                                lavoriprecedenti: lavoriprecedenti, indirizzosuperiore: indirizzosuperiore, corsodilaurea: corsodilaurea, posizionelavorativaricercata: posizionelavorativaricercata, 
                                                luogonascita: luogonascita, luogoresidenza: luogoresidenza, cellulare: cellulare});

                await newuser.save()
                res.send({status:"ok"})

            }
    

        }
    }catch(error){
        res.send({status:"error"})
    }
    
    
}


exports.login=async (req, res)=>{
    
    const{email,password}=req.body;

    const utentepresente = await UserModel.findOne({ email });
    if(!utentepresente){
        res.json('email non valida');
    }else{
        if (!password) {
            res.json('passoword non valida');
        }else{
            const confronto= await bcrypt.compare(password, utentepresente.password)

            if (!utentepresente || !confronto) { //se utente non esiste o la pass è errata
                res.json('credenzialierrate');
            }else{
                const token=jwt.sign({email:utentepresente.email}, process.env.JWT_SECRET)

                if(res.status(201)){
                    return res.json({status:"ok",data:token})
                }else{
                    return res.json({error:"error"})
                }
            }}

    }
    
    
}

exports.profilo=async(req, res)=>{
    const {token}=req.body;
    try{
        const user=jwt.verify(token, process.env.JWT_SECRET)
        const useremail=user.email;
        UserModel.findOne({email:useremail})
            .then((data)=>{
                res.send({status:"ok", data:data})
            }).catch((error)=>{
                res.send({status:"error", data:error})
            })
    }catch(error){}
}

exports.modificaProfilo=async (req, res)=>{
    const{email, luogo, profilo, biografia, impiego, ultimolavoro, lavoriprecedenti,indirizzosuperiore,corsodilaurea,posizionelavorativaricercata,luogonascita,luogoresidenza,cellulare}=req.body;

    try{
        const existingUser = await UserModel.findOne({ email });

    }catch(error){
        res.send({status:"error"})
    }
}
