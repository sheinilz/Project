const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/GMAH',
mongoose.connect('mongodb+srv://RutVasner:R080695V@cluster0.b1yksgd.mongodb.net/project?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
),
()=>{
try{
    //
}
catch(error){
    console.log(error)
}
};
const connection =mongoose.connection;
connection.once('open',()=>{
    console.log('connection to db succesfull');
});

