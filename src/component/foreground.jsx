import React ,{useRef} from 'react'
import Card from './card'


const Foreground = () => {
  	const constraintsRef = useRef(null)
  	let box = [
  		{
  			text : 'Welcome...1'
  		},
  		{
  			text : 'Welcome...2'
  		},
  		{
  			text : 'Welcome...3'
  		},
  	]

	return (
		<div ref={constraintsRef} className='overflow-hidden absolute z-[3] h-screen w-full text-white p-1'>
			{
				box.map((iten,index)=>(
					<Card reference={constraintsRef} ind={index} box={box[index].text} key={index}/>
				))
			}
		</div>
	)
}

export default Foreground