import { BaseComponentType } from "@/models"
import { Button, TextArea, TextField } from "@radix-ui/themes"

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
            <TextField.Root>
                <TextField.Input
                    placeholder="Photo with bad bunny and arcangel in our last single <3"
                />
            </TextField.Root>
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