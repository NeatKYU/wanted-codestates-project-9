import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useRepoList } from '@hooks/useRepoList';
import { SearchInput } from '@components/search/SearchInput';
import { searchWordState } from '@atom/repoAtom';

interface RepoPageProps {

}

function RepoPage() {

	const searchWord = useRecoilValue(searchWordState);
	const { repoList } = useRepoList(searchWord);

	console.log(repoList)

	return (
		<div>
			<InputWrapper>
				<SearchInput/>
			</InputWrapper>
		</div>
	)
}

export default RepoPage;

const InputWrapper = styled.div`
	width: 100%;
	margin-top: 20px;
`
