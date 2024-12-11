import styles from './Button.module.css'
const Button = ({isOutline,icon,text,...rest}) => {
  //const {isOutline,icon,text} = props
  return (
    <button {...rest} className={isOutline? styles.outline_btn :styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button

//teen tarike se props ko use kr sakte
//1 to props ko fn me le or props.icon krke lagaye
//1 destructrue karke const{isOutline,icon,text}=props or bss use kre
//3 me {isOutline,icon,text} isko fn me pass kr de or use kre bss.