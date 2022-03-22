import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { TiStarOutline } from 'react-icons/ti';
import { Avatar } from '@components/avatar/Avatar';

interface RegistCardProps {
	title: string,
	avatarUrl: string,
	stargazersCount: number,
	lang: string,
}

export const RegistCard = () => {

	return (
		<Container className='flex-justify-center'>
			<CloseWrapper>
				<IoMdClose/>
			</CloseWrapper>
			<Title>
				<div className='title'>repo name</div>
				<span>typescript-cheatsheets/reacta asldl alsdkfa;l afalksjd;as aslfkja</span>
			</Title>
			<Contents>
				<div className='avatar-section flex-center'>
					<Avatar image={'https://avatars.githubusercontent.com/u/101206176?v=4'}/>
				</div>
				<div className='star-lang-section flex-center'>
					<div><TiStarOutline/>2.4k</div>
					<div>javascript</div>
				</div>
			</Contents>
		</Container>
	)
}

const Container = styled.div`
	width: 11.5rem;
	height: 7rem;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	position: relative;
	flex-direction: column;
	padding: 15px 10px 10px 10px;

	&:hover {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	}
	cursor: pointer;

	@keyframes show {
		from { height: 0; opacity: 0; }
		to { height: 7rem; opacity: 1; }
	}

	animation: show 1s;
`

const CloseWrapper = styled.div`
	position: absolute;
	top: 0.5em;
	right: 0.5em;
	cursor: pointer;
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