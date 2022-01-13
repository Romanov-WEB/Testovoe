import List from "../List/List";
import style from './Buttons.module.css'
import img1 from '../../assets/img/Button/Group01.png';
import img2 from '../../assets/img/Button/Group02.png';
import img3 from '../../assets/img/Button/Group03.png';
import img4 from '../../assets/img/Button/Group04.png';
import img5 from '../../assets/img/Button/Group05.png';
import img6 from '../../assets/img/Button/Group06.png';
import img7 from '../../assets/img/Button/Group07.png';
import img8 from '../../assets/img/Button/Group08.png';

interface Data {
    img: StaticImageData
    text: string
}

export default function Buttons(): JSX.Element {
    const ArrayImg: Array<Data> = [
        {img: img2, text: 'Утомляемость'}, {img: img1, text: 'Сколиоз'},
        {img: img8, text: 'Ограниченная способность поднимать руки и переносить предметы'},
        {img: img7, text: 'Нарушения жевания и глотания'},
        {img: img6, text: 'Дыхательная недостаточность/ респираторная дисфункция'},
        {img: img5, text: 'Неспособность бегать, изменение походки'},
        {img: img4, text: 'Контрактура суставов'},
        {img: img3, text: 'Вывих бедра'},
    ];

    const items = ArrayImg.map((item, index) => {
        return <List key={index} img={item.img} text={item.text}/>
    })
    return <ul className={style.btns}>
        {items}
    </ul>
}