import { BaseComponentProps } from "@/models";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { PublicationBoxForm } from "./models";

interface PublicationBoxProps extends BaseComponentProps {
    onFormSubmit: (data: PublicationBoxForm) => void;
}

export const PublicationBox: React.FC<PublicationBoxProps> = ({ onFormSubmit, ...props }) => {
    const {
        register,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<PublicationBoxForm>();

    const handleOnSubmit = handleSubmit((data) => {
        onFormSubmit(data);
    });

    return (
        <div
            {...props}
        >
            <form
                className="flex flex-col gap-1"
                onSubmit={handleOnSubmit}
            >
                <TextField.Root>
                    <TextField.Input
                        placeholder="Photo with bad bunny and arcangel in our last single <3"
                        {...register('title', { required: true })}
                    />
                </TextField.Root>
                <TextArea
                    placeholder="Reply to comment…"
                    {...register('content', { required: true })}
                />
                <footer
                    className="flex justify-end"
                >
                    <Button
                        variant="outline"
                        className="cursor-pointer"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Loading' : 'Publish'}
                    </Button>
                </footer>
            </form>
        </div>
    );
};