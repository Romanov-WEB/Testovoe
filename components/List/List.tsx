import Image from "next/image";
import ListProps from "./List.props";
import style from './List.module.css'

export default function List(props: ListProps): JSX.Element {
    let {img, text} = props;
    return <>
        <li className={style.itemBtn}>
            <div
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
                className={style.textList}
            >{text}</p>
        </li>
    </>
}