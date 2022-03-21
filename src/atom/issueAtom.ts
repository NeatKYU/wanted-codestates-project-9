import { atom } from 'recoil';

export const issueListState = atom({
	key: 'issueList',
	default: [],
})

export const issuePageState = atom({
	key: 'issueCurrentPage',
	default: 1,
})

export const ownerState = atom({
	key: 'currentOwner',
	default: '',
})

export const repoState = atom({
	key: 'currentRepo',
	default: '',
})