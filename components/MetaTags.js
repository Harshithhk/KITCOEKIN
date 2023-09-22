import React from "react";
import { useRouter } from "next/router"

import Head from 'next/head'

const MetaTags=()=>{
    const router = useRouter()

    const MetaTagsList = [
        
        {
            "route" : "/",
            "title":"Top Ranked Engineering College in Kolhapur, Sangli, Satara, Ratnagiri| KIT'S College Of Engineering (Autonomous)",
            "meta":[
                {
                    "name":"description",
                    "content":"Top Companies look for their Talent at KIT'S College Of Engineering. Top Ranked Engineering College in Kolhapur, Sangli, Satara, Ratnagiri. Visionary Industrialist's College. Great Placement Record and Support. Industry Integrated Up-To-Date Curriculum. Vibrant Campus Life. Faculty with Rich Experience. State-Of-The-Art Infrastructure.",
                },
                {
                    "name":"keywords",
                    "content":"btech in mechanical engineering, btech in electrical engineering, btech in civil engineering, btech in computer science and engineering, btech in electronics &amp; telecommunication engineering, btech in biotechnology engineering, btech in electronics engineering, btech in basic sciences &amp; humanities, btech in environmental engineering, mtech in biotechnology engineering, mtech in mechanical engineering, mtech in computer science and engineering, mtech in electronics &amp; telecommunication engineering, mtech in environmental engineering",
                },
            ]
        },
        {
            "route" : "/about",
            "title":"Top Ranked Engineering College in Kolhapur, Sangli, Satara, Ratnagiri| KIT'S College Of Engineering (Autonomous)",
            "meta":[
                {
                    "name":"description",
                    "content":"Top Companies look for their Talent at KIT'S College Of Engineering. Top Ranked Engineering College in Kolhapur, Sangli, Satara, Ratnagiri. Visionary Industrialist's College. Great Placement Record and Support. Industry Integrated Up-To-Date Curriculum. Vibrant Campus Life. Faculty with Rich Experience. State-Of-The-Art Infrastructure.",
                },
                {
                    "name":"keywords",
                    "content":"btech in mechanical engineering, btech in electrical engineering, btech in civil engineering, btech in computer science and engineering, btech in electronics &amp; telecommunication engineering, btech in biotechnology engineering, btech in electronics engineering, btech in basic sciences &amp; humanities, btech in environmental engineering, mtech in biotechnology engineering, mtech in mechanical engineering, mtech in computer science and engineering, mtech in electronics &amp; telecommunication engineering, mtech in environmental engineering",
                },
            ]
        }
    ]

     // Find the meta data for the given route
  const metaTags = MetaTagsList.find(item => item.route === router.route);

  if (!metaTags) {
    // Handle the case when no matching route is found
    return null;
  }

  const { title, meta } = metaTags;
    
  return (
    <Head>
        <title>{title}</title>
        {meta.map((tag, index) => (
            <meta key={index} name={tag.name} content={tag.content} />
        ))}
        <link href="code/homepage/css/vendors/aos.css" rel="stylesheet"/>
        <link rel="stylesheet" href="code/homepage/css/vendors/swiper-bundle.min.css"/>
        <link href="code/homepage/style.css" rel="stylesheet"/>
    </Head>
  );

    
}

export default MetaTags
