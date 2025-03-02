const tantaPlanning=[{
    time:"12am",
    sessions:[
    {
        date:"4-3-2025 tues",
        lesson:"express folderStructure (routes,schema,controller)"
    },
    {
         date:"8-3-2025 saturday",
        lesson:"errors and validation and middleWare"
    },
    {
        date:"11-3-2025 tues",
       lesson:"sendingEmails and fileHandling (multer)"
   },
    {
         date:"15-3-2025 saturday",
       lesson:"make fullProject by all this tools"
    },
    {
        date:"18-3-2025 tues",
      lesson:"dataBse Intro  sql and know the entities and relations and attributes"
   },
    {
        date:"22-3-2025 sat",
        lesson:"making the query by sql with phpMyAdmin crud"
    },
    {
        date:"25-3-2025 tues",
        lesson:"make raltions between tables"
    },
    {
        date:"29-3-2025",
        lesson:"make fullProject with Mysql and api'sand making integration with them"
    },
]
},
{
    time:"2am",
    sessions:[
    {
        date:"4-3-2025 tues",
        lesson:"userAgent and padding margin border outline"
    },
    {
         date:"8-3-2025 saturday",
        lesson:"display inline and block and how to hide an element and opacity"
    },
    {
        date:"11-3-2025 tues",
       lesson:"position and make project with it"
   },
    {
         date:"15-3-2025 saturday",
       lesson:"float and flex"
    },
    {
        date:"18-3-2025 tues",
      lesson:"psedou elements and psedou classes animation,transition"
   },
    {
        date:"22-3-2025 sat",
        lesson:"selectors,mediaQuery,cssVariables"
    },
    {
        date:"25-3-2025 tues",
        lesson:"bootstrap"
    },
    {
        date:"29-3-2025",
        lesson:"bootstrap"
    },]
},
{
    time:"4am",
    sessions:[
    {
        date:"4-3-2025 tues",
        lesson:"links"
    },
    {
         date:"8-3-2025 saturday",
        lesson:"media"
    },
    {
        date:"11-3-2025 tues",
       lesson:"lists"
   },
    {
         date:"15-3-2025 saturday",
       lesson:"table"
    },
    {
        date:"18-3-2025 tues",
      lesson:"forms"
   },
    {
        date:"22-3-2025 sat",
        lesson:"tricks and containers"
    },
    {
        date:"25-3-2025 tues",
        lesson:"css link with html and where i can write css code"
    },
    {
        date:"29-3-2025",
        lesson:"textProperties"
    },]
}];
const alexSessions=[{
    time:"6pm",
    sessions:[
    {
         date:"5-3-2025 wed",
         lesson:"css link with html and where i can write css code"
    },
    {
        date:"9-3-2025 sun",
        lesson:"text properties"
   },
   {
    date:"12-3-2025 wed",
    lesson:"userAgent and padding margin border outline"
},
{
     date:"16-3-2025 sun",
    lesson:"display inline and block and how to hide an element and opacity"
},
{
    date:"19-3-2025 wed",
   lesson:"position and make project with it"
},
{
     date:"23-3-2025 sun",
   lesson:"float and flex"
},
{
    date:"26-3-2025 wed",
  lesson:"psedou elements and psedou classes animation,transition"
},
{
    date:"30-3-2025 sun",
    lesson:"selectors,mediaQuery,cssVariables"
},
]
}]
let selectBoxElmement=document.querySelector("select");
let elementOfBranch=document.querySelector(".empty-element");
let content=document.querySelector(".content");
selectBoxElmement.onchange=(e)=>
{
    content.innerHTML="";
    elementOfBranch.innerHTML="";
    elementOfBranch.innerHTML=e.target.value;
    content.innerHTML="";
    if(selectBoxElmement.value=="Tanta Branch")
    {
        tantaPlanning.forEach((ele,index)=>
        {
            const {time,sessions}=ele;
            let divOfGroub=document.createElement("div");
            divOfGroub.classList.add("group");
            let timeOfGruoup=document.createElement("h2");
            timeOfGruoup.innerHTML=`Group ${time}`;
            timeOfGruoup.classList.add("time-group");
            divOfGroub.appendChild(timeOfGruoup);
            sessions.forEach((ele2,index2)=>
            {
                const {date,lesson}=ele2;
                let indexOfSession=index2+1;
                let elementNew=document.createElement("h2");
                elementNew.classList.add("index-sesion");
                elementNew.innerHTML=indexOfSession;
                let articleOfsesison=document.createElement("article");
                articleOfsesison.classList.add("article")
                articleOfsesison.appendChild(elementNew);
                let dateElement=document.createElement("h3");
                dateElement.classList.add("date-sesion");
                dateElement.innerHTML=`date of session:${date}`;
                articleOfsesison.appendChild(dateElement);
                let lessonElemnt=document.createElement("h3");
                lessonElemnt.innerHTML=`lessons will learn:${lesson}`;
                lessonElemnt.classList.add("lesson-sesion");
                articleOfsesison.appendChild(lessonElemnt);
                divOfGroub.appendChild(articleOfsesison);
                if(index2===sessions.length-1)
                {
                    let hr=document.createElement("hr");
                    divOfGroub.appendChild(hr);
                }
                content.appendChild(divOfGroub);
            })
        })

    }
    else if(selectBoxElmement.value=="Alexandria branch")
    {
        alexSessions.forEach((ele,index)=>
            {
                const {time,sessions}=ele;
                let divOfGroub=document.createElement("div");
                divOfGroub.classList.add("group");
                let timeOfGruoup=document.createElement("h2");
                timeOfGruoup.innerHTML=`Group ${time}`;
                timeOfGruoup.classList.add("time-group");
                divOfGroub.appendChild(timeOfGruoup);
                sessions.forEach((ele2,index2)=>
                {
                    const {date,lesson}=ele2;
                    let indexOfSession=index2+1;
                    let elementNew=document.createElement("h2");
                    elementNew.classList.add("index-sesion");
                    elementNew.innerHTML=indexOfSession;
                    let articleOfsesison=document.createElement("article");
                    articleOfsesison.classList.add("article")
                    articleOfsesison.appendChild(elementNew);
                    let dateElement=document.createElement("h3");
                    dateElement.classList.add("date-sesion");
                    dateElement.innerHTML=`date of session:${date}`;
                    articleOfsesison.appendChild(dateElement);
                    let lessonElemnt=document.createElement("h3");
                    lessonElemnt.innerHTML=`lessons will learn:${lesson}`;
                    lessonElemnt.classList.add("lesson-sesion");
                    articleOfsesison.appendChild(lessonElemnt);
                    divOfGroub.appendChild(articleOfsesison);
                    if(index2===sessions.length-1)
                    {
                        let hr=document.createElement("hr");
                        divOfGroub.appendChild(hr);
                    }
                    content.appendChild(divOfGroub);
                })
            })
    }
    else if(selectBoxElmement.value=="Online")
    {
        content.innerHTML="there is times for this branch";
    }
    else
    {
        content.innerHTML="there is times for this branch";
    }
}

