import { atom } from 'recoil';

export const isActiveState = atom({
	key: 'isActive',
	default: parseInt(window.sessionStorage.getItem('isActive') || '0') || 0,
})