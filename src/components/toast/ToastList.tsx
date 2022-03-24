import styled from 'styled-components';
import { Toast } from '@components/toast/Toast';
import { useRecoilValue } from 'recoil';
import { toastListState } from '@atom/toastAtom';
import { toast } from '@model/toast.model';

export const ToastList = () => {

  const toastList = useRecoilValue(toastListState);

	return (
		<Warpper>
			{ toastList.map((item:toast,index:number) => (
				<Toast key={index} message={item.message} isSuccess={item.success}/>
			))}
		</Warpper>
	)
}

const Warpper = styled.div`
	width: 15.625rem;
	height: auto;
	max-height: 100rem;
	position: fixed;
	right: 50%;
	top: 1rem;
	transform: translate(50%, 0);
	z-index: 999;

	@media (max-width: 860px) {
		right: 1.5rem;
		transform: translate(0, 0);
	}
`