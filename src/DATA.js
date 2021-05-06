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
            quests: [<Quest1 />, <Quest2 />,<Quest1 />,<Quest2 />]
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
            title: 'Урок пять',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок шесть',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок семь',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок восемь',
            quests: [<Quest1 />, <Quest2 />]
        }]
    },
    {
        title: 'Тема три',
        class: [{
            title: 'Урок девять',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок десять',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок одиннадцать',
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
            title: 'Урок девять',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок десять',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок одиннадцать',
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
    title: 'Физика',
    class: "2-3 класс",
    theme: [{
        title: 'Тема пять',
        class: [{
            title: 'Урок один',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />]
        },
        {
            title: 'Урок два',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />,<Quest1 />]
        },
        {
            title: 'Урок три',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />,<Quest1 />,<Quest1 />]
        },
        {
            title: 'Урок четыре',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />,<Quest1 />,<Quest1 />,<Quest1 />]
        }]
    },
    {
        title: 'Тема шесть',
        class: [{
            title: 'Урок один2',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />]
        },
        {
            title: 'Урок два2',
            quests: [<Quest1 />, <Quest2 />]
        },
        {
            title: 'Урок три2',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />]
        },
        {
            title: 'Урок четыре2',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />]
        }]
    },
    {
        title: 'Тема семь',
        class: [{
            title: 'Урок один3',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />]
        },
        {
            title: 'Урок два3',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />]
        },
        {
            title: 'Урок три3',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />]
        },
        {
            title: 'Урок четыре3',
            quests: [<Quest1 />, <Quest2 />,<Quest1 />]
        }]
    }]

}
export const DATA = [Zog_book,Zog_book1]