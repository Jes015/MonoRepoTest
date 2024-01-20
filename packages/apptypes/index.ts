export type UUID = `${string}-${string}-${string}-${string}-${string}`

export interface IPublisher {
    id: UUID
    name: string
    description: string
}

export interface IPost {
    id: UUID
    title: string
    content: string
    publishDate: number
    likes: number
    publisher: IPublisher
}

export type TPostPartial = Partial<IPost>

export type TPostArray = IPost[]
export type TPostArrayPartial = TPostPartial[]