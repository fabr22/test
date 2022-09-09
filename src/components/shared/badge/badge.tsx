
import { ReactNode } from 'react';
import styles from './badge.module.scss'

const Badge = ({children}: {children : ReactNode}) => {
    return (
        <div className={styles['badge']}>
            {children}
        </div>
    )
}

export default Badge;