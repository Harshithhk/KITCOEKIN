import React from "react";
import ForumComments from "./forumComments";
import ForumCard from "../../../components/ForumCard";

const Forum = (props) =>{
	let ForumList = props.ForumList
	const [readMore, setReadMore] = React.useState("");
	const [readMoreIndex, setReadMoreIndex] = React.useState("");

    return(
    <>

<div className={`  overflow-y-auto ${!readMore?"h-[900px]":""} text-[#24346D] `}>
	{
		readMore ? 	
		<>
			<ForumCard index = {readMoreIndex} setReadMoreIndex ={setReadMoreIndex} ForumData = {ForumList[readMoreIndex]} readMore = {readMore}  setReadMore  = {setReadMore} />
			<ForumComments />
		</>
		:
		ForumList.map((item,index)=>(
			<>
				<ForumCard  index = {index} setReadMoreIndex ={setReadMoreIndex} ForumData = {item} readMore = {readMore}  setReadMore  = {setReadMore}  />
			
			</>
		
		))
	}
	

   
</div>

    </>
        )
}

export default Forum