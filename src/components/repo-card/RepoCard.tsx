import styled from 'styled-components';
import { TiStarOutline } from 'react-icons/ti';

import { Avatar } from '@components/avatar/Avatar';
import { CustomButton } from '@components/button/CustomButton';

interface RepoCardProps {
	title?: string,
	avatarUrl?: string,
	starCount?: string,
	description?: string,
	lang?: string,
	htmlUrl?: string,
}

export const RepoCard = (props: RepoCardProps) => {

	const { 
		title, 
		avatarUrl, 
		starCount, 
		description, 
		lang, 
		htmlUrl 
	} = props;

	return(
		<Container className='flex-center'>
			<ImageSection>
				<Avatar image={'https://avatars.githubusercontent.com/u/50188264?v=4'}/>
			</ImageSection>
			<ContentsSection>
				<TitleSection>
					<span>typescript/react</span>
					<div>Cheatsheets for experienced React developers getting started with TypeScript asdf asdf asdf asdfasd fasdf asdfa sdfasd fasdf asdfasdfa sdf asdf asdf</div>
				</TitleSection>
				<BottomSection className='flex-align-center'>
					<span><TiStarOutline/>star</span>
					<span>lang</span>
					<ButtonGroup className='flex-center'>
						<CustomButton 
							onClick={() => console.log('hi')}
							backgroundColor={'#5870cb'}
							title={'이동'}
						/>
						<CustomButton 
							onClick={() => console.log('hi')}
							backgroundColor={'#aab6fe'}
							title={'등록'}
						/>
					</ButtonGroup>
				</BottomSection>
			</ContentsSection>
		</Container>
	)
}

const Container = styled.div`
	width: 40rem;
	height: 6.25rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 1rem;
`

const ImageSection = styled.div`
	width: 10%;
`

const ContentsSection = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
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
	justify-content: space-around;
`

const ButtonGroup = styled.div`
	gap: 5px;
`