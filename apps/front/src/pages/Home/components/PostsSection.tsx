import { Post } from "@/components/feature";
import { SectionLayout } from "@/components/layouts";
import { globalConfig } from "@/config";
import { BaseComponentType, backRoutes } from "@/models";
import { Button } from "@radix-ui/themes";
import { TPostArray } from "apptypes";
import useSWR from "swr";

export const PostsSection: BaseComponentType = (props) => {
    const { data, mutate } = useSWR<TPostArray>('http://localhost:3000/posts');

    // This method is temporal. it'll be removed soon
    const handleOnClickToSeedDB = () => {

        const asyncContext = async () => {
            await fetch(globalConfig.back.url + backRoutes.Static.seed);
            mutate();
        };
        void asyncContext();
    };

    const handleOnClickToRefreshData = () => {
        mutate()
    }

    return (
        <SectionLayout
            title='Posts'
            rightNode={
                <div
                    className="flex items-center gap-2"
                >
                    <Button
                        onClick={handleOnClickToSeedDB}
                    >
                        Seed db
                    </Button>
                    <Button
                        onClick={handleOnClickToRefreshData}
                    >
                        Refresh
                    </Button>
                </div>
            }
            {...props}
        >
            {
                data != null && data.map((postData) => (<Post key={postData.id} data={postData} />))
            }
        </SectionLayout>
    );
};