import rick from "../../assets/rick.jpg"

export default function DetailCharacter(){

    const profile = {
        width: '200px',
        height: '200px',
        borderRadius: '100%',
        margin: '0 auto',
        backgroundImage: `url(${rick})`,
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
    return(
        <section style={{ display: 'flex', flexDirection: 'column', padding: '20px 210px'}}>
            <div style={profile}>
            </div>
            <h1 style={{title, textAlign: 'center'}}>
                Name of Character
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
                            Name of Character
                        </p>
                    </div>
                    <div style={textWrap}>
                        <p style={title}>
                            Gender
                        </p>
                        <p style={subtitle}>
                            Male
                        </p>
                    </div>
                    <div style={textWrap}>
                        <p style={title}>
                            Status
                        </p>
                        <p style={subtitle}>
                            Alive
                        </p>
                    </div>
                    <div style={textWrap}>
                        <p style={title}>
                            Species
                        </p>
                        <p style={subtitle}>
                            Alien
                        </p>
                    </div>
                    <div style={textWrap}>
                        <p style={title}>
                            Type
                        </p>
                        <p style={subtitle}>
                            Parasite
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}