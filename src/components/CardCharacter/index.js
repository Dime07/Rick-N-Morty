import rick from "../../assets/rick.jpg"
import { Link } from 'react-router-dom'

export default function CardCharacter(){

    const card = {
        display: 'flex',
        flexDirection: 'column',
        width: 'calc((100% / 3) - 24px)',
        marginTop: '20px',
        borderRadius: '8px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }

    const title = {
        fontSize: '20px',
        fontFamily :'Roboto',
        fontWeight: '600',
        margin: '0',
        marginTop: '6px'
    }

    const description = {
        fontSize: "14px",
        margin: '0',
        fontFamily :'roboto',
        marginTop: '8px'
    }
    

    return (
        <div style={card}>
            <img src={rick} alt="character"/>
            <div style={{padding: '10px'}}>
                <h4 style={title}>
                    Rick Sanchez
                </h4>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={description}>
                        Human
                    </p>
                    <Link to='/detail-character'>
                        <p style={description}>
                            Detail
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}