import React from "react";
import ForumComments from "./forumComments";
import ActivitiesCard from "../../../components/ActivitiesCard";

const Activity = (props) =>{
	const [readMore, setReadMore] = React.useState("");
	const [readMoreIndex, setReadMoreIndex] = React.useState("");
	const [ActivityList, setActivityList] = React.useState([]);


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
		  const updatedActivity = props.ActivityList.map((element) => {
			const date = new Date(element.date);
			const day = date.getDate();
			const year = date.getFullYear();
			const monthName = month[date.getMonth()];
			const dayName = date.toLocaleString("en-US", { weekday: "long" }); // Get the day name
	  
			element.date = `${dayName}, ${day} ${monthName} ${year}`;
			return element;
		  });
		setActivityList(updatedActivity)
	  }, [])

    return(
    <>

<div className={`  overflow-y-auto ${!readMore?"h-[900px]":""} text-[#24346D] `}>
	{
		readMore ? 	
		<>
			<ActivitiesCard index = {readMoreIndex} setReadMoreIndex ={setReadMoreIndex} ActivityData = {ActivityList[readMoreIndex]} readMore = {readMore}  setReadMore  = {setReadMore} />
			{/* <ForumComments /> */}
		</>
		:
		ActivityList.map((item,index)=>(
			<div className="">
				<ActivitiesCard  index = {index} setReadMoreIndex ={setReadMoreIndex} ActivityData = {item} readMore = {readMore}  setReadMore  = {setReadMore}  />
				<div className="h-[0.2px] w-full bg-slate-300"></div>
			</div>
		
		))
	}
	

   
</div>

    </>
        )
}

export default Activity