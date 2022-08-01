import { FunctionComponent, MouseEventHandler } from 'react'
import '../css/about.css';

type Props = {
    onClick: MouseEventHandler<HTMLDivElement>,
    active?: boolean,
    title: string
}

const RowButton: FunctionComponent<Props> = ({ title, active, onClick }) => {
    return (
        <>
            <div className={`${active ? "bg-active" : "bg-light"} rounded-3 shadow w-75 align-self-center my-1 d-flex flex-row justify-content-between row-btn`} onClick={onClick}>
                <div className={`${active ? "text-white" : "text-dark"} fw-light fs-6 px-3 py-2 child-row`}>{title}</div>
                <i className={`${active ? "text-white" : "text-dark"} fa fa-chevron-right py-2 px-3 mt-1 child-row`}></i>
            </div>
        </>
    )
}

export default RowButton
