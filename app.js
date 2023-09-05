require("dotenv").config()
let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser');
let appRoute = require('./routes/appRoutes')
const cors = require('cors')
let app = express()

app.use(cors())
app.use(
	express.json()
)
app.use(
	cookieParser()
)
app.set('trust proxy',true)

app.get('/', (req, res) => {
    res.status(200).json('project running')
})
app.use('/api', appRoute);
if(process.env.APP_MODE=='DEV'){
	var port = process.env.PORT || 5009;
	app.listen(port);
	console.log('Listening on localhost running in port:'+ port);
  }