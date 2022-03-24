import useSWR from 'swr';
import { useRecoilValue } from 'recoil';
import { fetcher } from '@util/fetcher';
import { repoPageState } from '@atom/repoAtom';

export const useRepoList = ( searchString: string, perPage?:number ) => {

	const repoPage = useRecoilValue(repoPageState)

	const { data, error } = useSWR(
		searchString && `${process.env.REACT_APP_BASE_URL}/search/repositories?q=${searchString}
		&per_page=${perPage ? perPage : 10}&page=${repoPage}`,
		fetcher,
		{
			focusThrottleInterval: 3000,
			onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
				// 404에서 재시도 안함
				if (error.status === 404) return
		
				// 10번까지만 재시도함
				if (retryCount >= 5) return
		
				// 5초 후에 재시도
				setTimeout(() => revalidate({ retryCount }), 3000)
			}
		}
	)

	return {
		repoList: data && data.items,
		totalCount: data && data.total_count,
		repoListError: error,
		repoLoading: !data && !error && searchString,
	}
}