import React from "react";
import ForumComments from "./forumComments";
import AchievementsCard from "../../../components/AchievementsCard";

const Achievement = (props) =>{
	const [readMore, setReadMore] = React.useState("");
	const [readMoreIndex, setReadMoreIndex] = React.useState("");

	const [AchievementList, setAchievementList] = React.useState([]);


	React.useEffect(async () => {
		const month = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		  ]
		  const updatedAchievement = props.AchievementList.map((element) => {
			const date = new Date(element.date);
			const day = date.getDate();
			const year = date.getFullYear();
			const monthName = month[date.getMonth()];
			const dayName = date.toLocaleString("en-US", { weekday: "long" }); // Get the day name
	  
			element.date = `${dayName}, ${day} ${monthName} ${year}`;
			return element;
		  });
		  setAchievementList(updatedAchievement)
	  }, [])


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