import { useState, createContext, useContext } from "react"


export const Notification = ({type, text}) => {

    const notificationStyle = {
        position: `absolute`,
        top: 50,
        right: 50,
        backgroundColor: type === `succes` ? `green` : `red`,
        color: `white`,
        padding: `10px 20px 10px 20px`,
        borderRadius: 10
    }

    if (!text) return 

    return (
        <div style={notificationStyle}> 
            {text}
        </div>
    )
}

const NotificationContext = createContext ()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState ({
        type: `succes`,
        text: ``
    })

    const setNotification = (type, text) => {
        setNotificationData ({ type, text })

        setTimeout (() => {
            setNotificationData ({type: `succes`, text: ""})
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification {...notificationData}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext (NotificationContext)
}