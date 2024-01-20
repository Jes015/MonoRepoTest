import { BaseComponentType } from "@/models";
import { PostsSection, PublishSection } from './components';


export const HomePage: BaseComponentType = () => {
    
    return (
        <>
            <PublishSection />
            <PostsSection />
        </>
    );
};