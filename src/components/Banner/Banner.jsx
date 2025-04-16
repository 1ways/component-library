import clsx from 'clsx'

import errorIcon from './icons/error-icon.svg'
import neutralIcon from './icons/neutral-icon.svg'
import warningIcon from './icons/warning-icon.svg'
import successIcon from './icons/success-icon.svg'

export default function Banner({style, title, text}) {
    const bannerClass = clsx('banner', style)

    let icon = ''
    
    if (style === 'error') {
        icon = errorIcon
    } else if (style === 'neutral') {
        icon = neutralIcon
    } else if (style === 'warning') {
        icon = warningIcon
    } else {
        icon = successIcon
    }
    

    return (
        <div className={bannerClass}>
            <img className='banner__icon' src={icon} alt={style} />
            <div className="banner__body">
                <p className="banner__body-title">{title}</p>

                {text && (
                    <p className="banner__body-text">{text}</p>
                )}
            </div>
        </div>
    )
}