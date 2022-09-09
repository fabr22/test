import  styles from './bonusButton.module.scss'
import { ButtonProps } from '../../../types/button/bonusButtonTypes'

const Button = ({appearence, children, ...props} : ButtonProps) => {
    return (
        <button className={`${styles['button']} ${styles[appearence]}`} {...props}>
                {children}
        </button>
    )
}

export default Button;