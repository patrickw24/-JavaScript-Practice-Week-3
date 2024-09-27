import { Car, Motorcycle, Vehicle } from "./class.js";

let car=[]
let motorcycle=[]

function createVehicle(){

    event.preventDefault()

let make= inputMake.value
let model= inputModel.value
let year= parseInt(inputYear.value)
let vehicle= inputVehicle.value
let doors= parseInt(inputDoors.value)
let type= inputType.value



if(vehicle === "Car"){

if(year < 1990){
    errorYear.innerHTML="The year must be greater than 1990"
}else{
    let tmp= new Car(make, model, year, doors)
    car.push(tmp)
    errorYear.innerHTML=""
}

}


if(vehicle === "Motorcycle"){

    if(year < 1990){
        errorYear.innerHTML="The year must be greater than 1990"
    }else{
        let tmp= new Motorcycle(make, model, year, doors)
        motorcycle.push(tmp)
        errorYear.innerHTML=""

    }


}

if (vehicle === ""){
    errorVehicle.innerHTML= "Please select a vehicle type"
}


tableLayout()
}

function tableLayout(){

    

    let carLayout= `<tr>
    <th>Make<th>
    <th>Model<th>
    <th>Year<th>
    <th>Doors<th>
    </tr>`

   

    for( let i = 0; i < car.length; i++){

        carLayout+=`<tr>
        <td>${car[i].make}</td>
         <td>${car[i].model}</td>
         <td>${car[i].year}</td>
         <td>${car[i].doors}</td>
        </tr>`
        
    }
    carOutput.innerHTML= carLayout


    
    let motorcycleLayout= `<tr>
    <th>Make<th>
    <th>Model<th>
    <th>Year<th>
    <th>Motorcycle Type<th>
    </tr>`

    for( let i = 0; i < motorcycle.length; i++){

        motorcycleLayout+=`<tr>
        <td>${motorcycle[i].make} motorcycle</td>
         <td>${motorcycle[i].model}</td>
         <td>${motorcycle[i].year}</td>
         <td>${motorcycle[i].type}</td>
        </tr>`
        
    }
    motorcycleOutput.innerHTML= motorcycleLayout
}

window.createVehicle= createVehicle