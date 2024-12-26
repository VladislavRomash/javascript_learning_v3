let students = [
    {name: 'Bob', age: 22, isMarried: true, scores: 85},
    {name: 'Alex', age: 21, isMarried: true, scores: 89},
    {name: 'Nick', age: 20, isMarried: false, scores: 120},
    {name: 'John', age: 19, isMarried: false, scores: 100},
]

// __________map__________

const mapFunction = (arr, func) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i])
    }
    return newArr
}

const getArrayNameStudents = (students) => {
    const result = []
    for (let i = 0; i < students.length; i++) {
        result[i] = students[i].name
    }
    return result
}
console.log(getArrayNameStudents(students))
console.log(mapFunction(students, el => el.name))

const getScoresStudents = (students) => {
    const result = []
    for (let i = 0; i < students.length; i++) {
        result[i] = students[i].scores
    }
    return result
}
console.log(getScoresStudents(students))
console.log(mapFunction(students, el => el.scores))

const addScoresStudents = (students) => {
    const result = []
    for (let i = 0; i < students.length; i++) {
        result[i] = {...students[i], scores: students[i].scores + 10}
    }
    return result
}
console.log(addScoresStudents(students))
console.log(mapFunction(students, el => ({...el, scores: el.scores + 10})))

console.log(students)

// __________filter__________

const filterFunction = (arr, func) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr[newArr.length] = arr[i]
        }
    }
    return newArr
}
console.log(filterFunction(students, el => el.scores < 100))
console.log(filterFunction(students, el => !el.isMarried))

// __________find__________

const findFunction = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i]
        }
    }
}
console.log(findFunction(students, el => el.isMarried))
console.log(findFunction(students, el => el.scores > 99))

// __________push__________

const pushFunction = (arr, element) => {
    arr[arr.length] = element
    return arr.length
}
const newStudent = {name: 'Ann', age: 27, isMarried: true, scores: 90}
console.log(pushFunction(students, newStudent))
console.log(students)

// __________indexOf__________

const arr = [1, 2, 3, 4, 5]
const indexOfFunction = (arr, element, startFind = 0) => {
    for (let i = startFind; i < arr.length; i++) {
        if (arr[i] === element) return i
    }
    return -1
}
console.log(indexOfFunction(arr, 3))
console.log(indexOfFunction(arr, 2))
console.log(indexOfFunction(arr, 6))

// __________includes__________

const includesFunction = (arr, element, startFind = 0) => {
    for (let i = startFind; i < arr.length; i++) {
        if (arr[i] === element) return true
    }
    return false
}
console.log(includesFunction(arr, 1))
console.log(includesFunction(arr, 3))
console.log(includesFunction(arr, 6))

// _____create new Method_____

function getLength() {
    return `Array length is ${this.length}`
}

Array.prototype.getLength = getLength

console.log(arr.getLength())
console.log(students.getLength())