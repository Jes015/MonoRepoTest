import { PublicationBox } from "@/components/feature";
import { PublicationBoxForm } from "@/components/feature/PublicationBox/models";
import { SectionLayout } from "@/components/layouts";
import { BaseComponentType } from "@/models";
import { publishPost } from "../services";

export const PublishSection: BaseComponentType = () => {
    const handleOnSubmit = (data: PublicationBoxForm) => {
        publishPost(data)
    }
    return (
        <SectionLayout
            title='Publication box'
        >
            <PublicationBox
                onFormSubmit={handleOnSubmit}
            />
        </SectionLayout>
    );
};