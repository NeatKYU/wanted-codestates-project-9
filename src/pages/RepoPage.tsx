import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useRepoList } from '@hooks/useRepoList';
import { SearchInput } from '@components/search/SearchInput';
import { searchWordState } from '@atom/repoAtom';
import { RepoCard } from '@components/repo-card/RepoCard';

interface RepoPageProps {

}

function RepoPage() {

	const searchWord = useRecoilValue(searchWordState);
	const { repoList } = useRepoList(searchWord);

	console.log(repoList)

	return (
		<Container>
			<InputWrapper className='flex-center'>
				<SearchInput/>
			</InputWrapper>
			<RepoCard/>
		</Container>
	)
}

export default RepoPage;

const Container = styled.div`
	width: 100%;
`

const InputWrapper = styled.div`
	width: 100%;
	margin-top: 20px;
`
