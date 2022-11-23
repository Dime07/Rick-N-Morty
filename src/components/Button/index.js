export default function Button(props){
    console.log(props)
    const button = {
        width: '10%',
        display: 'flex',
        padding: '6px',
        backgroundColor: '#00B0C8',
        borderRadius : '8px',
        color: 'white',
        fontWeight: '600',
        margin: props.margin,
        cursor: 'pointer'
    }
    return(
        <div style={button}>
            <p style={{margin: 'auto'}}>
                {props.title}
            </p>
        </div>
    )
}