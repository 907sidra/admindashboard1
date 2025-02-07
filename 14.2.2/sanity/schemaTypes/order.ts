

export default {
    name :"order",
    type :"document",
    title :"Order",
    fields : [
        {
            name: "firstName",
            title: "firstName",
            type: "string"
        },
        {
            name:"lastName",
            title:"lastName",  
            type:"string"
        },
        {
            name:"email",
            title:"email",
            type:"string"
        },
        {
            name:"phone",
            title:"phone",
            type:"string"
        },
        {
            name:"address",
            title:"address",
            type:"string"
        },
        {
            name:"zipCode",
            title:"zipCode",
            type:"string"
        },
        {
            name:"city",
            title:"city",
            type:"string"
        },
        {
            name:"discount",
            title:"discount",  
            type:"number"
        }
        ,
        {
            name:"cartItems",
            title:"cartItems",
            type:"array",
            of:[{
                type:"reference",
                to:[{
                    type:"products"
                }]
            }]
        },
        {
            name:"total",
            title:"total",
            type:"number"
        },
        {
            name:"status",
            title:"Order status", 
            type:"string",
            options:{
                list:[
                    {title:"Pending", value:"pending"},
                    {title:"Completed", value:"completed"},
                    {title:"Dispatch", value:"dispatch"},
                ],
                layout :"radio" // optionally changed to dropdown
            },
            initialValue:"pending" //default value
        }

    ]
}