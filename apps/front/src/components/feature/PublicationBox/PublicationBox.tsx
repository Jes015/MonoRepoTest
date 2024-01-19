import { BaseComponentType } from "@/models"
import { Button, TextArea } from "@radix-ui/themes"

export const PublicationBox: BaseComponentType = ({ children, ...props }) => {
    return (
        <div
            className={
                [
                    "flex flex-col gap-1"
                ].join(' ')
            }
            {...props}
        >
            <TextArea placeholder="Reply to comment…" />
            <footer
                className="flex justify-end" 
            >
                <Button
                    variant="outline"
                    className="cursor-pointer"
                >
                    Publish
                </Button>
            </footer>
            {children}
        </div>
    )
}