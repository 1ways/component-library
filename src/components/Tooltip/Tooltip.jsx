import { useState } from 'react';
import clsx from 'clsx'

import { RxCross2 } from "react-icons/rx";
import { TbInbox } from "react-icons/tb";

export default function Tooltip({title, color, style, children}) {
    const [isClosed, setIsClosed] = useState(false)

    const tooltipClass = clsx("tooltip", color, style)

    return !isClosed && (
        <div className={tooltipClass}>
            <TbInbox className='tooltip__icon tooltip__icon-inbox' />
            <div className="tooltip__content">
                <p className="tooltip__content-title">{title}</p>
                <p className="tooltip__content-text">{children}</p>
            </div>
            <button className="tooltip__close" onClick={() => setIsClosed(true)}>
                <RxCross2 className="tooltip__icon tooltip__icon-close" />
            </button>
        </div>
    )

    
}