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
	default: window.sessionStorage.getItem('registRepoList') || [],
})