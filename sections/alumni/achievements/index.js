import React from "react";
import ForumComments from "./forumComments";
import AchievementsCard from "../../../components/AchievementsCard";

const Achievement = (props) =>{
	let AchievementList = props.AchievementList
	const [readMore, setReadMore] = React.useState("");
	const [readMoreIndex, setReadMoreIndex] = React.useState("");

    return(
    <>

<div className={`  overflow-y-auto ${!readMore?"h-[900px]":""} text-[#24346D] `}>
	{
		readMore ? 	
		<>
			<AchievementsCard index = {readMoreIndex} setReadMoreIndex ={setReadMoreIndex} AchievementData = {AchievementList[readMoreIndex]} readMore = {readMore}  setReadMore  = {setReadMore} />
			{/* <ForumComments /> */}
		</>
		:
		AchievementList.map((item,index)=>(
			<div className="">
				<AchievementsCard  index = {index} setReadMoreIndex ={setReadMoreIndex} AchievementData = {item} readMore = {readMore}  setReadMore  = {setReadMore}  />
				<div className="h-[0.2px] w-full bg-slate-300"></div>
			</div>
		
		))
	}
	

   
</div>

    </>
        )
}

export default Achievement