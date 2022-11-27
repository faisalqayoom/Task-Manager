const task = {
  id: 0,
  description: "",
  datetime: "",
  isCompleted: false
}

// const myState = (defaultValue) => {
//   let value = defaultValue;
//   const setValue = (newValue) => {
//     value = newValue
//   }

//   return [value, setValue];
// }


// const [myvar, setMyVar] = useState(1)


// const [allTasks, setAllTask] = useState([]);

const newTask = task;
newTask.id = 1;
newTask.description = "Goto bank";
newTask.datetime = "01/02/2022 4:00PM:hrs";
newTask.isCompleted = false;

// const allTs = allTasks;
// allTs.push(newTask);
// setAllTask(allTs);
// allTasks.push(newTask);

const animals = [];

const cow = {
  id: 0,
  name: "cow",
  color: "black",
  sound: "Baaw",
  type: "domestic"
}
const dog = {
  id: 1,
  name: "dog",
  color: "white and black",
  sound: "bow bow",
  type: "domestic"
}
const kitty = {
  id: 5,
  name: "kitty",
  color: "white and black",
  sound: "bow bow",
  type: "domestic"
}

const monkey = {
  id: 3,
  name: "monkey",
  color: "brown",
  sound: "cheeeewww",
  type: "wild"
}
const cat = {
  id: 4,
  name: "cat",
  color: "white",
  sound: "meow meow",
  type: "domestic"
}
const loin = {
  id: 3,
  name: "loin",
  color: "brown",
  sound: "Roar",
  type: "wild"
}
const Tiger = {
  id: 4,
  name: "tiger",
  color: "brown",
  sound: "Browww",
  type: "wild"
}

animals.push(cow);
animals.push(dog);
animals.push(monkey);
animals.push(cat);
animals.push(loin);
animals.push(Tiger);
animals.push(kitty);


// console.log(animals)


// console.log("Finding Animal: ");

// let a = animals.find((animal) => animal.name === 'cow')

// let domesticAnimals = animals.filter((animal) => animal.type === 'domestic')

// let wildAnimals = animals.filter((animal) => animal.type === 'wild')

// console.log('Domestic Animaks ', domesticAnimals)
// console.log('Wild Animals ', wildAnimals)


// const findAnnimalsByByType = (animals, ofType) => {
//   const Allanimals = animals.filter((animal) => (animal.type === ofType))
//   console.log(Allanimals)
// }

// findAnnimalsByByType(animals, 'domestic');


// const findAnimalsBySound = (array, sounds) => {
//   const testAray = animals.filter((animal) => (animal.sound === sounds))
//   return testAray;
// }
// const soundAnimal = findAnimalsBySound(animals, 'bow bow')
// console.log(soundAnimal)

// const findAnimalById = (array, idd) => {
//   const tstid = array.find((animal) => (animal.id === idd))
//   return tstid;
// }
// const findAnimal = findAnimalById(animals, 3)
// console.log(findAnimal)

// console.log(loin.name)

const arryOfStrings = ["faisal", "sajad", "adil", "shahid", "shakir"]
// const result = arryOfStrings.map((name) => name)
// console.log(result)

// const findName = (array, name) => {
//   const result = array.find((nam) => (nam === name))
//   console.log(result)
// }
// findName(arryOfStrings, "sajad")

const employees = []

const addEmployeeObject = (id, name, age, salary) => {
  let employee = {
    id: id,
    name: name,
    age: age,
    salary: salary
  }
  employees.push(employee);



}
addEmployeeObject(1, "Shahid", 23, 4);
addEmployeeObject(2, "Shakir", 13, 5);
addEmployeeObject(3, "Sajad", 24, 2);
addEmployeeObject(4, "Shafi", 43, 4);
addEmployeeObject(5, "Faisal", 33, 6);
addEmployeeObject(6, "Aasil", 73, 7);
addEmployeeObject(7, "DAnish", 83, 8);
addEmployeeObject(8, "Umer", 33, 1);
addEmployeeObject(9, "Yawar", 93, 1);
addEmployeeObject(10, "Junaid", 21, 3);

// console.table(employees)

// const findNameById = (array, empid) => {
//   const findname = array.find((emp) => (emp.id === empid))
//   console.log(findname)
// }
// findNameById(employees, 1);

// const hugeSalaryEmployees = (array, amount) => {
//   const res = array.filter((emp) => (emp.salary >= amount))
//   console.log(res)
// }
// hugeSalaryEmployees(employees, 4000)
// const allSalaries = (arr) => {
//   const salaries = arr.map((item) => item.salary)
//     .reduce((acc, curr) => acc + curr)
//   console.log(salaries)
// }
// allSalaries(employees);




// const addAllSalary = (array, allSalaries) => {
//   const result = array.reduce((acc, curr) => (acc = curr + allSalaries), 0)
//   console.log(result)
// }
// }
// addAllSalary(employees, (95000, 1000, 345000))

const StdArray = [
  {
    name: "faisal",
    rollNo: 1,
    stream: "ece",
    Marks: {
      math: 100,
      english: 60,
      urdu: 70,
      geography: 80,
      science: {
        biology: 80,
        botany: 70,
        gology: 90,
      }
    }
  },
  {
    name: "sajad",
    rollNo: 1,
    stream: "ece",
    Marks: {
      math: 100,
      english: 660,
      urdu: 700,
      geography: 80,
      science: {
        biology: 80,
        botany: 70,
        gology: 90,
      }
    }
  },
  {
    name: "shahid",
    rollNo: 1,
    stream: "ece",
    Marks: {
      math: 10,
      english: 120,
      urdu: 70,
      geography: 80,
      science: {
        biology: 80,
        botany: 70,
        gology: 90,
      }
    }
  }
]
// const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

// const sum = StdArray.marks.value.reduce((acc, sum, i, array) => (acc + sum))
// console.log(sum)

// const sum = (array ) => {
//   for (const sal in array) {
//     console.log(sal,);
//   }

// }

// sum(StdArray)


StdArray.map((sub) => {
  let sum = 0;
  for (const key in sub.Marks) {
    if (typeof (sub.Marks[key]) === 'number') {
      sum += sub.Marks[key]
    }
    else {
      for (const num in sub.Marks[key])
        sum += sub.Marks[key][num]
    }
  }
  console.log(sum)
}
)

StdArray.map((sub) => {
  let sum = 0;
  for (const key in sub.Marks) {
    if (typeof (sub.Marks[key]) === 'number')
      sum += sub.Marks[key]
  }
  console.table(sum)
}
)


// const numbers = [1, 2, 3, 4, 5]
// // const sum = numbers.reduce((acc, curr) => (acc + curr))
// let sum = 0;
// for (let num in numbers) {
//   sum = sum + numbers[num];
// }
// console.log(sum)



