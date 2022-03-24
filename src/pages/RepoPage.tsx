import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { useRepoList } from '@hooks/useRepoList';
import { SearchInput } from '@components/search/SearchInput';
import { repoPageState, searchWordState } from '@atom/repoAtom';
import { RepoCard } from '@components/repo-card/RepoCard';
import { Pagination } from '@components/pagination/Pagination';
import { Loading } from '@components/loading/Loading';

interface RepoPageProps {

}

function RepoPage() {

	const searchWord = useRecoilValue(searchWordState);
	const setRepoPage = useSetRecoilState(repoPageState);
	const [perPage, setPerPage] = useState(6);
	const [currentPage, setCurrentPage] = useState(1);
	const { repoList, totalCount, repoLoading, repoListError } = useRepoList(searchWord, perPage);

	useEffect(() => {
		setCurrentPage(1);
		setRepoPage(1);
	}, [])

	return (
		<Container>
			<InputWrapper className='flex-center'>
				<SearchInput/>
			</InputWrapper>
			<SizeBox/>
			<CardWrpper className='flex-center'>
				{ repoList && repoList.map((item:any, index:number) => (
					<RepoCard
						key={index}
						description={item.description}
						lang={item.language}
						starCount={item.stargazers_count}
						title={item.full_name}
						avatarUrl={item.owner.avatar_url}
						htmlUrl={item.html_url}
						type={'repo'}
					/>
				))}
				{ repoLoading && <Loading/> }
				{ !repoList && repoListError && '403 error' }
			</CardWrpper>
			{
				searchWord &&
				<Pagination 
					currentPage={currentPage} 
					perPage={perPage} 
					totalCount={totalCount} 
					setCurrentPage={setCurrentPage}
					setGoPage={setRepoPage}
					loading={repoLoading}
				/>
			}
		</Container>
	)
}

export default RepoPage;

const Container = styled.div`
	width: 100%;
`

const CardWrpper = styled.div`
	width: 100%;
	height: auto;
	flex-direction: column;
	gap: 1.2rem;
`

const InputWrapper = styled.div`
	width: 100%;
	margin-top: 20px;
`

const SizeBox = styled.div`
	width: 100%;
	height: 2rem;
`
