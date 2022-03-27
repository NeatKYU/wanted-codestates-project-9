import { atom } from 'recoil';

export const repoListState = atom({
	key: 'repoList',
	default: [],
})

export const repoPageState = atom({
	key: 'repoCurrentPage',
	default: 1,
})

export const registRepoListState = atom({
	key: 'registRepoList',
	default: JSON.parse(window.sessionStorage.getItem('registRepoList') || '[]'),
})

export const searchWordState = atom({
	key: 'searchWord',
	default: '',
})