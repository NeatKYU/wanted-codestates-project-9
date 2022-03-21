import { useRepoList } from '@hooks/useRepoList';
import styled from 'styled-components';

interface RepoPageProps {

}

function RepoPage() {

	const { repoList } = useRepoList('react');

	console.log(repoList)

	return (
		<div>
		</div>
	)
}

export default RepoPage;
