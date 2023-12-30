import React from 'react'
import './background.css'

const background = () => {
	return (
		<div className='absolute z-[2] h-screen w-full bg-zinc-800' >
			<h1 className='absolute text-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 from-zinc-900'>D<span id="offset">o</span>c.</h1>
		</div>
	)
}

export default background