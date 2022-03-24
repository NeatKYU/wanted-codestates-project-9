import useSWR from 'swr';
import { useRecoilValue } from 'recoil';
import { fetcher } from '@util/fetcher';
import { issuePageState } from '@atom/issueAtom';

export const useIssueList = (owner:string, perPage?:number) => {

	const issuePage = useRecoilValue(issuePageState)

	const { data, error } = useSWR(
		owner && `${process.env.REACT_APP_BASE_URL}/search/issues?q=repo:${owner}%20is:issue
		&per_page=${perPage ? perPage : 10}&page=${issuePage}`,
		
		fetcher
	)

	return {
		issueList: data && data.items,
		totalCount: data && data.total_count,
		issueListError: error,
		issueLoading: !data && !error && owner,
	}
}