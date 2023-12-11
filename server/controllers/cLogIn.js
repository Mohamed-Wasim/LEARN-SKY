const express = require("express");
const mLogIn = require("../models/mLogin");

// get login
exports.GetLogIn = async function (oReq,callback) {
    const query = {
        '$and':[]
    }
    query["$and"].push({"mail" : oReq.email});
    query["$and"].push({"password" : oReq.password});
    try{
       const data =  await mLogIn.findOne(query, {_id:1}).lean();
        if(data && data._id){
            callback({status:"200",loginId: data._id});
        }else{
            callback({status:"200",code: "INVALID_LOGIN"});
        }
    } catch (error) {
        callback({status:"500",err});
    }
};



//save log in detailes
exports.saveLogIn = async function (oReq,callback) {
    try{
        async function onCheckDup (){
            const docs = await mLogIn.find({ mail: oReq.email }, { mail: 1 }).lean();
            console.log("docs",docs)
            if (docs && docs.length) {
                return true
            }
            return false
        }
        const Dup = await onCheckDup ();
        async function onSaveLogIn (){
            console.log('varuthu')
            console.log(oReq)
            const newLogin = new mLogIn({
                name: oReq.name,
                mail: oReq.email,
                password: oReq.password,
            });
            newLogin.save().then((oLogin) => {
                console.log('saved function')
                callback({status:"200",code: "SAVE_LOGIN_SUCCESS",loginId:oLogin._id})
            }).catch((err) => {
                callback({status:"500",err});
            });
        }
        if(!Dup){
            await onSaveLogIn();
        }else{
            callback({ status: "200", code: "MAIL_EXIST" });
        }
       
    } catch (error) {
        console.log('saved calback')
        console.log(error)
        callback({status:"500",error});
    }
};
