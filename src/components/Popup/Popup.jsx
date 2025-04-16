import { useContext, useEffect } from 'react'

import clsx from 'clsx'
import { PopupContext } from '../../App'

import successIcon from './icons/success-icon.svg'
import infoIcon from './icons/info-icon.svg'
import errorIcon from './icons/error-icon.svg'
import warningIcon from './icons/warning-icon.svg'

export default function Popup({type, title, children}) {
    const { isPopupShowed, hidePopup } = useContext(PopupContext)

    const popupClass = clsx('popup', type, isPopupShowed && 'show')

    let icon = null

    if (type === 'success') {
        icon = successIcon
    } else if (type === 'info') {
        icon = infoIcon
    } else if (type === 'error') {
        icon = errorIcon
    } else {
        icon = warningIcon
    }

    useEffect(() => {
        let timeout

        if (isPopupShowed) {
            timeout = setTimeout(hidePopup, 1000)
        }

        return () => clearTimeout(timeout)  
    }, [isPopupShowed])

    return (
        <div className={popupClass}>
            <img className="popup__icon" src={icon} alt={`${type} icon`} />
            <div className="popup__content">
                <p className="popup__title">{title}</p>
                {children && (
                    <p className="popup__text">{children}</p>
                )}
            </div>
        </div>
    )
}