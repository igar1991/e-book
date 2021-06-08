import { Quest1 } from "./quest/quest1";
import { Quest2 } from "./quest/quest2";
import img1 from "./file/obh.png";
import { ImagePic } from "./quest/ImagePic";
import img2_1_1 from "./file/2_1/1.png";
import img2_1_2 from "./file/2_1/2.png";
import img2_1_3 from "./file/2_1/3.png";
import img2_1_4 from "./file/2_1/4.png";
import img2_1_5 from "./file/2_1/1.png";
import img2_1_6 from "./file/2_1/1.png";
import img2_1_7 from "./file/2_1/1.png";
import img2_1_8 from "./file/2_1/1.png";
import img2_1_9 from "./file/2_1/1.png";
import img2_1_10 from "./file/2_1/1.png";
import img2_1_11 from "./file/2_1/1.png";

const Zog_book = {
  titleimg: img1,
  id: "1",
  title: "ОБЖ и культура поведения",
  class: null,
  theme: [
    {
      title: "Первый раздел: Безопасность",
      class: [
        {
          title: "Тема №1. Основы ЗОЖ",
          quests: [
            <ImagePic
              imgArr={[img2_1_1, img2_1_2, img2_1_3, img2_1_4]}
              quiz="Говорят, что организм здорового человека работает как ...
            Какое слово пропущено? Отметь подходящую картинку (нажми на неё)."
            />,
            <Quest1 />,
            <Quest2 />,
            <Quest1 />,
            <Quest2 />,
          ],
        },
        {
          title: "Тема №2",
          quests: [<Quest1 />, <Quest2 />],
        },
        {
          title: "Тема №3",
          quests: [<Quest1 />, <Quest2 />],
        },
        {
          title: "Тема №4",
          quests: [<Quest1 />, <Quest2 />],
        },
      ],
    },
    {
      title: "Второй раздел: Здоровье",
      class: [
        {
          title: "Тема №1. Основы ЗОЖ",
          quests: [<Quest1 />, <Quest2 />],
        },
        {
          title: "Тема №2",
          quests: [<Quest1 />, <Quest2 />],
        },
        {
          title: "Тема №3",
          quests: [<Quest1 />, <Quest2 />],
        },
        {
          title: "Тема №4",
          quests: [<Quest1 />, <Quest2 />],
        },
      ],
    },
    {
      title: "Третий раздел: Культура поведения",
      class: [
        {
          title: "Тема №9",
          quests: [<Quest1 />, <Quest2 />],
        },
        {
          title: "Тема №10",
          quests: [<Quest1 />, <Quest2 />],
        },
        {
          title: "Тема №11",
          quests: [<Quest1 />, <Quest2 />],
        },
        {
          title: "Тема №12",
          quests: [<Quest1 />, <Quest2 />],
        },
      ],
    },
  ],
};

export const DATA = [Zog_book];
