import rick from "../../assets/rick.jpg"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import Button from "../Button"

export default function CardCharacter(props){

    const [data, setData] = useState(props.data)
    const navigate = useNavigate();

    const card = {
        display: 'flex',
        flexDirection: 'column',
        width: 'calc((100% / 3) - 24px)',
        margin: props.margin,
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
            <img src={data.image} alt="character"/>
            <div style={{padding: '10px'}}>
                <h4 style={title}>
                    {data.name}
                </h4>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={description}>
                        {data.species}
                    </p>
                </div>
                <div onClick={() => navigate('/detail-character' , { state: { detail: data } } )}>
                    <Button title='Detail' margin='12px 0 0 0'/>
                </div>
            </div>
        </div>
    )
}