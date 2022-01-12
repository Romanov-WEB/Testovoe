import Image from "next/image";
import ListProps from "./List.props";

const List = ({img, text}:ListProps):JSX.Element => {
    return <>
        <li>
            <Image
                src={img}
                width={111}
                height={110}
            />
            <p>{text}</p>
        </li>
    </>
}
export default List