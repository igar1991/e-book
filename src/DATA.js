import { Quest1 } from "./quest/quest1";
import { Quest2 } from "./quest/quest2";
import { Arrow } from "./quest/Arrow";
import { Emphas } from "./quest/Emphas";
import { Dropword } from "./quest/Dropword";
import img1 from "./file/obh.png";
import { ImagePic } from "./quest/ImagePic";
import { ColorPic } from "./quest/ColorPic";
import img2_1_1 from "./file/2_1/1.png";
import img2_1_2 from "./file/2_1/2.png";
import img2_1_3 from "./file/2_1/3.png";
import img2_1_4 from "./file/2_1/4.png";
import rebus1 from "./file/2_1/rebus1.png";
import { Rebus } from "./quest/Rebus";
import { Imgdrop } from "./quest/Imgdrop";
import { Select } from "./quest/Select";
import docter21 from "./file/2_1/docter.png";
import frends21 from "./file/2_1/frends.png";
import background2 from "./file/2_1/background2.png";
import background1 from "./file/1_1/bg1.png";
import { Dropword22 } from "./quest/DropWord22";
import select2 from "./file/2_2/2.png";
import i1 from "./file/2_2/i1.png";
import i2 from "./file/2_2/i2.png";
import i3 from "./file/2_2/i3.png";
import i4 from "./file/2_2/i4.png";
import i5 from "./file/2_2/i5.png";
import i6 from "./file/2_2/i6.png";
import i7 from "./file/2_2/i7.png";
import select3 from "./file/2_2/3.png";
import select4 from "./file/2_2/4.png";
import select5 from "./file/2_2/5.jpg";
import { SelectedWord } from "./quest/SelectedWord";
import { ColorWord } from "./quest/ColorWord";
import { Subsequence } from "./quest/Subsequence";
import select_1_1_1 from "./file/1_1/1.png";
import select_1_1_2 from "./file/1_1/9.png";
import select_1_1_13 from "./file/1_1/13.png";
import select_1_1_14 from "./file/1_1/14.png";
import sub_1_1_1 from "./file/1_1/11.png";
import mouse from "./file/mouse.png";
import sub_1_1_8 from "./file/1_1/1_1_12.png";
import { PickTrue } from "./quest/PickTrue";
import img_1 from "./file/2_1/imgd1.png";
import img2 from "./file/2_1/imgd2.png";
import img3 from "./file/2_1/imgd3.png";
import imgdrop1_2_1 from "./file/1_2/1.png";
import imgdrop1_2_2 from "./file/1_2/2.png";
import imgdrop1_2_3 from "./file/1_2/3.png";
import s1_2_4 from "./file/1_2/4.jpg";
import ip1_2_5 from "./file/1_2/5.jpg";
import ip1_2_6 from "./file/1_2/6.jpg";
import ip1_2_7 from "./file/1_2/7.jpg";
import ip1_2_8 from "./file/1_2/8.jpg";
import ip1_2_10 from "./file/1_2/10.png";
import ip1_2_11 from "./file/1_2/11.png";
import ip1_2_12 from "./file/1_2/12.png";
import ip1_2_13 from "./file/1_2/13.png";
import ip1_3_2_1 from "./file/1_3/2_1.png";
import ip1_3_2_2 from "./file/1_3/2_2.png";
import ip1_3_2_3 from "./file/1_3/2_3.png";
import ip1_3_3_1 from "./file/1_3/3_1.png";
import ip1_3_3_2 from "./file/1_3/3_2.png";
import ip1_3_3_3 from "./file/1_3/3_3.png";
import ip1_3_3_4 from "./file/1_3/3_4.png";
import ip1_3_4_1 from "./file/1_3/4_1.png";
import ip1_3_4_2 from "./file/1_3/4_2.png";
import ip1_3_4_3 from "./file/1_3/4_3.png";
import ip1_3_4_4 from "./file/1_3/4_4.png";
import ip1_3_4_5 from "./file/1_3/4_5.png";
import ip1_3_4_6 from "./file/1_3/4_6.png";
import ip1_3_5_1 from "./file/1_3/5_1.png";




