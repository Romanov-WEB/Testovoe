import Image from "next/image";
import ListProps from "./List.props";
import style from './List.module.css'
import React, {useState} from "react";

export default function List(props: ListProps): JSX.Element {
    let {img, text} = props;
    const [toggle, setToggle] = useState<boolean>(false)
    const styleToggle = toggle? `${style.textList} ${style.show}`: `${style.textList} ${style.hidden}`

    const onToggleDescription = (): void => {
        setToggle(!toggle)
    }
    return <>
        <li className={style.itemBtn} >
            <div
                onClick={onToggleDescription}
                className={style.itemImg}
            >
                <Image
                    src={img}
                    width={111}
                    height={110}
                    alt="icon"
                />
            </div>
            <p
                className={styleToggle}
            >{text}</p>
        </li>
    </>
}