const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')

function camelToKebab(input) {
    return input.trim().toLowerCase().replace(/\s+/g,'-')
}

async function chooseLevel() {
    return inquirer.prompt({
        type: 'list',
        name: 'level',
        message: 'please choose a level',
        choices: [{name: 'easy', value: 'easy'}, {name: 'medium', value: 'medium'}, {name: 'hard', value: 'hard'}]
    })
}

async function inputFileName() {
    return inquirer.prompt({
        type: 'input',
        message: 'please input question name',
        name: 'name'
    })
}

async function inputNumber() {
    return inquirer.prompt({
        type: 'number',
        message: 'please input question number',
        name: 'number'
    })
}

async function confirmFileName(level, number, name) {
    return inquirer.prompt({
        type: 'confirm',
        name: 'confirm',
        message: `it's the (${level})no.${number}.${name}, are you sure?`
    })
}

async function run() {
    const { level } = await chooseLevel()
    const { number } = await inputNumber()
    let { name } = await inputFileName()
    name = camelToKebab(name)
    const { confirm } = await confirmFileName(level, number, name)
    if (confirm) {
        fs.mkdirSync(path.join(__dirname, `../docs/${level}/${number}.${name}`))
        fs.writeFileSync(path.join(__dirname, `../docs/${level}/${number}.${name}/${name}.js`), '')
        fs.writeFileSync(path.join(__dirname,`../docs/${level}/${number}.${name}/${name}.md`), '')
        console.log(`=====done, your files are in docs/${level}/${number}.${name}======`)
    }
}

run()
