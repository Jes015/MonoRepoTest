import { IconNoLike } from "@/assets/Icons"
import { BaseComponentType } from "@/models"
import { Suspense, lazy, useState } from "react"


const Comments = lazy(() => import('@/components/ui').then(module => ({ default: module.Comments })))

export const PostFooter: BaseComponentType = () => {

    const [displayComments, setDisplayComments] = useState(false)

    const handleOnClickToDisplayComments = () => {
        setDisplayComments(prev => !prev)
    }

    return (
        <footer
            className="flex flex-col border-t border-borderPrimary font-normal"
        >
            <div
                className={
                    [
                        "flex",
                        displayComments ? 'border-b border-borderPrimary' : ''
                    ].join(' ')
                }
            >
                <button
                    onClick={handleOnClickToDisplayComments}
                    className="flex-grow [flex-basis:0] hover:bg-backgroundHoverPrimary py-1 [transition-duration:0.3s]"
                >
                    {
                        `${displayComments ? 'Hide comments' : 'Comments'} `
                    }
                </button>
                <button
                    className="flex items-center justify-center gap-1 flex-grow [flex-basis:0] border-l border-l-neutral-800 hover:bg-backgroundHoverPrimary py-1 [transition-duration:0.3s]"
                >
                    <IconNoLike className="text-2xl" />
                </button>
            </div>

            {displayComments && (
                <Suspense>
                    <Comments />
                </Suspense>
            )
            }
        </footer>
    )
}