// _____ Types of data _____

// 1. String -> 'hello world'
// 2. Number -> number / NaN / Infinity
// 3. Boolean -> true / false
// 4. Null -> null (для неизвестных значений)
// 5. undefined -> undefined (для неприсвоенных значений)
// 6. symbol -> symbol (для уникальных идентификаторов)
// 7. BigInt -> BigInt (для целых чисел произвольной длины)

// ___

// 1. Object

// let a = 'Hello World';
// console.log(a)
// a = 1
// console.log(a)

// let student = {
//     name: 'Ann',
//     age: 32,
// }
// console.log(student.name)
//
// let student2 = student
// student2.name = 'Bob'
//
// console.log(student.name)

// let arr = [1, 2, 3, 4]
// arr.push(5)
// console.log(arr)
// let arr2 = arr.concat(6)
// console.log(arr === arr2)

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: false,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ]
//
// const newUser = {
//     id: 5,
//     name: 'Farid',
//     isStudent: true,
// }
//
// // CRUD --> Create Read Update Delete
//
// console.log(users)
//
// const createUser = [...users, newUser]
// console.log(createUser)
//
// const updateUsers = users.map(m => m.id === 3 ? {...m, isStudent: true} : m)
// console.log(updateUsers)
// console.log(users)
//
// const deleteUsers = users.filter(m => m.id !== 2)
// console.log(deleteUsers)

// const superUser = {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//         street: 'Kattie Turnpike',
//         suite: 'Suite 198',
//         city: 'Lebsackbury',
//         zipcode: '31428-2261',
//         geo: {
//             lat: '-38.2386',
//             lng: '57.2232',
//         },
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//         name: 'Hoeger LLC',
//         catchPhrase: 'Centralized empowering task-force',
//         bs: 'target end-to-end models',
//     },
// }
//
// const changeCompany = {...superUser, company: {...superUser.company, name: 'EPAM'}}
// console.log(superUser.company.name)
// console.log(changeCompany.company.name)
//
// const changeGeoUser = {
//     ...superUser,
//     address: {...superUser.address, geo: {...superUser.address.geo, lat: '51.405775', lng: '30.057519'}}
// }
// console.log(changeGeoUser.address.geo)
// console.log(superUser.address.geo)
//
// const deepCopy = {
//     ...superUser,
//     address: {...superUser.address, geo: {...superUser.address.geo}},
//     company: {...superUser.company}
// }
//
// console.log(deepCopy === superUser)
// console.log(deepCopy.address === superUser.address)
// console.log(deepCopy.address.geo === superUser.address.geo)
// console.log(deepCopy.company === superUser.company)
//
// const deepCopyWithMethod = structuredClone(superUser)
//
// console.log(deepCopyWithMethod === superUser)
// console.log(deepCopyWithMethod.address === superUser.address)
// console.log(deepCopyWithMethod.address.geo === superUser.address.geo)
// console.log(deepCopyWithMethod.company === superUser.company)

