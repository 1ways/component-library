import quoteIcon from './images/quote.svg'

export default function Testimonials({img, children, author, occupation}) {
    return (
        <div className="testimonials">
            <div className="testimonials__inner">
                <div className="testimonials__picture">
                    <img className="testimonials__picture-img" src={img} alt={`Image of ${author}`} />
                </div>
                <div className="testimonials__content">
                    <div className="testimonials__quote">
                        <img className='testimonials__quote-icon' src={quoteIcon} alt="quote icon" />
                    </div>
                    <p className="testimonials__content-text">{children}</p>
                    <p className="testimonials__content-author">{author}</p>
                    <p className="testimonials__content-occ">{occupation}</p>
                </div>
            </div>
        </div>
    )
}