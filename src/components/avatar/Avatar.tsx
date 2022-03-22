import styled from 'styled-components';

interface AvatarProps {
	image: string,
}

export const Avatar = (props: AvatarProps) => {

	const { image } = props;

	return (
		<Container>
			<img src={image} alt={'avatar'} width={40} height={40}/>
		</Container>
	)
}

const Container = styled.div`
	display: inline-flex;
	img {
		border-radius: 100%;
	}
`