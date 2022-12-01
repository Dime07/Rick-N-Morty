import HeaderImage from '../../assets/character.png'
import TextInput from '../../components/TextInput/TextInput'
import CardCharacter from '../../components/CardCharacter'
import Button from '../../components/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Character(){

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        getAllCharacter();
    }, [])

    const getAllCharacter = () => [
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then((res) => {
            setCharacter(res.data.results)
        })
        .catch((err) => {
            console.log(err)
        })
    ]
    

    const imageHeader = {
        margin: '0 auto',
        width: '600px',
        height: '100%'
    }


    return(
        <section style={{display: 'flex', flexDirection: 'column', padding: '20px 210px'}}>
            <img src={HeaderImage} alt="header" style={imageHeader}/>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
                {character.map((item, index) => (
                    <CardCharacter data={item} margin="20px 0 0 0"/>
                ))}
            </div>
        </section>
    )
}