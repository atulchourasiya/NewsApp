import React from 'react'

const Page1 = () => {
  return (
		<div className='d-flex align-items-center justify-content-center p-4'>
			<button
				onClick={() => {
					document.getElementById('formContainer').classList.remove('d-none');
				}}
				data-formbtn
				type='button'
				className='btn btn-info fw-normal'>
				Create News Update
			</button>
		</div>
	);
}

export default Page1
