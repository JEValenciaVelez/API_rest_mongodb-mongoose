//config server


//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const express = require('express');
const morgan = require('morgan');
const {Mongoose} = require('./src/db');
const app = express();

//Settings
app.set('port', process.env.PORT || 3001)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./src/routes/employes.routes'));


//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server listening on port -> 3001`)
})
