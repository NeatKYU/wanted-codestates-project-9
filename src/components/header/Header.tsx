import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

import { Logo } from '@components/header/Logo';

interface HeaderProps{
	headerList: Array<string>,
}

export const Header = (props: HeaderProps) => {

	const { headerList } = props;
	const history = useNavigate();
	
	return (
		<Container className='flex-justify-center'>
			<Content className='flex-align-center'>
				<Logo imageHeight={30} imageWidth={100} />
				{
					headerList && 
					headerList.map((item) => (
						<Menu 
							className='flex-justify-center'
							onClick={() => history(`/${item === 'Repo' ? '' : item}`)}
						>
							{item}
						</Menu>
					))
				}
			</Content>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 3.75rem;
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`
const Content = styled.div`
	width: 62.5rem;
	height: 3.75rem;
	gap: 1rem;
`

const Menu = styled.div`
	width: 4rem;
	cursor: pointer;
`
