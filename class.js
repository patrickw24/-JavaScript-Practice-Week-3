export class Vehicle{
 
    constructor(pmake, pmodel, pyear){
        this.make = pmake
        this.model = pmodel
        this.year = pyear
    }

}

export class Car extends Vehicle{

    constructor(pmake, pmodel, pyear, doors){
        super(pmake, pmodel, pyear)
        this.doors = doors
    }
    
}

export class Motorcycle extends Vehicle{
    constructor(pmake, pmodel, pyear, type){
        super(pmake, pmodel, pyear)
        this.type = type

    }
   
}