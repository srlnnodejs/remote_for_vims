const jwt = require('jsonwebtoken')
const httpStatus = require('http-status');
const { Op } = require("sequelize");

const models = require('../../models/index.js');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

var d = new Date();
// console.log("sir you port is")
// exports.allUsers=async(req,res,next)=>{
//   models.auth_user.findAll({
//       attributes:['id','username','email','first_name','last_name']
// }).then(function(resolved){

//   res.status(httpStatus.OK)
//             .json({ error: false, type : 'success', result :resolved}).end();

// }).catch(function(rejected){

//   res.status(httpStatus.NO_CONTENT).send("peasase register first")


// })}
// exports.registeruser=async(req,res,next)=>{
//     const newUser = req.body;
//         bcrypt.hash(newUser.password, saltRounds, function(err, hash) {
//         newUser.password = hash;
//         console.log(newUser)
//         models.auth_user.create({
//             password: newUser.password,
//             last_login: newUser.last_login,
//             is_superuser:newUser.is_superuser,
//             username:newUser.username,
//             first_name:newUser.first_name,
//             last_name:newUser.last_name,
//             email:newUser.email,
//             is_staff:newUser.is_staff,
//             is_active:newUser.is_active,
//             date_joined:newUser.date_joined
//             }).then(function(resolved){
    
//             console.log("New user Created in the Database");
//             res.status(httpStatus.CREATED)
//             .json({ error: false, type : 'success', result :resolved}).end();
           
//             //why is this not working?
//         }).catch(function(err) {
 
//           res.status(httpStatus.NOT_ACCEPTABLE)
//           .json({ error: true, type : 'failed', result :err}).end();
         
    
//         });                
//   });}