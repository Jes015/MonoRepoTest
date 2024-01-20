import { globalConfig } from "@/config";
import { backRoutes } from "@/models";
import { TPostPartial } from "apptypes";

export const publishPost = (post: TPostPartial) => {
    return fetch(`${globalConfig.back.url}${backRoutes.Static.posts}`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    );
};
