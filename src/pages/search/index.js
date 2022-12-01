import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button";
import CardCharacter from "../../components/CardCharacter";
import axios from "axios";

export default function Search() {
    const [character, setCharacter] = useState([]);
    const [key, setKey] = useState('')

    const searchCharacter = () => {
        axios
        .get(`https://rickandmortyapi.com/api/character/?name=${key}`)
        .then((res) => {
            setCharacter(res.data.results)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <section style={{display: 'flex', flexDirection: 'column', padding: '20px 210px'}}>
            <div style={{display: 'flex'}}>
                <TextInput placeholder='Search Character' onChange={(e) => setKey(e.target.value)}/>
                <div onClick={() => searchCharacter()}>
                    <Button title='Search' margin='18px 0px 0px 12px'/>
                </div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
                {character.length === 0 ? 
                    (
                        <>
                            <h2 style={{margin: '12px auto'}}>There is no data, search character</h2>
                        </>
                    ) :
                    (
                        <>
                            {character.map((item, index) => (
                                <CardCharacter data={item} margin="20px 0 0 0"/>
                            ))}
                        </>
                    )
                }
            </div>
        </section>
    )
}