const Zog_book = {
  titleimg: img1,
  id: "1",
  title: "ОБЖ и культура поведения",
  class: null,
  theme: [
    {
      title: "Первый раздел: Безопасность",
      bg: background1,
      class: [
        {
          title: "Тема №1. Ты пешеход",
          quests: [
            <Select
              quiz={
                "Кто такой пешеход? Выбери правильный ответ."
              }
              img={select_1_1_1}
              ans={[
                { q: "Это тот человек, который находится в транспортном средстве, но не является водителем.", cl: "text-dark" },
                { q: "Это тот человек, который управляет транспортным средством.", cl: "text-dark" },
                { q: "Это человек, который передвигается по дороге пешком.", cl: "text-dark" }
              ]}
              trueans={[false, false, true]}
              addCl={"font-weight-bolder text-success"}
            />,
            <Rebus
              quiz="Как называется часть дороги, предназначенная для движения пешеходов?"
              trueans={"ТРОТУАР"}
            />,
            <Select
              quiz={
                "Зачеркни те утверждения, которые неверны."
              }
              img={select_1_1_2}
              ans={[
                { q: "Пешеходы должны передвигаться по тротуарам, придерживаясь правой стороны.", cl: "text-dark" },
                { q: "Пешеходы должны передвигаться по тротуарам, придерживаясь левой стороны.", cl: "text-dark" },
                { q: "Если тротуаров нет, то нужно идти по обочине дороги по направлению движения транспортных средств.", cl: "text-dark" },
                { q: "Если тротуаров нет, то нужно идти по обочине дороги навстречу движущемуся транспорту.", cl: "text-dark" }

              ]}
              trueans={[false, true, true, false]}
              addCl={"font-weight-bolder perek"}
            />,
            <Select
              quiz={
                "В каких правилах поведения пешехода пропущено слово НЕЛЬЗЯ? Оставь только верные ответы, а остальные удали."
              }
              img={mouse}
              ans={[
                { q: "______ переходить проезжую часть на красный сигнал светофора.", cl: "text-dark" },
                { q: "______ переходить проезжую часть в установленном месте по пешеходному переходу.", cl: "text-dark" },
                { q: "______ перебегать проезжую часть перед движущимся транспортом.", cl: "text-dark" },
                { q: "______ переходить перекрёсток по пешеходным переходам.", cl: "text-dark" }

              ]}
              trueans={[false, true, false, true]}
              addCl={"font-weight-bolder text-white"}
            />,
            <Subsequence
              img={sub_1_1_1}
              trueans={["1", "6", "3", "5", "4", "2"]}
              arrans={["1", "", "", "", "", ""]}
              quiz="Укажи правильную последовательность действий при переходе улицы по нерегулируемому пешеходному переходу. Пронумеруй действия пешехода."
              ans={[
                "Подойдите к краю проезжей части.",
                "При отсутствии движущегося транспорта завершите переход дороги.",
                "Затем посмотрите налево.",
                "На середине проезжей части остановитесь и посмотрите направо.",
                "Если нет машин, дойдите до середины проезжей части.",
                "Оцените ситуацию на дороге и убедитесь, что нет приближающегося транспортного средства и движение будет безопасным."
              ]}
            />,
            <Select
              quiz={
                "Прочитай задание Дум Думыча, рассмотри рисунок к нему и выбери правильный ответ."
              }
              quiz2={"Ваня находится у нерегулируемого перекрёстка. Ему нужно перейти на другую сторону улицы, где его ждёт Аня. У Вани есть три способа это сделать. Каждый способ обозначен на рисунке стрелками разного цвета. Но какой способ выбрать, чтобы не нарушить правила дорожного движения, мальчик не знает. Помоги Ване сделать правильный выбор. Найди правильный вариант среди перечисленных и подчеркни его."}
              quiz3={"По правилам дорожного движения Ваня может перейти перекрёсток:"}
              img={sub_1_1_8}
              ans={[
                { q: "только так, как указано красными стрелками", cl: "text-dark" },
                { q: "только так, как указано синими стрелками", cl: "text-dark" },
                { q: "только так, как указано жёлтой стрелкой", cl: "text-dark" },
                { q: "так, как указано жёлтой и красной стрелкой", cl: "text-dark" },
                { q: "так, как указано синей и красной стрелкой", cl: "text-dark" },
                { q: "так, как указано жёлтой и синей стрелкой", cl: "text-dark" },
                { q: "любым способом из указанных выше", cl: "text-dark" }
              ]}
              trueans={[false, false, false, false, true, false, false]}
              addCl={"font-weight-bolder text-success"}
            />,
            <Select
              quiz={
                "Выбери все верные продолжения предложения. Закрась ячейки таблицы, в которых они записаны."
              }
              newquiz1={"Если в зоне видимости нет пешеходного перехода или перекрёстка, то перейти проезжую часть можно на участке, где …"}
              img={select_1_1_13}
              ansnew={[
                { q: "нет ограждений", cl: "text-dark" },
                { q: "есть ограждения", cl: "text-dark" },
                { q: "дорога хорошо просматривается хотя бы в одну сторону", cl: "text-dark" },
                { q: "дорога хорошо просматривается в обе стороны", cl: "text-dark" },
                { q: "нет движущихся машин рядом", cl: "text-dark" },
                { q: "есть движущийся вблизи транспорт", cl: "text-dark" },
              ]}
              newquiz2={"Если на улице нет пешеходного перехода, то её переходят …"}
              ans={[
                { q: "под прямым углом к обочине", cl: "text-dark" },
                { q: "наискосок", cl: "text-dark" },
                { q: "спокойно, не бегом", cl: "text-dark" },
                { q: "очень быстро, бегом", cl: "text-dark" }
              ]}

              trueans={[true, false, true, false, true, false, false, true, true, false]}
              addCl={"font-weight-bolder bg-success text-white"}
            />,
            <Rebus
              quiz="Что должно быть на одежде (обуви) или рюкзаке (сумке) у пешехода, если он движется по обочине или краю проезжей части вне населённого пункта в тёмное время суток? *Слово нужно записать в единственном числе."
              trueans={"ФЛИКЕР"}
            />,
            <Select
              quiz={
                "Прочитай. Выбери правильный ответ."
              }
              quiz2={"Ваня начал переходить дорогу на зелёный сигнал светофора. Когда он дошёл до середины проезжей части, сигнал светофора изменился на красный, и машины начали движение. Как Ваня должен поступить в такой ситуации?"}
              img={select_1_1_14}
              ans={[
                { q: "Продолжить движение и закончить переход дороги бегом.", cl: "text-dark" },
                { q: "Остановиться на островке безопасности или линии, разделяющей транспортные потоки противоположных направлений, и ждать зелёного сигнала светофора.", cl: "text-dark" },
                { q: "Вернуться обратно и ждать зелёного сигнала светофора.", cl: "text-dark" },
                { q: "Можно воспользоваться любым из названных выше вариантов действий.", cl: "text-dark" }
              ]}
              trueans={[false, true, false, false]}
              addCl={"font-weight-bolder bg-success text-white"}
            />,
            <PickTrue
              trueans={["Верно", "Верно", "Неверно"]}
              arrans={["Верно", "Неверно"]}
              quiz="Прочитай вопрос и ответы на него. Укажи возле каждого ответа, верный он или нет. Щелкни левой клавишей мыши на нужное слово."
              quiz2="Какими должны быть действия пешеходов при приближении транспортного средства с включённым проблесковым маячком синего цвета и специальным звуковым сигналом?"
              ans={[
                "При приближении такого транспортного средства пешеходы должны воздержаться от перехода проезжей части.",
                "При приближении такого транспортного средства пешеходы, находящиеся на проезжей части, должны незамедлительно освободить её и уступить дорогу этому транспортному средству.",
                "Требование уступить дорогу транспортному средству с включённым синим проблесковым маячком и специальным звуковым сигналом касается только водителей, на пешеходов это требование не распространяется, поэтому они могут спокойно переходить проезжую часть, соблюдая все меры предосторожности.",
              ]}
            />,
          ],
        },
        {
          title: "Тема №2.Сигналы светофора, регулировщика",
          quests: [
            <Imgdrop
              quiz={"Что означают сигналы светофора? Перенесите под каждый рисунок подходящую запись."}
              ans={[imgdrop1_2_1, imgdrop1_2_2, imgdrop1_2_3]}
              ansImg={true}
              col={4}
              arr={[
                [],
                [],
                [],
                [{ id: "1", content: "Запрещает движение, предупреждает о смене сигнала" }],
                [{ id: "2", content: "Запрещает движение" }],
                [{ id: "3", content: "Разрешает движение" }],
              ]}
              arrImg={false}
              trueans={["2", "1", "3"]}
              h={100}
            />,
            <PickTrue
              trueans={["Нет", "Да", "Да", "Нет"]}
              arrans={["Да", "Нет"]}
              quiz="Закрась (нажми) прямоугольник со словом «ДА», если утверждение верное, и прямоугольник со словом «НЕТ» – если неверное."
              ans={[
                "Если рядом нет движущихся машин, по улицу можно переходить на любой сигнал светофора.",
                "Светофоры для пешеходов могут не иметь жёлтого сигнала.",
                "Если сигнал светофора начал мигать, то это значит, что время его действия истекло и скоро будет включён другой сигнал.",
                "Если на светофоре постоянно мигает только жёлтый сигнал, то это значит, что светофор сломан.",
              ]}
            />,
            <Select
              quiz={
                "Можно ли переходить улицу, если на светофоре постоянно мигает только жёлтый сигнал?"
              }
              img={s1_2_4}
              ans={[
                { q: "Нельзя ни в каком случае.", cl: "text-dark" },
                { q: "Можно. Нужно только сначала внимательно осмотреться и пропустить движущийся транспорт.", cl: "text-dark" },
                { q: "Можно только в тёмное время суток.", cl: "text-dark" },
              ]}
              trueans={[false, true, false]}
              addCl={"font-weight-bolder text-success"}
            />,
            <ColorPic
                  ans={
                    "Какой перекрёсток считается регулируемым? Выдели правильный ответ синим цветом."
                  }
                  dec={"Сначала выбери цвет на палитре нажатием левой клавиши мыши, затем выдели выбранный ответ, нажав на нём левой клавишей мыши."}
                  arr={[
                    "Перекрёсток, на котором установлены дорожные знаки.",
                    "Перекрёсток, на котором есть светофор, который работает в нормальном режиме (красный – жёлтый – зелёный), или стоит регулировщик.",
                    "Только тот перекрёсток, где стоит регулировщик.",
                  ]}
                  trueans={["#fff", "#32adf0", "#fff"]}
                />,
            <ImagePic
                  imgArr={[ip1_2_5, ip1_2_6, ip1_2_7, ip1_2_8]}
                  trueans={[0,2,3]}
                  multi={true}
                  quiz="Выбери картинки, на которых изображены регулируемые перекрёстки."
                />,
            <Select
              quiz={
                "Прочитай вопрос Дум Думыча. Оставь только верные ответы, а остальные удали."
              }
              quiz2={"Иногда бывает так, что на перекрёстке рядом со светофором стоит регулировщик, и его указания противоречат сигналам светофора. Как в этом случае нужно действовать пешеходам?"}
              img={mouse}
              ans={[
                { q: "Нужно ориентироваться на сигналы светофора.", cl: "text-dark" },
                { q: "Нужно выполнять только указания регулировщика.", cl: "text-dark" },
                { q: "Сообщить регулировщику, что его сигналы противоречат сигналам светофора.", cl: "text-dark" },
                { q: "Нужно ориентироваться и на сигналы светофора, и на сигналы регулировщика.", cl: "text-dark" },
              ]}
              trueans={[true, false, true, true]}
              addCl={"text-white"}
            />,
            <Select
              quiz={
                "Рассмотри рисунок. Кто из пешеходов имеет право переходить улицу при данном сигнале регулировщика?"
              }
              img={ip1_2_10}
              ans={[
                { q: "Перейти улицу имеют право девочка и бабушка.", cl: "text-dark" },
                { q: "Перейти улицу имеют право мальчик и дедушка.", cl: "text-dark" },
                { q: "Перейти улицу имеют право дедушка и бабушка.", cl: "text-dark" },
                { q: "Перейти улицу имеют право мальчик и девочка.", cl: "text-dark" },
                { q: "Перейти улицу имеют право мальчик и бабушка.", cl: "text-dark" },
                { q: "Перейти улицу имеют право девочка и дедушка.", cl: "text-dark" },
                { q: "Никто из пешеходов не имеет право перейти улицу.", cl: "text-dark" },

              ]}
              trueans={[false, false, false,false,false,false, true]}
              addCl={"font-weight-bolder text-primary"}
            />,
            <Select
              quiz={
                "Рассмотри рисунок. Укажи всех пешеходов, которым разрешено переходить улицу при данном сигнале регулировщика?"
              }
              img={ip1_2_11}
              ans={[
                { q: "Бабушка", cl: "text-dark" },
                { q: "Девочка", cl: "text-dark" },
                { q: "Mальчик", cl: "text-dark" },
                { q: "Мужчина", cl: "text-dark" }
              ]}
              trueans={[true, false, true,false ]}
              addCl={"font-weight-bolder text-white bg-primary"}
            />,
            <Select
              quiz={
                "Рассмотри рисунок. Нарушает ли правила дорожного движения девочка, переходящая улицу?"
              }
              img={ip1_2_12}
              ans={[
                { q: "Да", cl: "text-dark" },
                { q: "Нет", cl: "text-dark" },
              ]}
              trueans={[false,true ]}
              addCl={"font-weight-bolder text-white bg-primary"}
            />,
            <Rebus
                  img={ip1_2_13}
                  quiz="Разгадай ребус, и узнаешь название города, в котором был установлен первый в мире светофор."
                  trueans={"ЛОНДОН"}
                />,
          ],
        },
        {
          title: "Тема №3. Дорожные знаки",
          quests: [
          //   <ColorPic
          //   ans={
          //     "Выдели верные утверждения синим цветом, неверные – красным."
          //   }
          //   dec={"Сначала выбери цвет на палитре нажатием левой клавиши мыши, затем выдели выбранный ответ, нажав на нём левой клавишей мыши."}
          //   arr={[
          //     "Без дорожных знаков невозможно безопасное движение по улицам и дорогам.",
          //     "Дорожные знаки делятся на несколько групп.",
          //     "Все дорожные знаки одинаковы по размеру, форме и величине.",
          //     "Знать дорожные знаки и следовать их указаниям обязаны только водители транспортных средств.",
          //   ]}
          //   trueans={["#32adf0", "#32adf0", "#f74f5a", "#f74f5a"]}
          // />,
          // <Imgdrop
          //     quiz={"Размести каждый знак в прямоугольнике под его названием."}
          //     dec={"Зажимай картинку левой клавишей мыши и перетаскивай в нужное место."}
          //     ans={["Место остановки такси", "Место остановки автобуса и (или) троллейбуса", "Место остановки трамвая"]}
          //     ansImg={false}
          //     col={4}
          //     arr={[
          //       [],
          //       [],
          //       [],
          //       [{ id: "1", content: ip1_3_2_1 }],
          //       [{ id: "2", content: ip1_3_2_2 }],
          //       [{ id: "3", content: ip1_3_2_3 }],
          //     ]}
          //     arrImg={true}
          //     trueans={["2", "1", "3"]}
          //     h={"20vw"}
          //   />,
          //   <ImagePic
          //         imgArr={[ip1_3_3_1, ip1_3_3_2, ip1_3_3_3, ip1_3_3_4]}
          //         trueans={[1]}
          //         quiz="Отметь запрещающий знак (нажми на нужную картинку)."
          //       />,
          // <ImagePic
          //         imgArr={[ip1_3_4_1, ip1_3_4_2, ip1_3_4_3, ip1_3_4_4, ip1_3_4_5, ip1_3_4_6]}
          //         trueans={[1,2,3,4]}
          //         quiz="Отметь знаки, которые не относятся к предупреждающим."
          //       />,
              //   <Emphas
              //     quiz="Под каждым знаком найди его название.
              // (кликни левой клавишей мыши по нужными словам)"
              //     ans={[
              //       {
              //         q: ip1_3_5_1,
              //         arr: ["Движение пешеходов запрещено", "Пешеходная дорожка", "Дети"],
              //       },
              //       {
              //         q: ip1_3_4_1,
              //         arr: ["Движение пешеходов запрещено", "Пешеходная дорожка", "Дети"],
              //       },
              //       {
              //         q: ip1_3_4_4,
              //         arr: ["Движение пешеходов запрещено", "Пешеходная дорожка", "Дети"],
              //       },
              //     ]}
              //     trueans={[1, 2, 0]}
              //     ansImg={true}
              //   />,
               <Imgdrop
              quiz={"Прочитай. Выбери знак, который соответствует описанию, и перенеси его в нужный прямоугольник."}
              dec={"Зажимай картинку левой клавишей мыши и перетаскивай в нужное место."}
              ans={["Этот знак указывает место, где находится пешеходный переход. Именно здесь нужно переходить дорогу.", 
              "Этот знак предупреждает водителя о том, что впереди будет пешеходный переход. Там, где установлен этот знак переходить улицу нельзя!"
            ]}
              ansImg={false}
              col={4}
              arr={[
                [],
                [],
                [{ id: "1", content: ip1_3_2_1 }],
                [{ id: "2", content: ip1_3_2_2 }],
                [{ id: "3", content: ip1_3_2_3 }],
              ]}
              arrImg={true}
              trueans={["2", "1", "3"]}
              h={"20vw"}
            />,
        ],
        },
        {
          title: "Тема №4",
          quests: [<Quest1 />, <Quest2 />],
        },
      ],
    },
    {
      title: "Второй раздел: Здоровье",
      bg: background2,
      class: [
        {
          title: "Тема №1. Основы ЗОЖ",
          quests: [
                <ImagePic
                  imgArr={[img2_1_1, img2_1_2, img2_1_3, img2_1_4]}
                  trueans={[0]}
                  multi={false}
                  quiz="Говорят, что организм здорового человека работает как ...
                Какое слово пропущено? Отметь подходящую картинку (нажми на неё)."
                />,
                <Arrow
                  quiz="Здоровье человека состоит из физического, психического, социального и духовного
            здоровья. Сопоставь каждое описание. (зажми левой клавишей мыши описание и перетяни его так, что бы описание было напротив правильно ответа."
                  ans={[
                    "Физическое здоровье",
                    "Психическое здоровье",
                    "Социальное здоровье",
                    "Духовное здоровье",
                  ]}
                  description={[
                    "Человек умеет управлять своим поведением,контролирует свои чувства и эмоции, спокоен",
                    "У человека нормальная температура тела, крепкий сон, хороший аппетит, ничего не болит",
                    "Человек способен сочувствовать, сопереживать, оказывать помощь другим людям, делать им добро бескорыстно",
                    "Человек доброжелателен, умеет правильно выстраивать отношения с родными, друзьями, учителями, уважительно относится к людям",
                  ]}
                  trueans={[
                    "У человека нормальная температура тела, крепкий сон, хороший аппетит, ничего не болит",
                    "Человек умеет управлять своим поведением,контролирует свои чувства и эмоции, спокоен",
                    "Человек доброжелателен, умеет правильно выстраивать отношения с родными, друзьями, учителями, уважительно относится к людям",
                    "Человек способен сочувствовать, сопереживать, оказывать помощь другим людям, делать им добро бескорыстно",
                  ]}
                />,
                <Emphas
                  quiz="Выдели слова, которые пропущены в этих пословицах.
              (кликни левой клавишей мыши по нужными словам)"
                  ans={[
                    {
                      q: "___ лучше всякого лекарства.",
                      arr: ["Торт", "Сон", "Плаванье", "Газировка"],
                    },
                    {
                      q: "Если хочешь быть здоров – ___.",
                      arr: ["Одевайся", "Не ленись", "Закаляйся", "Убирайся"],
                    },
                    {
                      q: "___ залог здоровья.",
                      arr: ["Чистота", "Аппетит", "Чтение", "Учёба"],
                    },
                  ]}
                  trueans={[1, 2, 0]}
                  ansImg={false}
                />,
                <Dropword />,
                <ColorPic
                  ans={
                    "Если утверждение верное, закрасьте ячейку таблицы с ответом зелёным цветом, если неверное – ячейку таблицы красным цветом. (цвета на палитре выбирай нажатием левой клавиши мыши; чтобы закрасить ячейку, нажми в ней левой клавишей мыши)"
                  }
                  arr={[
                    "Режим дня – это правильное распределение времени на сон, питание,работу и отдых.",
                    "Обязательно нужно мыть руки по приходу домой, до и после еды, после туалета.",
                    "Врач-офтальмолог занимается лечение зубов.",
                    "Длительность просмотра телевизора не должна превышать 4 часов подряд.",
                    "Делать прививки нужно строго по рекомендациям: между первой и последующими прививками должно пройти определенное время в зависимости от вида прививки.",
                  ]}
                  trueans={["#18d945", "#18d945", "#f74f5a", "#f74f5a", "#18d945"]}
                />,
                <Arrow
                  quiz="Найди к каждому описанию свою пословицу. (зажми левой клавишей мыши описание и перетяни его так, что бы описание было напротив правильно ответа."
                  description={[
                    "Пищу надо пережёвывать тщательно, чтобы желудку легче было её переварить, и она быстрее усвоится.",
                    "Так могут говорить о сильном и здоровом человеке.",
                    "Социальное здоровье",
                  ]}
                  ans={[
                    "На нём хоть воду вози",
                    "Быстрого да ловкого болезнь не догонит",
                    "Кто долго жуёт, тот долго живёт",
                  ]}
                  trueans={[
                    "Так могут говорить о сильном и здоровом человеке.",
                    "Социальное здоровье",
                    "Пищу надо пережёвывать тщательно, чтобы желудку легче было её переварить, и она быстрее усвоится.",
                  ]}
                />,
                <Rebus
                  img={rebus1}
                  quiz="Разгадай ребус и запиши, как называется процесс введения людям вакцин, препаратов, которые помогают сформировать иммунитет против многих инфекционных заболеваний."
                  trueans={"ВАКЦИНАЦИЯ"}
                />,
            <Imgdrop
              quiz={"Перенеси в каждый прямоугольник под описанием нужную картинку.(зажимай картинку левой клавишей мыши и перетаскивай в нужное место)"}
              ans={[
                "Ромашку применяют как успокаивающее, противоспалительное средство. Отваром ромашки полощут горло, например.",
                "Листья подорожника используют для заживления ран, порезов; а также – при укусах пчёл, ос и даже змей.",
                "Иван-чай (кипрей) заваривают как чай. Используют при многих заболеваниях, а также как успокоительное средство."
              ]}
              ansImg={false}
              col={4}
              arr={[
                [],
                [],
                [],
                [{ id: "1", content: img_1 }],
                [{ id: "2", content: img2 }],
                [{ id: "3", content: img3 }],
              ]}
              arrImg={true}
              trueans={["2", "3", "1"]}
              h={"20vw"}
            />,
            <Select
              quiz={
                "Что в себя включает понятие «Здоровый образ жизни»? Отметь это (нажми)."
              }
              img={docter21}
              ans={[
                { q: "Хорошее настроение", cl: "text-dark" },
                { q: "Соблюдение режима дня", cl: "text-dark" },
                { q: "Дружба с вредными привычками", cl: "text-dark" },
                { q: "Личная гигиена", cl: "text-dark" },
                { q: "Свежий воздух", cl: "text-dark" },
                { q: "Правильное питание", cl: "text-dark" },
                { q: "Подвижный образ жизни", cl: "text-dark" },
                { q: "Отказ от занятия спортом", cl: "text-dark" },
                { q: "Здоровый сон", cl: "text-dark" },
              ]}
              trueans={[true, true, false, true, true, true, true, false, true]}
              addCl={"font-weight-bolder text-success"}
            />,
            <Select
              quiz={
                "Хорошие дружеские отношения помогают сохранять здоровье. Если ты кого-то обидел, надо обязательно попросить прощение. А если обидели тебя, надо уметь прощать. На чём же строятся дружеские отношения? Зачеркни лишнее (нажми на это)."
              }
              img={frends21}
              ans={[
                { q: "Доверие", cl: "text-dark" },
                { q: "Уважение", cl: "text-dark" },
                { q: "Конфликты", cl: "text-dark" },
                { q: "Драки", cl: "text-dark" },
                { q: "Искренность", cl: "text-dark" },
                { q: "Взаимопонимание", cl: "text-dark" },
              ]}
              trueans={[false, false, true, true, false, false]}
              addCl={"font-weight-bolder perek"}
            />,
          ],
        },
        {
          title: "Тема №2. Гигиена тула и рук человека",
          quests: [
            <ColorPic
              ans={
                "Если утверждение верное, закрасьте ячейку таблицы с ответом зелёным цветом, если неверное – ячейку таблицы красным цветом. (цвета на палитре выбирай нажатием левой клавиши мыши; чтобы закрасить ячейку, нажми в ней левой клавишей мыши)"
              }
              arr={[
                "Необходимо стричь ногти по мере их отрастания.",
                "Умываться и принимать душ надо ежедневно.",
                "Менять нижнее бельё можно через день.",
                "Мыть руки перед едой надо обязательно.",
                "Полоскать рот и чистить зубы надо каждый раз после еды.",
              ]}
              trueans={["#18d945", "#18d945", "#f74f5a", "#18d945", "#f74f5a"]}
            />,
            <Dropword22 />,
            <Select
              quiz={
                "Подумай, какие три слова описывают понятие «опрятный человек». (нажми один раз левой клавиши мыши на слово)"
              }
              img={select2}
              ans={[
                { q: "Глупый", cl: "text-dark" },
                { q: "Чистый", cl: "text-dark" },
                { q: "Грязный", cl: "text-dark" },
                { q: "Грустный", cl: "text-dark" },
                { q: "Аккуратный", cl: "text-dark" },
                { q: "Веселый", cl: "text-dark" },
                { q: "Дурно пахнущий", cl: "text-dark" },
                { q: "Чистоплотный", cl: "text-dark" },
              ]}
              trueans={[false, true, false, false, true, false, false, true]}
              addCl={"font-weight-bolder text-success"}
            />,
            <ImagePic
              imgArr={[i1, i2, i3, i4, i5, i6, i7]}
              trueans={[0, 2, 3, 5, 6]}
              quiz="Что относится к предметам личной гигиены? Отметь нужные картинки (нажми на них)."
            />,
            <Select
              quiz={
                "Отметь ситуации, при которых нужно обязательно мыть руки. (нажми один раз левой клавиши мыши на вариант)"
              }
              img={select3}
              ans={[
                { q: "После посещения туалета", cl: "text-dark" },
                { q: "Перед принятием пищи", cl: "text-dark" },
                { q: "После чтения книги", cl: "text-dark" },
                { q: "После просмотра фильма", cl: "text-dark" },
                { q: "После разговора по телефону", cl: "text-dark" },
                { q: "После посещения общественных мест", cl: "text-dark" },
                { q: "Перед обработкой ран, порезов на коже", cl: "text-dark" },
                { q: "После возвращения домой с улицы", cl: "text-dark" },
                { q: "После ухода за больным членом семья", cl: "text-dark" },
              ]}
              trueans={[
                true,
                true,
                false,
                false,
                false,
                true,
                true,
                true,
                true,
              ]}
              addCl={"font-weight-bolder text-success"}
            />,
            <Select
              quiz={
                "ДИЗЕНТЕРИЯ – болезнь грязных рук. Признаки: повышение температуры, боль в животе, рвота, жидкий стул... Чтобы этого избежать, необходимо соблюдать правила личной гигиены. Ну а что же надо делать при признаках заболевания? (нажми один раз левой клавиши мыши на предложение)"
              }
              img={select4}
              ans={[
                { q: "Принять какие-нибудь лекарства", cl: "text-dark" },
                { q: "Больше пить воды и лежать", cl: "text-dark" },
                { q: "Обратиться к врачу", cl: "text-dark" },
                { q: "Обратиться к врачу", cl: "text-dark" },
              ]}
              trueans={[false, false, true, false]}
              addCl={"font-weight-bolder text-success"}
            />,
            <Select
              quiz={
                "Глядя на рисунок, повтори, как правильно мыть руки. Ниже прочти правила. Удали неверное правило. (нажми один раз левой клавиши мыши на предложение)"
              }
              img={select5}
              ans={[
                {
                  q: "Руки надо мыть тёплой, а не холодной или горячей водой",
                  cl: "text-dark",
                },
                {
                  q: "Нужно хорошо намыливать руки – с обеих сторон",
                  cl: "text-dark",
                },
                {
                  q: "Необходимо хорошо тереть руки друг о друга, уделяя внимание запястьям, пальцам, коже между пальцами и ногтям",
                  cl: "text-dark",
                },
                { q: "Мыло можно до конца не смывать", cl: "text-dark" },
                { q: "Руки надо мыть не менее 15 секунд", cl: "text-dark" },
              ]}
              trueans={[false, false, false, true, false]}
              addCl={"text-white"}
            />,
            <SelectedWord />,
            <ColorWord />,
            <ColorPic
              ans={
                "Если поступок хороший, закрасьте ячейку таблицы зелёным цветом, если плохой – ячейку таблицы красным цветом. (цвета на палитре выбирай нажатием левой клавиши мыши; чтобы закрасить ячейку, нажми в ней левой клавишей мыши)"
              }
              arr={[
                "Чистить зубы утром и вечером",
                "Умываться каждый день утром и вечером",
                "Не следить за чистотой одежды.",
                "Регулярно мыть голову и принимать душ.",
                "Регулярно подстригать ногти.",
                "Еженедельно менять нижнее бельё.",
                "Пользоваться чужими мочалкой, зубной щёткой, полотенцем.",
              ]}
              trueans={[
                "#18d945",
                "#18d945",
                "#f74f5a",
                "#18d945",
                "#18d945",
                "#f74f5a",
                "#f74f5a",
              ]}
            />,
          ],
        }
      ],
    },
    {
      title: "Третий раздел: Культура поведения",
      bg: background2,
      class: [],
    },
  ],
};

export const DATA = [Zog_book];
