import { issuePageState, ownerState } from '@atom/issueAtom';
import { useIssueList } from '@hooks/useIssueList';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { Pagination } from '@components/pagination/Pagination';
import { RepoCard } from '@components/repo-card/RepoCard';
import { Loading } from '@components/loading/Loading';

interface IssuePageProps {
	setToastList: any,
}

function IssuePage(props: IssuePageProps) {

	const { setToastList } = props;

	const currentOwner = useRecoilValue(ownerState)
	const [issuePage, setIssuePage] = useRecoilState(issuePageState);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(5);
	const { 
		issueList,
		totalCount,
		issueListError, 
		issueLoading 
	} = useIssueList(currentOwner, perPage);

	return (
		<Container>
			<Header className='flex-center'>Issues</Header>
			<CardWrpper className='flex-center'>
				{ issueList && issueList.map((item:any) => (
						<RepoCard
							key={item.title}
							description={item.title}
							labels={item.labels}
							state={item.state}
							title={currentOwner}
							avatarUrl={item.user.avatar_url}
							htmlUrl={item.html_url}
							type={'issue'}
							setToastList={setToastList}
						/>
					))}
			{ issueLoading && <Loading/> }
			{ !issueList && issueListError && '403 error' }
			</CardWrpper>
			{
				currentOwner && 
				<Pagination
					totalCount={totalCount}
					currentPage={issuePage}
					setCurrentPage={setCurrentPage}
					setGoPage={setIssuePage}
					perPage={perPage}
					loading={issueLoading}
				/>
			}
		</Container>
	)
}

export default IssuePage;

const Container = styled.div`
	width: 100%;
`
const CardWrpper = styled.div`
	width: 100%;
	height: auto;
	flex-direction: column;
	gap: 1.2rem;
`

const Header = styled.div`
	width: 100%;
	height: 5rem;
	font-size: 2rem;
`

const SizeBox = styled.div`
	width: 100%;
	height: 5rem;
`