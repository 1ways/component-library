import clsx from 'clsx'

export default function Badge({ children, pill, color }) {
    const badgeClass = clsx('badge', pill && 'pill', color)

    return <div className={badgeClass}>{children}</div>
}
