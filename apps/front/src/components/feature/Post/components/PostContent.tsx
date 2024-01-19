import { BaseComponentType } from "@/models"
import { ScrollArea } from "@radix-ui/themes"

export const PostContent: BaseComponentType = () => {
    return (
        <div
            className="flex flex-col gap-2 p-1 min-h-[5rem]"
        >
            {
                Math.floor(Math.random() * 2) + 1 === 1 &&
                <div
                    className="w-full h-72 bg-neutral-500 opacity-50 rounded-md"
                >
                </div>
            }
            <ScrollArea 
                type="auto" scrollbars="vertical" className="font-normal text-sm max-h-[120px] px-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur fugit consectetur mollitia! Dicta, sequi labore ipsa, fugiat porro facere ipsam reprehenderit molestiae assumenda laudantium tempora nesciunt. Quidem, harum tenetur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur fugit consectetur mollitia! Dicta, sequi labore ipsa, fugiat porro facere ipsam reprehenderit molestiae assumenda laudantium tempora nesciunt. Quidem, harum tenetur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur fugit consectetur mollitia! Dicta, sequi labore ipsa, fugiat porro facere ipsam reprehenderit molestiae assumenda laudantium tempora nesciunt. Quidem, harum tenetur!
            </ScrollArea>
            <p
                className="font-normal px-1 text-pretty text-sm text-textSecondary"
            >

            </p>
        </div>
    )
}