import './index.scss';

interface IProps {
    children: JSX.Element,
    title: string,
    subtitle: string
}

export default function Comp(props: IProps) {
    return (
        <div className="comp">
            <h1 className="comp-title">{props.title || "Unkwown component"}</h1>
            <p className="comp-subtitle">{props.subtitle || ""}</p>
            {props.children}
        </div>
    )
}