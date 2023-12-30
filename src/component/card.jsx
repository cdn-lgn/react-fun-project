import React  from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Card({box,ind,reference}) {
	let text = 'Welcome...1'
	function copyText(){
		navigator.clipboard.writeText(text)
	}

	return (
		<motion.div drag whileDrag={{ scale: 1.1 }} dragConstraints={reference} dragElastic={0.2}  className='relative w-48 h-60 bg-zinc-900 rounded-[20px] p-4 text-xl overflow-hidden'>
			<IoDocumentTextOutline className="text-2xl"/>
			<textarea type="text" className='scrollBarHidden w-full bg-transparent outline-none text-white my-5 h-1/2 overflow-y-scroll h-[calc(100%-60px)]' defaultValue={box} onMouseLeave={(e)=>{text = e.target.value}} />
			<FaRegCopy className="absolute right-0 bottom-0 m-2 p-3 cursor-pointer rounded-full text-5xl overflow-visible hover:bg-zinc-800 duration-200" onClick={()=>{copyText()}}/>
		</motion.div>
	)
}