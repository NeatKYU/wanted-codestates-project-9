import { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { TiStarOutline } from 'react-icons/ti';
import { AiOutlineCloseCircle, AiOutlineExclamationCircle } from 'react-icons/ai';

import { Avatar } from '@components/avatar/Avatar';
import { CustomButton } from '@components/button/CustomButton';
import { registRepoListState } from '@atom/repoAtom';


interface RepoCardProps {
	title: string,
	avatarUrl: string,
	starCount?: string,
	state?: string,
	description: string,
	lang?: string,
	labels?: [],
	htmlUrl: string,
	type: 'repo' | 'issue',
	setToastList: any,
}

export const RepoCard = (props: RepoCardProps) => {

	const { 
		title, 
		avatarUrl, 
		starCount, 
		state,
		description, 
		lang, 
		htmlUrl,
		type,
		labels,
		setToastList,
	} = props;
	
	const [registRepoList, setRegistRepoList] = useRecoilState(registRepoListState)

	const handleRegistRepo = (mapTitle:string) => {
		if(registRepoList.length < 4){
			setToastList('등록되었습니다.', true);
			if(registRepoList.length === 0){
				setRegistRepoList([{
					title: title,
					avatarUrl: avatarUrl,
					starCount: starCount,
					lang: lang,
				}])
			} else {
				let check = true;
				registRepoList.map((item: any) => {
					if(item.title === mapTitle) {
						setToastList('이미 등록되어있습니다.', false);
						check = false;
					}
				})
				if(check){
					setRegistRepoList([...registRepoList, {
						title: title,
						avatarUrl: avatarUrl,
						starCount: starCount,
						lang: lang,
						}
					])
				}
			}
		} else {
			setToastList('스토리지 초과입니다.', false);
		}
	}

	useEffect(() => {
		window.sessionStorage.setItem('registRepoList', JSON.stringify(registRepoList))
	}, [registRepoList])

	return(
		<Container className='flex-center'>
			<ImageSection className='flex-center'>
				<Avatar image={avatarUrl}/>
			</ImageSection>
			<ContentsSection>
				<TitleSection>
					<span>{title}</span>
					<div>{description}</div>
				</TitleSection>
				<BottomSection className='flex-align-center'>
					{
						type === 'repo' &&
						<>
							<span><TiStarOutline/>{starCount}</span>
							<span>{lang}</span>
						</>
					}
					{
						type === 'issue' &&
						<>
							<span>
								{state === 'closed' ? 
								<AiOutlineCloseCircle/> 
								: <AiOutlineExclamationCircle/>}
								{state}
							</span>
							{
								labels?.map((item:any) => (
									<Label color={item.color}>{item.name.split(':')[1]}</Label>
								))
							}
						</>
					}
					<ButtonGroup className='flex-center'>
						<CustomButton 
							onClick={() => window.open(htmlUrl, '_brank')}
							backgroundColor={'#5870cb'}
							title={'이동'}
						/>
						{
							type === 'repo' &&
							<CustomButton 
								onClick={() => handleRegistRepo(title)}
								backgroundColor={'#aab6fe'}
								title={'등록'}
							/>
						}
					</ButtonGroup>
				</BottomSection>
			</ContentsSection>
		</Container>
	)
}

const Container = styled.div`
	width: 45rem;
	min-height: 5.25rem;
	height: auto;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 10px;
	border-radius: 1rem;
`

const ImageSection = styled.div`
	width: 10%;
`

const ContentsSection = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	padding-left: 10px;
	gap: .5rem;
`
const TitleSection = styled.div`
	width: 100%;
	height: 30%;

	span {
		font-size: 1.1rem;
		font-weight: bold;
	}
`
const BottomSection = styled.div`
	width: 100%;
	
	span {
		display: flex;
		align-items: center;
		margin-right: 1rem;
		svg {
			margin-right: 10px;
		}
	}
`

const Label = styled.div<{color: string}>`
	display: flex;
	align-items: center;
	width: auto;
	margin-right: 4px;
	border-radius: 1rem;
	background-color: ${({color}) => "#"+color};
`

const ButtonGroup = styled.div`
	gap: 5px;
	margin-left: auto;
`