import rick from "../../assets/rick.jpg"
import { useLocation } from "react-router-dom"
import CardCharacter from "../../components/CardCharacter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DetailCharacter(){

    const {state} = useLocation();
    const { detail } = state;
    const [otherVariance, setOtherVariance] = useState([])

    useEffect(() => {
        getOtherVariance()
    }, [])

    const getOtherVariance = () => {
        axios
        .get(`https://rickandmortyapi.com/api/character/?name=${detail.name}`)
        .then((res) => {
            console.log(res.data.results)
            setOtherVariance(res.data.results)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    

    const profile = {
        width: '200px',
        height: '200px',
        borderRadius: '100%',
        margin: '0 auto',
        backgroundImage: `url(${detail.image})`,
        backgroundSize: 'cover',
        backgorundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    const title = {
        fontFamily: 'Roboto',
        fontWeight: '600',
        margin: '0',
        marginBottom: '5px'
    }

    const subtitle = {
        fontFamily: 'Roboto',
        margin: '0'
    }

    const textWrap = {
        marginBottom: '10px',
        borderBottom : '0.5px solid #8E8E93',
        paddingBottom: '10px'
    }

    const scrollDiv = {
        width: '100%',
        display: "flex",
        overflowX: 'scroll'
    }
    return(
        <section style={{ display: 'flex', flexDirection: 'column', padding: '20px 210px'}}>
            <div style={profile}>
            </div>
            <h1 style={{title, textAlign: 'center'}}>
                {detail.name}
            </h1>
            <div>
                <div >
                    <h4 style={{fontFamily: 'Roboto', fontSize: '18px', color: '#8E8E93'}}>
                        Information
                    </h4>
                    <div style={textWrap}>
                        <p style={title}>
                            Name
                        </p>
                        <p style={subtitle}>
                            {detail.name}
                        </p>
                    </div>
                    <div style={textWrap}>
                        <p style={title}>
                            Gender
                        </p>
                        <p style={subtitle}>
                            {detail.gender}
                        </p>
                    </div>
                    <div style={textWrap}>
                        <p style={title}>
                            Status
                        </p>
                        <p style={subtitle}>
                            {detail.status}
                        </p>
                    </div>
                    <div style={textWrap}>
                        <p style={title}>
                            Species
                        </p>
                        <p style={subtitle}>
                            {detail.species}
                        </p>
                    </div>
                    <div style={textWrap}>
                        <p style={title}>
                            Type
                        </p>
                        <p style={subtitle}>
                            {detail.type ===  "" ? "-" : detail.type}
                        </p>
                    </div>
                </div>
            </div>
            <h4 style={{fontFamily: 'Roboto', fontSize: '18px', color: '#8E8E93'}}>
                Another Variance
            </h4>
            <div className="scroll" style={scrollDiv}>
                {otherVariance.map((item, index) => (
                    <CardCharacter data={item} margin="20px 16px 0 0"/>
                ))}
            </div>
            
        </section>
    )
}