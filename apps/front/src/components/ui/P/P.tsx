import { BaseComponentType } from "@/models"

export const P: BaseComponentType = ({ children, className, ...props }) => {
    return (
        <p
            className={
                [
                    className
                ].join(' ')
            }
            {...props}
        >
            {children}
        </p>
    )
}