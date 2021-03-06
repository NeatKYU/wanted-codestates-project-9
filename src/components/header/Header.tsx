import { useRecoilValue, useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io';

import { Logo } from '@components/header/Logo';
import { RegistCard } from '@components/regist-card/RegistCard';
import { registRepoListState } from '@atom/repoAtom';
import { isActiveState } from '@atom/isActiveAtom';

interface HeaderProps{
	headerList: Array<string>,
}

export const Header = (props: HeaderProps) => {

	const { headerList } = props;
	const [isActive, setIsActive] = useRecoilState(isActiveState);
	const registRepoList = useRecoilValue(registRepoListState);
	const history = useNavigate();

	const handleClick = ( item:string, index:number ) => {
		setIsActive(index)
		window.sessionStorage.setItem('isActive', index.toString())
		history(`/${item === 'Repo' ? '' : item}`);
	}

	return (
		<Container className='flex-justify-center'>
			<Content className='flex-align-center'>
				<Logo imageHeight={45} imageWidth={150} />
				<SizeBox/>
				{
					headerList && 
					headerList.map((item, index) => (
						<Menu
							key={index}
							className='flex-center'
							active={isActive === index ? true : false}
							onClick={() => handleClick(item, index)}
						>
							<IoIosArrowBack/>
							{item}
						</Menu>
					))
				}
				{
					isActive === 1 &&
					registRepoList &&
					registRepoList.map((item: any, index:number) => (
						<RegistCard 
							key={index}
							title={item.title}
							avatarUrl={item.avatarUrl}
							lang={item.lang}
							stargazersCount={item.starCount}
						/>
					))
				}
			<EndBox/>
			</Content>
		</Container>
	)
}

const Container = styled.div`
	width: 15rem;
	height: 100vh;
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	flex-direction: column;
	position: absolute;
	top: 0;
	right: 0;
	
	@media (max-width: 720px) {
		position: initial;
	}
`
const Content = styled.div`
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
	flex-direction: column;
	gap: 1rem;
	padding-top: 20px;

`

const Menu = styled.div<{active: boolean}>`
	width: 80%;
	height: 3rem;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	background-color: ${(props) => props.active ? '#aab6fe' : '#fff'};
	cursor: pointer;

	&:hover {
		font-size: 1.25rem;
	}

	svg {
		margin-right: 10px;
		
		@keyframes leftRight {
			0% { transform: translate(-30%, 0) }
			50% { transform: translate(0, 0) }
			100% { transform: translate(-30%, 0) }
		}
		animation: ${(props) => props.active ? 'leftRight 1s infinite' : ''}

	}

`

const SizeBox = styled.div`
	width: 100%;
	height: 1rem;
`
const EndBox = styled.div`
	width: 100%;
	height: 1rem;
	margin-top: auto;
`

