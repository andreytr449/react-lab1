export type MapType = {
    id: number
    name:string
    x:string
    y:string
    width:string
    height:string
}

export const regions:MapType[] = [
    { id: 1, name: "Київська область", x: "43%", y: "20%", width: "50px", height: "70px" },
    { id: 2, name: "Львівська область", x: "4%", y: "32%", width: "50px", height: "40px" },
    { id: 3, name: "Одеська область", x: "40%", y: "60%", width: "60px", height: "80px" },
    { id: 4, name: "Харківська область", x: "73%", y: "30%", width: "90px", height: "50px" },
    { id: 5, name: "Дніпропетровська область", x: "60%", y: "50%", width: "100px", height: "40px" },
];