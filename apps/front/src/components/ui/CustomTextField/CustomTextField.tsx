import { BaseComponentProps } from "@/models"
import { TextFieldLabel } from "./components"

export const CustomTextField = ({ children, ...props }: BaseComponentProps) => {
    return (
        <label {...props}>
            {children}
        </label>
    )
}

CustomTextField.Label = TextFieldLabel