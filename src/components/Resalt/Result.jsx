import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPlusStep } from "../Redux/slices/questionSlice";

import hrub1 from "../../assets/img/hrub1.jpg";
import hrub2 from "../../assets/img/hrub2.jpg";
import hrub3 from "../../assets/img/hrub3.jpeg";
import hrub4 from "../../assets/img/hrub4.jpg";
import hrub5 from "../../assets/img/hrub5.jpg";
import hrub6 from "../../assets/img/hrub6.jpg";

export const Result = () => {
  const step = useSelector((state) => state.question.step);
  const value = useSelector((state) => state.question.value);
  const dispatch = useDispatch();
  return (
    <div className="result">
      <h2>Який ти їстивний гриб?</h2>
      <div className="result_final">
        {value < 5 ? (
          <div>
            <div>
              "Маслюк слизький. Росте у модринових лісах; у липні — жовтні.
              Добрий їстівний гриб. Використовують свіжим. М'якуш у шапці білий,
              з часом брудно-білий, у ніжці жовтуватий, згодом коричнюватий, при
              розрізуванні на повітрі над пластинками та в ніжці стає
              брудно-синюватим, запах і смак приємні."
            </div>
            <img className="result_finalImg" src={hrub1} alt="Маслюк" />
          </div>
        ) : value < 10 ? (
          <div>
            <div>
              "Маслюк зернистий. Дуже добрий їстівний гриб другої категорії,
              проте швидко псується. Використовують свіжим, про запас сушать,
              солять, маринують."
            </div>
            <img className="result_finalImg" src={hrub2} alt="Маслюк" />
          </div>
        ) : value < 16 ? (
          <div>
            <div>
              "Білий гриб. Найкращий з відомих їстівних грибів. Зустрічається по
              всій Україні. Росте у листяних (під дубом, буком, грабом, березою,
              ліщиною) і хвойних (під сосною, ялиною) лісах. Трапляється як
              опецькуватий, часто з шапкою меншою від ніжки, так і крисатий, з
              шапкою учетверо більшою за ніжку."
            </div>
            <img className="result_finalImg" src={hrub3} alt="Маслюк" />
          </div>
        ) : value < 20 ? (
          <div>
            <div>
              "Сироїжка світло-жовта. Спорова маса жовта-вохряна. Спори 8-10 Х
              7-8 мкм, шипасті. Ніжка 5-9 Х 2-2 см, донизу злегка потовщена,
              білувата, з віком сіріє, щільна. М'якуш солодкий, білий, при
              розрізуванні сіріє, з приємним запахом. Зустрічається по всій
              Україні в листяних лісах (переважно під березою та вільхою), на
              вогких місцях; у червні — вересні"
            </div>
            <img className="result_finalImg" src={hrub4} alt="Маслюк" />
          </div>
        ) : value < 24 ? (
          <div>
            <div>
              "Підвишень. Зустрічається по всій Україні: у листяних і мішаних
              лісах, на галявинах, у садах, на трав'янистих місцях. Спорова маса
              рожева. Спори 10-14 Х 5-6 мкм, рожеві, веретеноподібно-овальні, з
              поздовжніми 5-7 гранями. Ніжка 3,6 Х 0,8-2 см, щільна, іноді
              ексцентрична, білувата, згодом кольору шапки, біля основи
              білоповстиста. М'якуш білий, приємний на смак, пахне щойнозмеленим
              борошном."
            </div>
            <img className="result_finalImg" src={hrub5} alt="Маслюк" />
          </div>
        ) : (
          <div>
            <div>
              "Печериця садова. М'якуш білий, щільний, при розрізуванні
              червоніє, у сухих плодових тіл м'якуш червонувато-бежевий.
              Американський вчений Їнонг Янг (англ. Yinong Yang) з Університету
              штату Пенсильванія за допомогою технологі CRISPR-Cas9 вніс зміни
              до ДНК печериці садової, що запобігає потемнінню плодових тіл при
              механічному ушкодженні."
            </div>
            <img className="result_finalImg" src={hrub6} alt="Маслюк" />
          </div>
        )}
      </div>
      <Link to="/testHrub">
        <button className="button" onClick={dispatch(setPlusStep(step * 0))}>
          Рестарт
        </button>
      </Link>
    </div>
  );
};
