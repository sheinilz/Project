const express = require('express');
const UsersRouter = require('./routers/userRouter');
const ItemsRouter = require('./routers/itemRouter');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
//Oprn connection to the DB
require('./configs/database');
app.use('/api/users', UsersRouter)
app.use('/api/items', ItemsRouter)
app.listen(8000);



