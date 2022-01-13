import Image from "next/image";
import style from './BlockSelect.module.css'
import imgAdult from '../../assets/img/heder/image 48.jpg';
import imgKids from '../../assets/img/heder/image 49.jpg';
import Buttons from "../Buttons/Buttons";
import {useState} from "react";

export default function BlockSelect(): JSX.Element {
    const [toggleStatus, setToggleStatus] = useState<string>('Взрослый')
    const bgStatus = toggleStatus === 'Взрослый'? `${style.statusIng} ${style.Adult}`:
        `${style.statusIng} ${style.Kid}`

    const onToggleStatus = (e:string):void => {
        setToggleStatus(e)
    }

    return(
        <div className={style.container}>
            <h1 className={style.header}>А вдруг СМА?</h1>
            <p className={style.description}>Выберите, кто Ваш пациент:</p>
            <div className={style.wrapperChoice}>
                <div>
                    <h2 className={style.choiceHeader}> Взрослый </h2>
                    <div className={style.wrapImg}>
                        <Image src={imgAdult} width={300} height={300} alt="Взрослый"
                               onClick={(e) => onToggleStatus(e.currentTarget.alt)}
                        />
                    </div>
                    <div className={style.wrapDescription}>
                        <p className={style.choiceDescription}>Менее тяжелые формы СМА могут возникать и
                            диагностироваться в зрелом возрасте.</p>
                        <p className={style.choiceDescription}>По сравнению с СМА у детей, СМА у взрослых может
                            иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа
                            неуклонно теряют двигательные навыки.</p>
                        <p className={style.choiceDescription}>По сравнению с СМА в детстве, течение СМА у взрослых
                            может быть более коварным и трудным для распознавания.</p>
                    </div>
                </div>
                <div>
                    <h2 className={style.choiceHeader}> Ребенок </h2>
                    <div className={style.wrapImg}>
                        <Image src={imgKids} width={300} height={300} alt="Ребенок"
                               onClick={(e) => onToggleStatus(e.currentTarget.alt)}
                        />
                    </div>
                    <div className={style.wrapDescription}>
                        <p className={style.choiceDescription}>Ребенок, плохо удерживающий голову, когда ему придают
                            сидячее положение, с вялыми
                            движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
                            осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
                            в отношении наличия СМА.
                        </p>
                        <p className={style.choiceDescription}>Младенцам со СМА необходимо экстренное направление к
                            специалисту, ранняя диагностика и обеспечение
                            терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
                            дегенерации при прогрессировании заболевания</p>
                    </div>
                </div>
            </div>
            <div className={style.wrapperBtn}>
                <div className={style.wraperHeaderDescrBtn}>
                    <p className={style.descrBtn}>Сообщает ли один из ваших пациентов о следующих симптомах?</p>
                    <span className={style.descrBtnSmall}>(нажмите на любую иконку и узнайте больше)</span>
                </div>
                <div className={style.choiceStatus}>
                    <div className={bgStatus}/>
                    <p className={style.headerStatus}>{toggleStatus}</p>
                </div>
                <Buttons/>
            </div>
        </div>
    )
}