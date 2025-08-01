import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;

}

export const Containercontent: React.FC<Props> = ({children, className}) => {
  return (
    <div className={className}  >
        {children}
    </div>
  )
}
