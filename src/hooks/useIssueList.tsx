import useSWR from 'swr';
import { useRecoilValue } from 'recoil';
import { fetcher } from '@util/fetcher';
import { issuePageState } from '@atom/issueAtom';

interface IssueListProps {
	owner: string,
	repo: string,
	perPage?: number,
}

export const useIssueList = ( props: IssueListProps ) => {

	const { owner, repo, perPage } = props;

	const issuePage = useRecoilValue(issuePageState)

	const { data, error } = useSWR(
		`${process.env.REACT_APP_BASE_URL}/repos/${owner}/${repo}/issues
		?per_page=${perPage ? perPage : 10}&page=${issuePage}`,
		fetcher
	)

	return {
		issueList: data,
		issueListError: error,
		issueLoading: !data && !error,
	}
}