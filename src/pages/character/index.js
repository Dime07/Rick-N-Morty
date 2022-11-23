import HeaderImage from '../../assets/character.png'
import TextInput from '../../elements/TextInput'
import CardCharacter from '../../components/CardCharacter'
import Button from '../../components/Button'
export default function Character(){

    const imageHeader = {
        margin: '0 auto',
        width: '600px',
        height: '100%'
    }


    return(
        <section style={{display: 'flex', flexDirection: 'column', padding: '20px 210px'}}>
            <img src={HeaderImage} alt="header" style={imageHeader}/>
                {/* ini untuk search */}
                <div style={{display: 'flex'}}>
                    <TextInput placeholder='Filter By Name'/>
                    <Button title='Search' margin='18px 0px 0px 12px'/>
                </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
                {/* foreach card disini */}
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
            </div>
        </section>
    )
}