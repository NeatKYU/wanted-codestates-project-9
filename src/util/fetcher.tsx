import axios from 'axios'

export const fetcher = (url: string) => {
	return axios.get(url, {
		headers: {
			Authorization: `${process.env.REACT_APP_GIT_TOKEN}`,
		}
	})
	.then(res => res.data)
}