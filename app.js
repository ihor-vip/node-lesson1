// const {createUser} = require("./helpers/create-user");
//
// console.log(22)
// console.log(__dirname)
// console.log(__filename)
//
// let user = createUser('nastya','black')
// console.log(user)


// const fs = require('fs/promises')
// const path = require('path')
// const util = require('util')

// const appendFilePromisify = util.promisify(fs.appendFile)
//
// fs.mkdir(__dirname + '/files',(err) => {
//     if (err) {
//         console.log(err)
//     }
// })

// const ttxPath = path.join(__dirname, 'files', 'data.txt')
//
// console.log(ttxPath)
//
//  appendFilePromisify(ttxPath, 'Hello world \n').then().catch(e=>{
//      console.log(e)})

// const ttxPath = path.join(__dirname, 'files', 'data.txt')

// fs.readFile(ttxPath).then(value => {
//     console.log(value.toString())})

// const filePath = path.join(__dirname, 'files')
//
// fs.readdir(filePath).then(files => {
//     console.log(files)
//
//     for (const filename of files) {
//         console.log('__________')
//         console.log(filename)
//
//         const currentFilePath = path.join(filePath, filename)
//
//         fs.stat(currentFilePath).then(info => {
//
//             if (info.isFile()) {
//                 fs.readFile(currentFilePath).then(data => {
//                     console.log(data.toString())
//                 })
//             }
//
//             console.log(info.isDirectory())
//         })
//     }
// })
//
// const boysPath = path.join(__dirname, 'files', 'boys')
// const girlsPath = path.join(__dirname, 'files', 'girls')
//
// fs.rename(path.join(boysPath, 'nadia.json'), path.join(girlsPath, 'nadia.json')).then()

const fs = require('fs')
const path = require('path')

const ttxPath = path.join(__dirname, 'files', 'data.txt')
const copyPath = path.join(__dirname, 'files', 'copy.txt')

let readStream = fs.createReadStream(ttxPath)
let writetream = fs.createWriteStream(copyPath)

// readStream.on('data', (chunk) =>{
//     console.log(chunk)
//     console.log('________chunk_______')
//
//     writetream.write(chunk)
// })

readStream.pipe(writetream)

readStream.on('end',()=>{
    console.log('stream end')
})







