import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { TiStarOutline } from 'react-icons/ti';
import { Avatar } from '@components/avatar/Avatar';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { issuePageState, ownerState } from '@atom/issueAtom';
import React from 'react';
import { registRepoListState } from '@atom/repoAtom';
import { useToastState } from '@hooks/useToast';

interface RegistCardProps {
	title: string,
	avatarUrl: string,
	stargazersCount: number,
	lang: string,
}

export const RegistCard = (props: RegistCardProps) => {

	const { title, avatarUrl, stargazersCount, lang } = props;
	const [owner, setOwner] = useRecoilState(ownerState);
	const setIssuePage = useSetRecoilState(issuePageState);
	const setToastList = useToastState();
	const [registRepoList, setRegistRepoList] = useRecoilState(registRepoListState);

	const handleGetIssueList = (owner: string) => {
		setOwner(owner);
		setIssuePage(1);
	}

	const handleDeleteRepo = (e: React.MouseEvent, title:string) => {
		e.stopPropagation();
		setRegistRepoList(registRepoList
			.filter((item:any) => item.title !== title)
		)
		window.sessionStorage.setItem('registRepoList',
			JSON.stringify(registRepoList.filter(
				(item:any) => item.title !== title
			))
		)
		setToastList('삭제 되었습니다.', true);
	}

	return (
		<Container 
			className='flex-justify-center'
			onClick={() => handleGetIssueList(title)}
			selected={owner === title ? true : false}
		>
			<CloseWrapper onClick={(e) => handleDeleteRepo(e, title)}>
				<IoMdClose/>
			</CloseWrapper>
			<Title>
				<div className='title'>repo name</div>
				<span>{title}</span>
			</Title>
			<Contents>
				<div className='avatar-section flex-center'>
					<Avatar image={avatarUrl}/>
				</div>
				<div className='star-lang-section flex-center'>
					<div><TiStarOutline/>{stargazersCount}</div>
					<div>{lang}</div>
				</div>
			</Contents>
		</Container>
	)
}

const Container = styled.div<{selected: boolean}>`
	width: 11.5rem;
	height: 5.5rem;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	position: relative;
	flex-direction: column;
	padding: 15px 10px 10px 10px;
	background-color: ${({selected}) => selected ? '#aab6fe' : '#fff'};

	&:hover {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	}
	cursor: pointer;

	@keyframes show {
		from { height: 0; opacity: 0; }
		to { height: 5.5rem; opacity: 1; }
	}

	animation: show 1s;

	@media (max-width: 720px) {
		width: 8.5rem;
	}
`

const CloseWrapper = styled.div`
	position: absolute;
	top: 0.5em;
	right: 0.5em;
	cursor: pointer;
	z-index: 999;
`

const Title = styled.div`
	width: 100%;
	height: 3rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	flex-shrink: 0;
	padding-left: 5px;
	padding-right: 5px;
	font-size: 17px;
	box-sizing: border-box;

	.title {
		font-size: 12px;
		color: #3d3d3d;
	}
`

const Contents = styled.div`
	width: 100%;
	height: 3rem;
	display: flex;

	.avatar-section {
		width: 30%;
	}

	.star-lang-section {
		width: 70%;
		flex-direction: column;
		svg {
			font-size: 1.3rem;
		}
	}
`