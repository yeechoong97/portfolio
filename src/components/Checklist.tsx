import { FunctionComponent } from 'react'

type Props = {
    objectives: string[]
}

const Checklist: FunctionComponent<Props> = ({ objectives }) => {
    return (
        <>
            <div className='list-group fs-summary mt-3'>
                <label className="list-group-item d-flex flex-column justify-content-center align-items-start">
                    {objectives.map((element: string) =>
                        <div className="d-flex flex-row justify-content-start mt-1" key={element}>
                            <input className="form-check-input me-1" type="checkbox" value="" checked readOnly />
                            <div className='ms-1'>{element}</div>
                        </div>
                    )}
                </label>
            </div>
        </>
    )
}

export default Checklist