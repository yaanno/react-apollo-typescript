export interface LinkType {
	id: string
	description: string
	url: string
	postedBy: UserType
	votes: VoteType[]
	createdAt: Date
}

export interface UserType {
	id: string
	name: string
	email: string
	links: LinkType[]
}

export interface VoteType {
	id: string,
	link: LinkType
	user: UserType
}

export interface FeedType {
	id: string
	links: LinkType[]
	count: number
}
