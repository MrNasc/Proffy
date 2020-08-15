const Database = require('./db')
const create_Proffy = require('./create_Proffy')

Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name: "Matheus Nascimento",
        avatar: "https://avatars0.githubusercontent.com/u/67760646?s=460&u=91b9ce612672e453e9bdebf610c1e07213b59ba3&v=4",
        whatsapp: "998179215",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br></br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: "Química",
        cost: "20"
        //o proffy_id virá pelo banco de dados 
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrarmos as classes
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await create_Proffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    console.log(selectClassesAndProffys)

    // 
})