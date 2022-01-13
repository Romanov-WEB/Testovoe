import List from "../List/List";

import style from './Buttons.module.css'

import img1 from '../../assets/img/Button/Рисунок1.svg';
import img2 from '../../assets/img/Button/Рисунок2.png';
import img3 from '../../assets/img/Button/Рисунок3.png';
import img4 from '../../assets/img/Button/Рисунок4.png';
import img5 from '../../assets/img/Button/Рисунок5.png';
import img6 from '../../assets/img/Button/Рисунок6.png';
import img7 from '../../assets/img/Button/Рисунок7.png';
import img8 from '../../assets/img/Button/Рисунок8.svg';

interface Data {
    img: StaticImageData
    text: string
}

export default function Buttons(): JSX.Element {
    const ArrayImg: Array<Data> = [{img: img1, text: 'Сколиоз'}, {img: img2, text: 'Утомляемость'}, {
        img: img3,
        text: 'Вывих бедра'
    },
        {img: img4, text: 'Контрактура суставов'}, {img: img5, text: 'Неспособность бегать, изменение походки'},
        {img: img6, text: 'Дыхательная недостаточность/ респираторная дисфункция'}, {
            img: img7,
            text: 'Нарушения жевания и глотания'
        },
        {
            img: img8, text: 'Ограниченная способность поднимать руки \n' +
                'и переносить предметы'
        }];

    const items = ArrayImg.map((item, index) => {
        return <List key={index} img={item.img} text={item.text}/>
    })
    return <ul className={style.btns}>
        {items}
    </ul>
}