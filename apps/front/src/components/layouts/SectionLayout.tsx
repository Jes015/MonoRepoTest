import { BaseComponentProps } from "@/models"

interface SectionLayoutProps extends BaseComponentProps {
    title: string
}
export const SectionLayout: React.FC<SectionLayoutProps> = ({ title, children, className, ...props }) => {
    return (
        <div
            className={
                [
                    'w-full h-full flex flex-col gap-1 mt-5',
                    className
                ].join(' ')
            }
            {...props}
        >
            <header>
                <h1 className='font-bold text-xl'>{title}</h1>
            </header>
            {children}
        </div>
    )
}