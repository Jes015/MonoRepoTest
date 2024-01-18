import { BaseComponentType } from "@/models"
import { Avatar, Button, PopoverContent, PopoverRoot, PopoverTrigger } from "@radix-ui/themes"

export const PostHeader: BaseComponentType = () => {
    return (
        <header
            className="flex items-center justify-between border-b border-b-neutral-700 p-1"
        >
            <div
                className="flex items-center gap-1"
            >
                <PopoverRoot>
                    <PopoverTrigger>
                        <Avatar
                            src="https://avatars.githubusercontent.com/u/120581623?v=4"
                            alt="User image"
                            fallback='e'
                            size='2'
                            radius="full"
                            className="border-[0.01rem] border-neutral-700 cursor-pointer"
                        />
                    </PopoverTrigger>
                    <PopoverContent
                        size='1'
                        style={{ width: 160 }}
                        className="flex flex-col gap-1 p-1"
                    >
                        <header
                            className="flex items-center gap-1"
                        >
                            <Avatar
                                src="https://avatars.githubusercontent.com/u/120581623?v=4"
                                alt="User image"
                                fallback='e'
                                size='2'
                                radius="full"
                                className="border-[0.01rem] border-neutral-700"
                            />
                            <span className="font-bold">Jes015</span>
                        </header>
                        <div
                            className="px-1"
                        >
                            <p
                                className="text-neutral-400 text-sm"
                            >
                                I like to cook
                            </p>
                        </div>

                    </PopoverContent>
                </PopoverRoot>
                <h3>My Last post</h3>
            </div>
            <div
                className="flex items-center gap-1"
            >
                <Button
                    variant="outline"
                    size="1"
                    color="gold"
                >
                    Report
                </Button>
                <Button
                    variant="outline"
                    size="1"
                >
                    Share
                </Button>
            </div>
        </header>
    )
}