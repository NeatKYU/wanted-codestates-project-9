import { atom } from 'recoil';

export const toastListState = atom({
	key: 'toastList',
	default: JSON.parse(window.sessionStorage.getItem('toastList') || `[]`) || [],
})