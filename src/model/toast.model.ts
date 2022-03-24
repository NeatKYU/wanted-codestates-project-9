export interface toast {
	message: string,
	success: boolean,
}

export interface toastList {
	defalut: ReadonlyArray<toast>
}