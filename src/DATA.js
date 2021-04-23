import { Quest1 } from "./quest/quest1"
import { Quest2 } from "./quest/quest2"
import img1 from "./file/1k.png"



const Zog_book = {
    titleimg: img1,
    id: '1',
    title: 'Математика',
    class: "2-3 класс",
    theme: [{
        title: 'Тема один',
        class: [{
            title: 'Урок один',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок два',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок три',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок четыре',
            quests: [<Quest1 />, <Quest2 />]
        }]
    },
    {
        title: 'Тема два',
        class: [{
            title: 'Урок один',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок два',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок три',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок четыре',
            quests: [<Quest1 />, <Quest2 />]
        }]
    },
    {
        title: 'Тема три',
        class: [{
            title: 'Урок один',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок два',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок три',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок четыре',
            quests: [<Quest1 />, <Quest2 />]
        }]
    }]

}

const Zog_book1 = {
    titleimg: img1,
    id: '2',
    title: 'Математика',
    class: "2-3 класс",
    theme: [{
        title: 'Тема один',
        class: [{
            title: 'Урок один',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок два',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок три',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок четыре',
            quests: [<Quest1 />, <Quest2 />]
        }]
    },
    {
        title: 'Тема два',
        class: [{
            title: 'Урок один',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок два',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок три',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок четыре',
            quests: [<Quest1 />, <Quest2 />]
        }]
    },
    {
        title: 'Тема три',
        class: [{
            title: 'Урок один',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок два',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок три',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок четыре',
            quests: [<Quest1 />, <Quest2 />]
        }]
    }]

}
export const DATA = [Zog_book,Zog_book1]