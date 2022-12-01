export default function Button(props){

    const button = {
        width: 'fit-content',
        display: 'flex',
        padding: '6px 12px',
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