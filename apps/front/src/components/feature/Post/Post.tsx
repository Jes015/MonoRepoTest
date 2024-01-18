import { BaseComponentType } from "@/models"
import { PostContent, PostFooter, PostHeader } from "./components"

export const Post: BaseComponentType = () => {
    return (
        <article
            className="w-full border border-neutral-700 rounded-md font-bold"
        >
            <PostHeader />
            <PostContent />
            <PostFooter />
        </article>
    )
}