import { NextResponse } from "next/server"


// GET API / Readable (It Shows on the Frontend)
// (Require Postman > GET (http://localhost:3000/api))

let data = [{ Name: 'Ahmed', Class: 'PIAIC'}, {Name: 'Shahbaz', Class: "UIT"}]

/* export async function GET(){
    // return NextResponse.json({'name': 'Ali'})
    // return NextResponse.json(data)
}
*/


/*
export async function GET(req){
    const search = req.nextUrl.searchParams.get('studentName')
    const newData = data.filter((d) => {
        return (
            d.Name == search && d
        )
    })
    console.log(newData, 'NEWDATA')
    return NextResponse.json(newData)
}
*/




//  POST API Writeable on Postman (It Doesn't Show on the Frontend)
// (Require Postman > POST (http://localhost:3000/api))

let DATA = [
    {employeeName: 'Arsalan', employeeId: 8976},
    {employeeName: 'Saad', employeeId: 9868}
];


/*
export async function POST(req){
    const request = await req.json()
    console.log(request)
    return NextResponse.json({request})
}
*/


/*
export async function POST(req){
    const requestPush = await req.json()
    DATA.push(requestPush)
    console.log(DATA, ' DATA')
    console.log(requestPush, ' RequestPush')
    return NextResponse.json(DATA)
}
*/


// (Require Postman > POST (http://localhost:3000/api?name=Jawad))
// In Postman use BODY > RAW > JSON Format to add / push DATA in newData
// JSON Format : 
// {
//     "employeeName": "Jawad",
//     "employeeId": 77
// }
/*
export async function POST(req){
    const request = await req.json()
    DATA.push(request)
    const search = req.nextUrl.searchParams.get('name')
    const newData = DATA.filter((d) => {
        return(
            d.employeeName == search && d ||
            d.employeeId == search && d
        )
    })
    console.log(newData, ' NEWDATA')
    return NextResponse.json(newData)
}
*/





//  PUT API Replace Data on Postman (It Doesn't Show on the Frontend)
// (Require Postman > PUT (http://localhost:3000/api?name=Ali))
// In Postman use BODY > RAW > JSON Format to replace previous data and push Data in newData
// JSON Format : 
// {
//     "name": "Abdullah",
//     "class": "PIAIC"
// }

/*
let Data = [
    {
        name : "Babar",
        class : "PIAIC"
    },
    {
        name : "Ali",
        class : "UIT"
    }
]

export async function PUT(req){
    const search = req.nextUrl.searchParams.get('name')
    const request = await req.json()
    const newData = Data.filter((d) => {
        return d.name !== search && d
    })
    console.log(newData)
    const responseData = [...newData, request]
    console.log(responseData, ' RESPONSE')
    return NextResponse.json(responseData)
}
*/




//  PUT API Replace Data on Postman (It Doesn't Show on the Frontend)
// (Require Postman > PATCH (http://localhost:3000/api?name=Aslam)
// In Postman use BODY > RAW > JSON Format to replace previous data and push Data in newData
// JSON Format : 
// {
//     "id" : 102,
//     "name" : "Abdullah",
//     "class" : "PIAIC"
// }


/*
let Data = [
    {
        id : 101,
        name : "Akber",
        class : "PIAIC"
    },
    {
        id : 103,
        name : "Aslam",
        class : "UIT"
    }
]

export async function PATCH(req){
    const search = req.nextUrl.searchParams.get("name")
    const request = await req.json()
    const newData = Data.filter((d) => {
        return (
            d.name !== search && d
        )
    })
    console.log(newData)
    const newDataSaved = [...newData, request]
    console.log(newDataSaved)
    return NextResponse.json(newDataSaved)
}
*/




// DELETE API is to delete any object
/*
let Data = [
    {
        id : 101,
        name : "Akber",
        class : "PIAIC"
    },
    {
        id : 103,
        name : "Aslam",
        class : "UIT"
    }
]


export async function DELETE(req){
    const search = req.nextUrl.searchParams.get("name")
    const request = await req.json()
    const newData = Data.filter((d) => {
        return (
            d.name !== search && d
        )
    })
    console.log(newData)
    const newDataSaved = [...newData, request]
    console.log(newDataSaved)
    return NextResponse.json(newDataSaved)
}
*/