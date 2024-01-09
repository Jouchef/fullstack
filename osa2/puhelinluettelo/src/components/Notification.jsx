const Notification = ({ message }, style) => {

    const notificationStyle = {
        fontStyle: 'italic',
        fontSize: 16,
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5

    }
    
    
    const successStyle = {
      ...notificationStyle, 
      color: 'green',
      borderColor: 'green'
    }
    const errorStyle = {
      ...notificationStyle,
      color: 'red',
      BorderColor: 'red'
    }

    const spesifiedStyle = message && message.includes('Error') ? errorStyle : successStyle;


    if (message === null) {
      return null
    }
  
    return (
      <div className="error" style={spesifiedStyle}>
        {message}
      </div>
    )
  }

export default Notification 