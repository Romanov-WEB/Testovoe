import Image from "next/image";
import List from "../List/List";
import imgAdult  from '../../assets/img/heder/image 48.jpg';
import imgKids  from '../../assets/img/heder/image 49.jpg';
import img1 from '../../assets/img/Button/Рисунок1.png';
import img2 from '../../assets/img/Button/Рисунок2.png';
import img3 from '../../assets/img/Button/Рисунок3.png';
import img4 from '../../assets/img/Button/Рисунок4.png';
import img5 from '../../assets/img/Button/Рисунок5.png';
import img6 from '../../assets/img/Button/Рисунок6.png';
import img7 from '../../assets/img/Button/Рисунок7.png';
import img8 from '../../assets/img/Button/Рисунок8.png';

const SelectPatients = ():JSX.Element => {
    const ArrayImg = [{ img: img1, text:'Сколиоз'}, {img: img2, text:'Утомляемость'}, { img:img3, text:'Вывих бедра'},
    { img:img4, text:'Контрактура суставов'}, { img:img5, text:'Неспособность бегать, изменение походки'},
        { img:img6, text:'Дыхательная недостаточность/ респираторная дисфункция'}, { img:img7, text:'Нарушения жевания и глотания'},
            { img:img8, text:'Ограниченная способность поднимать руки \n' +
        'и переносить предметы'}];

    const items = ArrayImg.map((item, index) => {
        return <List key={index} img={item.img} text={item.text} />
    })
    return <section className='container'>
        <div className='wrapper-header'>
            <h1 className='header'>А вдруг СМА?</h1>
            <p className='description'>Выберите, кто Ваш пациент:</p>
        </div>
        <div className='wrapper-choice'>
            <div className='wrapper-choice'>
                <h2 className='choice-header'> Взрослый </h2>
                <Image className='choice-img' src={imgAdult} width={300} height={300} />
                <p className='choice-description'>Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.</p>
                <p className='choice-description'>По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.</p>
                <p className='choice-description'>По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.</p>
            </div>
            <div className='wrapper-choice'>
                <h2 className='choice-header'> Ребенок </h2>
                <Image src ={imgKids} width={300} height={300} />
                <p className='choice-description'>Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
                    движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
                    осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
                    в отношении наличия СМА.
                </p>
                <p className='choice-description'>Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
                    терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
                    дегенерации при прогрессировании заболевания</p>
            </div>
            <div>
                <p>Сообщает ли один из ваших пациентов о следующих симптомах? <span>(нажмите на любую иконку и узнайте больше)</span></p>
                <Image src={imgAdult} width={300} height={300} />
                <span>Взрослый</span>
                <ul>
                    {items}
                </ul>
            </div>
        </div>
    </section>
}
export default SelectPatients