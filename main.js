//Make a Ford Fever
//Produce a car chassis (no input, outputs new chassis obj)
// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}
let chassis = createChassis()
console.log(chassis)


//Add 4 wheels ( input is a chassis, output chassis with wheels)
const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    
    return chassisObject
}

let addingWheels = addWheels(chassis)
console.log(addingWheels)


//Add and engine to chassis (input chassis, output chassis with engine)
const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"

    return chassisObject
}

let addingEngine = addEngine(chassis)
console.log(addingEngine)

//Add steering wheel input chassis, output chassis with steering wheel )
const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"

    return chassisObject
}

let addingSteering = addSteeringWheel(chassis)
console.log(addingSteering)


// Add body to chassis (input chassis, output chassis with body)
const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}

let addingBody = addBody(chassis)
console.log(addingBody)


//add a drive train to chassis ( input chasiss, out puus chassis w/ drive train)

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two Wheel Drive"

    return chassisObject
}

let addingDriveTrain = addDriveTrain(chassis)
console.log(addingDriveTrain)