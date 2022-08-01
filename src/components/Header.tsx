import { FunctionComponent, MouseEventHandler } from 'react'

type Props = {
    onClick: MouseEventHandler<HTMLDivElement>
}

const Header: FunctionComponent<Props> = ({ onClick }) => {

    const ChevronStyle = {
        height: "40px",
        width: "20px",
    } as React.CSSProperties

    return (
        <div className="d-flex flex-row position-relative py-2 px-4 border-bottom align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
                <div style={ChevronStyle} className="pt-1" onClick={onClick} role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" /></svg>
                </div>
                <div className="text-start fs-4 fw-bold px-4">Yee Choong</div>
            </div>
        </div>

    )
}

export default Header


