const CarsData=[
    {id:1,carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche 911 GT3 RS',price:1000000,description:'Porsche GT3 RS',Make:'Porsche',Model:'911 GT3 RS',Year:2024,Color:'white',Kilometrage:0,Condition:'New',Engine:'4.0L V8'},
    {id:2,carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche 911 GT3 RS',price:1000000,description:'Porsche GT3 RS',Make:'Porsche',Model:'911 GT3 RS',Year:2023,Color:'white',Kilometrage:0,Condition:'Used',Engine:'4.0L V8'},
    {id:3,carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche 911 GT3 RS',price:1000000,description:'Porsche GT3 RS',Make:'Porsche',Model:'911 GT3 RS',Year:2023,Color:'white',Kilometrage:0,Condition:'New',Engine:'4.0L V8'},
    {id:4,carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche 911 GT3 RS',price:1000000,description:'Porsche GT3 RS',Make:'Porsche',Model:'911 GT3 RS',Year:2015,Color:'white',Kilometrage:0,Condition:'Used',Engine:'4.0L V8'},
    {id:5,carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche 911 GT3 RS',price:1000000,description:'Porsche GT3 RS',Make:'Porsche',Model:'911 GT3 RS',Year:2023,Color:'white',Kilometrage:0,Condition:'New',Engine:'4.0L V8'},
    {id:6,carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche 911 GT3 RS',price:1000000,description:'Porsche GT3 RS',Make:'Porsche',Model:'911 GT3 RS',Year:2023,Color:'white',Kilometrage:0,Condition:'New',Engine:'4.0L V8'},
    {id:7,carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Mercedes Benz Maybach',price:870000,description:'Mercedes Benz Maybach',Make:'Mercedes Benz',Model:'Maybach',Year:2023,Color:'Black',Kilometrage:0,Condition:'New',Engine:'6.0L V12'},
    {id:8,carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Mercedes Benz Maybach',price:870000,description:'Mercedes Benz Maybach',Make:'Mercedes Benz',Model:'Maybach',Year:2011,Color:'Black',Kilometrage:0,Condition:'New',Engine:'6.0L V12'},
    {id:9,carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Mercedes Benz Maybach',price:870000,description:'Mercedes Benz Maybach',Make:'Mercedes Benz',Model:'Maybach',Year:2023,Color:'Black',Kilometrage:0,Condition:'New',Engine:'6.0L V12'},
    {id:10,carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Mercedes Benz Maybach',price:870000,description:'Mercedes Benz Maybach',Make:'Mercedes Benz',Model:'Maybach',Year:2022,Color:'Black',Kilometrage:0,Condition:'New',Engine:'6.0L V12'},
    {id:11,carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Mercedes Benz Maybach',price:870000,description:'Mercedes Benz Maybach',Make:'Mercedes Benz',Model:'Maybach',Year:2010,Color:'Black',Kilometrage:0,Condition:'New',Engine:'6.0L V12'},  
    {id:12,carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Mercedes Benz Maybach',price:870000,description:'Mercedes Benz Maybach',Make:'Mercedes Benz',Model:'Maybach',Year:2023,Color:'Black',Kilometrage:0,Condition:'New',Engine:'6.0L V12'},
]
const MakeOptions=[]
for (let i = 0; i < CarsData.length; i++) {
    const car = CarsData[i];
    if (!MakeOptions.includes(car.Make)) {
        MakeOptions.push(car.Make);
    }
}
const YearOptions=[]
for (let i = 0; i < CarsData.length; i++) {
    const car = CarsData[i];
    if (!YearOptions.includes(car.Year)) {
        YearOptions.push(car.Year);
    }
}
const ColorOptions=[]
for (let i = 0; i < CarsData.length; i++) {
    const car = CarsData[i];
    if (!ColorOptions.includes(car.Color)) {
        ColorOptions.push(car.Color);
    }
}
export default CarsData;
export {MakeOptions,YearOptions,ColorOptions};
