const ItemModel = require('../models/itemModel');

exports.getAllItems = function()
{
    return new Promise((resolve, reject) =>
    {
        ItemModel.find({}, function(err, data)
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

exports.getItem = function(id)
{
    return new Promise((resolve, reject) =>
    {
        ItemModel.findById(id, function(err, data)
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

exports.createItem = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let item = new ItemModel({
            IdItem : obj.idItem,
            IdOwner : obj.idOwner,
            IdBorrow : obj.idBorrow,
            Name : obj.name,
            Category : obj.category,
            Status : obj.status,
            Rate : obj.rate,
            BorrowsNum : obj.borrowsNum,
            OpenText : obj.openText
        });

        item.save(function(err)
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


exports.updateItem = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {

        ItemModel.findByIdAndUpdate(id,
            {
                IdItem : obj.idItem,
                IdOwner : obj.idOwner,
                IdBorrow : obj.idBorrow,
                Name : obj.name,
                Category : obj.category,
                Status : obj.status,
                Rate : obj.rate,
                BorrowsNum : obj.borrowsNum,
                OpenText : obj.openText
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



exports.deleteItem = function(id)
{
    return new Promise((resolve, reject) =>
    {

        ItemModel.findByIdAndDelete(id,function(err)
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