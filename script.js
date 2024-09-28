import { Car, Motorcycle, Vehicle } from "./class.js";

let car = [];
let motorcycle = [];

function createVehicle() {
  event.preventDefault();

  let make = inputMake.value;
  let model = inputModel.value;
  let year = parseInt(inputYear.value);
  let vehicle = inputVehicle.value;
  let doors = parseInt(inputDoors.value);
  let type = inputType.value;

 

  if (vehicle === "Car") {
    if (doors > 0) {
      let tmp = new Car(make, model, year, doors);
      car.push(tmp);
      tableLayout();
    }
  } else if (vehicle === "Motorcycle") {
    if (type.length > 0) {
      let tmp = new Motorcycle(make, model, year, type);
      motorcycle.push(tmp);
      tableLayout();
    }
  }

  if (vehicle === "") {
    errorVehicle.innerHTML = "Please select a vehicle type";
  }else{
    errorVehicle.innerHTML =""
  }

  if(vehicle === "Car" && doors <= 0){
    errorDoors.innerHTML= "Doors must be greater than 0"
  }else{
    errorDoors.innerHTML=""
  }

  if (vehicle === "Motorcycle" && type === "") {
    errorType.innerHTML = "The type is required when Motorcycle is selected";
  }else{
    errorType.innerHTML =""
  }
}

function tableLayout() {
  if (car.length > 0) {
    let carLayout = `<tr>
    <th>Make</th>
    <th>Model</th>
    <th>Year</th>
    <th>Doors</th>
    </tr>`;

    for (let i = 0; i < car.length; i++) {
      carLayout += `<tr>
          <td>${car[i].make}</td>
           <td>${car[i].model}</td>
           <td>${car[i].year}</td>
           <td>${car[i].doors}</td>
          </tr>`;
    }
    carOutput.innerHTML = carLayout;
  }

  if (motorcycle.length > 0) {
    let motorcycleLayout = `<tr>
  <th>Make</th>
  <th>Model</th>
  <th>Year</th>
  <th>Motorcycle Type</th>
  </tr>`;

    for (let i = 0; i < motorcycle.length; i++) {
      motorcycleLayout += `<tr>
      <td>${motorcycle[i].make}</td>
       <td>${motorcycle[i].model}</td>
       <td>${motorcycle[i].year}</td>
       <td>${motorcycle[i].type}</td>
      </tr>`;
    }
    motorcycleOutput.innerHTML = motorcycleLayout;
  }
}

window.createVehicle = createVehicle;
