const UserModel = require('../models/userModel');

exports.getAllUsers = function()
{
    return new Promise((resolve, reject) =>
    {
        UserModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

exports.getUser = function(id)
{
    return new Promise((resolve, reject) =>
    {
        UserModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

exports.createUser = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let user = new UserModel({
            Username : obj.username,
            Password : obj.password,
            Email : obj.email,
            Address : obj.address,
            Phon : obj.phon,
            Rating : obj.rating
        });

        user.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Created !")
            }
        })
    })
}


exports.updateUser = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {

        UserModel.findByIdAndUpdate(id,
            {
                Username : obj.username,
                Password : obj.password,
                Email : obj.email,
                Address : obj.address,
                Phon : obj.phon,
                Rating : obj.rating
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve("Updated !")
                }
            })

    })
}



exports.deleteUser = function(id)
{
    return new Promise((resolve, reject) =>
    {

        UserModel.findByIdAndDelete(id,function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve("Deleted !")
                }
            })

    })
}