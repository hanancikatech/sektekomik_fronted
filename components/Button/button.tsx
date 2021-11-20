import clsx from "clsx"

enum Variant {
  primary   = 'btn btn-primary btn-sm rounded-btn',
  secondary = 'btn btn-secondary btn-sm rounded-btn',
  danger    = 'btn btn-danger btn-sm rounded-btn',
  success   = 'btn btn-success btn-sm rounded-btn',
  warning   = 'btn btn-warning btn-sm rounded-btn',
  ghost     = 'btn btn-ghost btn-sm rounded-btn',
}


type ButtonProps = Omit<JSX.IntrinsicElements['button'] , 'ref'>


type Props = ButtonProps & {
  variant?: keyof typeof Variant 
}

const Button : React.FC<Props> = ({
  children,
  variant = 'primary',
  onClick,
  ...props
}) => {
  const className = clsx('' , Variant[variant])
  return (
    <button className={className}  onClick={onClick} {...props} >
      {children}
    </button>
  )
}

export {
  Button
}
