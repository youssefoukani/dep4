const mongoose = require('mongoose');

const UserModelSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String,
    biografia:String,
    datanascita: Date,

    impiego:String,
    ultimolavoro:String,
    lavoriprecedenti:String,

    indirizzosuperiore:String,
    corsodilaurea:String,
    posizionelavorativaricercata:String,
    luogonascita:String,
    luogoresidenza:String,

    cellulare:String,

})


module.exports = mongoose.model('collezioneutentii', UserModelSchema);
