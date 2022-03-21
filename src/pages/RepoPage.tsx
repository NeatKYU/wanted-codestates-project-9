import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useRepoList } from '@hooks/useRepoList';
import { SearchInput } from '@components/search/SearchInput';
import { searchWordState } from '@atom/repoAtom';

interface RepoPageProps {

}

function RepoPage() {

	const searchWord = useRecoilValue(searchWordState);
	// const { repoList } = useRepoList(searchWord);

	return (
		<div>
			<SearchInput/>
			?
		</div>
	)
}

export default RepoPage;
