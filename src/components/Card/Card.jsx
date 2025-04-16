import cloudIcon from '../../assets/images/cloud-icon.svg'

export default function Card({icon, title, children, iconBgColor}) {

    let cardIcon = null

    if (typeof icon === 'string') {
        cardIcon = <img className='card__icon-img' src={icon} alt='Card icon' />
    } else {
        cardIcon = icon
    }

    return (
        <div className="card">
            <div className="card__icon" style={{ backgroundColor: iconBgColor || '#3F75FE' }}>
                {icon ? (
                    cardIcon
                ) : (
                    <img className='card__icon-img' src={cloudIcon} alt='Cloud icon' />
                )}
            </div>
            <p className="card__title">{title}</p>
            <p className="card__text">{children}</p>
        </div>
    )
}