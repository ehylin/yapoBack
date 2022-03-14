const express = require('express');
const app = express();
const morgan = require('morgan');


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors(corsOptions));


app.use(require('./routes/index'));
app.use('/api/bandas', require('./routes/bandas'))


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


