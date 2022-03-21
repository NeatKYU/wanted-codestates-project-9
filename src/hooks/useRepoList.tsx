import useSWR from 'swr';
import { useRecoilValue } from 'recoil';
import { fetcher } from '@util/fetcher';
import { repoPageState } from '@atom/repoAtom';

export const useRepoList = ( searchString: string, perPage?:number ) => {

	const repoPage = useRecoilValue(repoPageState)

	const { data, error } = useSWR(
		searchString && `${process.env.REACT_APP_BASE_URL}/search/repositories?q=${searchString}
		&per_page=${perPage ? perPage : 10}&page=${repoPage}`,
		fetcher
	)

	return {
		repoList: data && data.items,
		totalCount: data && data.total_count,
		repoListError: error,
		repoLoading: !data && !error,
	}
}