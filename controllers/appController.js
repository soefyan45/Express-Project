let exampleData = require('../models/exampleData')
const index=async (req,res)=>{
	return res.status(200).json({
		success : true,
		msg     : 'apps Running',
	})
}
const sinonim=async(req,res)=>{
	return res.status(200).json({
		success : true,
		data : exampleData['sinonim'][0]
	})
}
module.exports ={
	index,
	sinonim
}