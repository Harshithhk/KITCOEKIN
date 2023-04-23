import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const ManditoryDisclosure20 = () => {
  let mandatory2021 = [
    [
    {
      "key": "Name of the Institution",
      "value": "Kolhapur Institute of Technology's\nCollege of Engineering (Autonomous), Kolhapur"
      ,"url":"documents/About/"
    },
    {
      "key": "Address of the Institution",
      "value": "R.S.No.199B/1-3\nGokul Shirgaon, Kolhapur - 416 234,\nMaharashtra, INDIA."
      ,"url":"documents/About/"
    },
    {
      "key": "City & amp; Pin Code",
      "value": "Kolhapur – 416234"
      ,"url":"documents/About/"
    },
    {
      "key": "State / UT",
      "value": "Maharashtra"
      ,"url":"documents/About/"
    },
    {
      "key": "Phone number with STD code",
      "value": "0231-2636202"
      ,"url":"documents/About/"
    },
    {
      "key": "Email",
      "value": "info@mail.kitcoek.in"
      ,"url":"mailto:info@mail.kitcoek.in"
    },
    {
      "key": "Website",
      "value": "www.kitcoek.in"
      ,"url":"http://www.kitcoek.in/"
    }
  ],
  [
    {
      "key": "Name of the Trust",
      "value": "Kolhapur Institute of Technology, Kolhapur"
      ,"url":"documents/About/"
    },
    {
      "key": "Address of the organization",
      "value": "R.S.No.199B/1-3,Gokul Shirgaon,\nKolhapur - 416 234, Maharashtra, INDIA."
      ,"url":"documents/About/"
    },
    {
      "key": "Website of the organization",
      "value": "www.kitcoek.in"
      ,"url":"http://www.kitcoek.in/"
    },
    {
      "key": "Phone number with STD code",
      "value": "7769001199, 9168781199"
      ,"url":"documents/About/"
    }
  ],
  [
    {
      "key": "Name of Principal /Director",
      "value": "Dr.V. V. Karjinni"
      ,"url":"documents/About/"
    },
    {
      "key": "Exact Designation",
      "value": "Director"
      ,"url":"documents/About/"
    },
    {
      "key": "Address",
      "value": "R.S.No.199B/1-3, Gokul Shirgaon,\nKolhapur - 416 234, Maharashtra, INDIA."
      ,"url":"documents/About/"
    },
    {
      "key": "Phone number with STD code",
      "value": "7769001199-9422700000"
      ,"url":"documents/About/"
    },
    {
      "key": "Email",
      "value": "karjinni@yahoo.com"
      ,"url":"mailto:karjinni@yahoo.com"
    }
  ],
  [
    {
      "key": "Name of the affiliating University",
      "value": "Shivaji University, Kolhapur"
      ,"url":"documents/About/"
    }
  ],
  [
    {
      "key": "Governance",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Members of the Board and their brief background",
      "value": "10.5.1"
      ,"url":"documents/About/"
    },
    {
      "key": "Members of Academic Advisory Body",
      "value": "10.5.2"
      ,"url":"documents/About/"
    },
    {
      "key": "Frequently of the Board Meeting and Academic Advisory Body",
      "value": "Two- Three meetings in a year"
      ,"url":"documents/About/"
    },
    {
      "key": "Organizational chart and processes",
      "value": "10.5.4"
      ,"url":"documents/About/"
    },
    {
      "key": "Nature and Extent of involvement of Faculty and students in academic affairs/ improvements",
      "value": "Governing Council,College Development Committee, Academic Council, Internal Quality Assurance Cell, Central Discipline Committee have faculty students involvement in academic affairs /improvements."
      ,"url":"documents/About/"
    },
    {
      "key": "Mechanism/ Norms and Procedure for democratic/ good Governance",
      "value": "Roles of everyone are well defined. Organizational Chart follows deligation of responsibilities at varous level."
      ,"url":"documents/About/"
    },
    {
      "key": "Student Feedback on Institutional Governance/ Faculty performance",
      "value": "Online feedback system of students and faculty is available."
      ,"url":"documents/About/"
    },
    {
      "key": "Grievance Redressal mechanism for Faculty, staff and students",
      "value": "Grievances / complaint can be lodged online and Offiline"
      ,"url":"documents/About/"
    },
    {
      "key": "Establishment of Anti Ragging Committee",
      "value": "10.5.9"
      ,"url":"documents/About/manditory-disclosure/10.5.9.pdf"
    },
    {
      "key": "Establishment of Online Grievance Redressal Mechanism",
      "value": "grievance-redressal-committee"
      ,"url":"#"
    },
    {
      "key": "Establishment of Grievance Redressal Committee in the Institution and Appointment of OMBUDSMAN by the University",
      "value": "10.5.11"
      ,"url":"documents/About/manditory-disclosure/10.5.11.pdf"
    },
    {
      "key": "Establishment of Internal Complaint Committee (ICC)",
      "value": "10.5.12"
      ,"url":"documents/About/manditory-disclosure/10.5.12.pdf"
    },
    {
      "key": "Establishment of Committee for SC/ ST",
      "value": "YES"
      ,"url":"documents/About/"
    },
    {
      "key": "Internal Quality Assurance Cell",
      "value": "10.5.14"
      ,"url":"documents/About/manditory-disclosure/10.5.14.pdf"
    }
  ],
  [
    {
      "key": "Programmes",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Name of Programmes approved by AICTE",
      "value": "10.6.1 to 10.6.12"
      ,"url":"documents/About/manditory-disclosure/10.6.1-to-10.6.12.pdf"
    },
    {
      "key": "Name of Programmes Accredited by AICTE",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Status of Accreditation of the Courses",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Total number of Courses",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "No.of Courses for which applied for Accreditation",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Status of Accreditation – Preliminary/ Applied for SAR and results awaited/ Applied for SAR and visits completed/ Results of the visits awaited/ Rejected/ Approved for ….. Courses",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "For each Programme the following details are to be given:",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Name",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Number of seats",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Duration",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Cut off marks/rank of admission during the last three years",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Fee",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Considering the Pandemic situation, we would like to declare that in case of deserving students, facility to pay annual fees in installments is being offered'",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Placement Facilities",
      "value": "10.6.13 to 10.6.14"
      ,"url":"documents/About/manditory-disclosure/10.6.13-to-10.6.14.pdf"
    },
    {
      "key": "Campus placement in last three years with minimum salary, maximum salary and average salary",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Name and duration of programme(s) having Twinning and Collaboration with Foreign University(s) and being run in the same Campus along with status of their AICTE approval. If there is Foreign Collaboration, give the following details:",
      "value": "N.A."
      ,"url":"documents/About/"
    },
    {
      "key": "Details of the Foreign University\nName of the University\nAddress\nWebsite\nAccreditation status of the University in its Home Country\nRanking of the University in the Home Country\nWhether the degree offered is equivalent to an Indian Degree? If yes, the name of the agency which has approved equivalence. If no, implications for students in terms of pursuit of higher studies in India and abroad and job both within and outside the country\nNature of Collaboration\nConditions of Collaboration\nComplete details of payment a student has to make to get the full benefit of Collaboration",
      "value": "N.A."
      ,"url":"documents/About/"
    },
    {
      "key": "For each Programme Collaborated provide the following:\nProgramme Focus\nNumber of seats\nAdmission Procedure\nFee\nPlacement Facility\nPlacement Records for last three years with minimum salary, maximum salary and average salary\nWhether the Collaboration Programme is approved by AICTE? If not whether the Domestic/Foreign University has applied to AICTE for approval",
      "value": "N.A."
      ,"url":"documents/About/"
    }
  ],
  [
    {
      "key": "Faculty",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Branch wise list Faculty members:",
      "value": "10.7.1"
      ,"url":"documents/About/"
    },
    {
      "key": "Permanent Faculty",
      "value": 162
    ,  "url":"documents/About/"
    },
    {
      "key": "Adjunct Faculty --",
      "value": "Nil"
      ,"url":"documents/About/"
    },
    {
      "key": "Permanent Faculty: Student Ratio",
      "value": 19.24
      ,"url":"documents/About/"
    },
    {
      "key": "Number of Faculty employed and left during the last three years =",
      "value": "Employeed Left\n2017-18 33 24\n2018-19 07 27 \n2019-20 03 04"
      ,"url":"documents/About/"
    }
  ],
  [
    {
      "key": "Profile of Vice Chancellor/ Director/ Principal/ Faculty",
      "value": 10.8
     , "url":"documents/About/manditory-disclosure/10.8.pdf"
    },
    {
      "key": "For each Faculty give a page covering with Passport size photograph\nName\nDate of Birth\nUnique id\nEducation Qualifications\nWork Experience\nTeaching\nResearch\nIndustry\nothers\nArea of Specialization\nCourses taught at Diploma/ Post Diploma/ Under Graduate/ Post Graduate/ Post Graduate Diploma Level\nResearch guidance\nNo. of papers published in National/ International Journals/ Conferences\nMaster\nPh.D.\nProjects Carried out\nPatents\nTechnology Transfer\nResearch Publications No. of Books published with details",
      "value": ""
   ,   "url":"documents/About/"
    }
  ],
  [
    {
      "key": "Fee",
      "value": "Fees Proposal submitted to FRA for A.Y. 2020-21"
      ,"url":"documents/About/manditory-disclosure/fee-proposal-submitted-to-fra-for-ay-2020-21.pdf"
    },
    {
      "key": "Details of fee, as approved by State Fee Committee, for the Institution",
      "value": "Tution fees Rs. 87048/- Development fees Rs. 12952/- Total fees Rs. 100000/-"
      ,"url":"documents/About/"
    },
    {
      "key": "Time schedule for payment of fee for the entire programme",
      "value": "At the time of taking admission"
      ,"url":"documents/About/"
    },
    {
      "key": "No.of Fee waivers granted with amount and name of students",
      "value": "Nil"
      ,"url":"documents/About/"
    },
    {
      "key": "Number of scholarship offered by the Institution, duration and amount",
      "value": "Nil"
      ,"url":"documents/About/"
    },
    {
      "key": "Criteria for fee waivers/scholarship",
      "value": "N.A."
      ,"url":"documents/About/"
    },
    {
      "key": "Estimated cost of Boarding and Lodging in Hostels",
      "value": "Mess Charges (P.M.) Hostel Charges (P.Y.)\nGirls Hostel - 1700/- 17,000/-\nBoys Hostel - 1800/- 18,000/-"
      ,"url":"documents/About/"
    }
  ],
  [
    {
      "key": "Admission",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Number of seats sanctioned with the year of approval",
      "value": "10.10.1 to 10.10.3"
      ,"url":"documents/About/manditory-disclosure/10.10.1-to-10.10.3.pdf"
    },
    {
      "key": "Number of Students admitted under various categories each year in the last three years",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Number of applications received during last two years for admission under Management Quota and number admitted",
      "value": ""
   ,   "url":"documents/About/"
    }
  ],
  [
    {
      "key": "Admission Procedure",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Mention the admission test being followed, name and address of the Test Agency and its URL (website)",
      "value": "10.11.1 to 10.11.6"
      ,"url":"documents/About/manditory-disclosure/10.11.1-to-10.11.6.pdf"
    },
    {
      "key": "Number of seats allotted to different Test Qualified candidate separately (AIEEE/ CET (State conducted test/ University tests/ CMAT/ GPAT)/ Association conducted test)",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Calendar for admission against Management/vacant seats:",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Last date of request for applications",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Last date of submission of applications",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Dates for announcing final results",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Release of admission list (main list and waiting list shall be announced on the same day)",
      "value": "10.11.7"
      ,"url":"documents/About/manditory-disclosure/10.11.7.xlsx"
    },
    {
      "key": "Date for acceptance by the candidate (time given shall in no case be less than 15 days)",
      "value": "As per rules and schedule declared by Directorate of Technical Education Maharashtra State Mumbai"
      ,"url":"documents/About/"
    },
    {
      "key": "Last date for closing of admission",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Starting of the Academic session",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "The waiting list shall be activated only on the expiry of date of main list",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "The policy of refund of the fee, in case of withdrawal, shall be clearly notified",
      "value": ""
   ,   "url":"documents/About/"
    }
  ],
  [
    {
      "key": "Criteria and Weightages for Admission",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Describe each criterian with its respective weightages i.e. Admission Test, marks in qualifying examination etc.",
      "value": "10.12.1 to 10.12.3"
      ,"url":"documents/About/manditory-disclosure/10.12.1 to 10.12.3.pdf"
    },
    {
      "key": "Mention the minimum level of acceptance, if any",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Mention the cut-off levels of percentage and percentile score of the candidates in the admission test for the last three years",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Display marks scored in Test etc. and in aggregate for all candidates who were admitted",
      "value": "10.11.7"
      ,"url":"documents/About/manditory-disclosure/10.11.7.xlsx"
    }
  ],
  [
    {
      "key": "List of Applicants",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "List of candidate whose applications have been received along with percentile/percentage score for each of the qualifying examination in separate categories for open seats. List of candidate who have applied along with percentage and percentile score for Management quota seats",
      "value": 10.13
      ,"url":"documents/About/manditory-disclosure/10.13-mq-list.xlsx"
    }
  ],
  [
    {
      "key": "Results of Admission Under Management seats /Vacant seats",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Composition of selection team for admission under Management Quota with the brief profile of members (This information be made available in the public domain after the admission process is over)",
      "value": "10.14.1 to 10.14.5"
      ,"url":"documents/About/manditory-disclosure/10.14.1-to-10.14.5.pdf"
    },
    {
      "key": "Score of the individual candidate admitted arranged in order or merit",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "List of candidate who have been offered admission",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Waiting list of the candidate in order of merit to be operative from the last date of joining of the first list candidate",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "List of the candidate who joined within the date, vacancy position in each category before operation of waiting list",
      "value": ""
   ,   "url":"documents/About/"
    }
  ],
  [
    {
      "key": "Information of Infrastructure and Other Resources Available",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Number of Class Rooms and size of each",
      "value": "36 Nos. Av. Area 80 sqm."
      ,"url":"documents/About/"
    },
    {
      "key": "Number of Tutorial rooms and size of each",
      "value": "9 Nos. Av. Area 40 sqm."
      ,"url":"documents/About/"
    },
    {
      "key": "Number of Laboratories and size of each",
      "value": "UG - 69 + PG 10 = 75 Nos. Av. Area 74.87 sqm."
      ,"url":"documents/About/"
    },
    {
      "key": "Number of Drawing Halls with capacity of each",
      "value": "3 Nos. Av. Area 145 sqm."
      ,"url":"documents/About/"
    },
    {
      "key": "Number of Computer Centres with capacity of each",
      "value": "2 Nos. Av. Area 170 sqm."
      ,"url":"documents/About/"
    },
    {
      "key": "Central Examination Facility, Number of rooms and capacity of each",
      "value": "6 Nos. Av. Area 75 sqm."
      ,"url":"documents/About/"
    },
    {
      "key": "Barrier Free Built Environment for disabled and elderly persons",
      "value": "YES"
      ,"url":"documents/About/"
    },
    {
      "key": "Occupancy Certificate",
      "value": "YES"
      ,"url":"documents/About/"
    },
    {
      "key": "Fire and Safety Certificate",
      "value": "YES"
      ,"url":"documents/About/"
    },
    {
      "key": "Hostel Facilities",
      "value": "Adequate for Boys & Girls"
      ,"url":"documents/About/"
    },
    {
      "key": "Library",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Number of Library books/ Titles/ Journals available (program-wise)",
      "value": "10.15.B.1 to 10.15.B.3"
      ,"url":"documents/About/manditory-disclosure/10.15.b.1-to-10.15.b.3.pdf"
    },
    {
      "key": "List of online National/ International Journals subscribed",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "E- Library facilities",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Laboratory and Workshop",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "List of Major Equipment/Facilities in each Laboratory/ Workshop",
      "value": "10.15.C.1 to 10.15.C.2"
      ,"url":"documents/About/"
    },
    {
      "key": "List of Experimental Setup in each Laboratory/ Workshop",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Computing Facilities",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Internet Bandwidth",
      "value": "10.15.D.1 to 10.15.D.6"
      ,"url":"documents/About/manditory-disclosure/10.15.d.1-to-d.6.pdf"
    },
    {
      "key": "Number and configuration of System",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Total number of system connected by LAN",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Total number of system connected by WAN",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Major software packages available",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Special purpose facilities available",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Innovation Cell",
      "value": "10.15.D.7"
      ,"url":"documents/About/manditory-disclosure/10.15.d-7.pdf"
    },
    {
      "key": "Social Media Cell",
      "value": "10.15.D.8"
      ,"url":"documents/About/manditory-disclosure/10.15.d-8.pdf"
    },
    {
      "key": "Compliance of the National Academic Depository (NAD), applicable to PGCM/ PGDM Institutions and University Departments",
      "value": "N.A."
      ,"url":"documents/About/"
    },
    {
      "key": "List of facilities available",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Games and Sports Facilities",
      "value": "10.15.E.1"
      ,"url":"documents/About/manditory-disclosure/10.15-e-1.pdf"
    },
    {
      "key": "Extra-Curricular Activities",
      "value": "10.15.E.2"
      ,"url":"documents/About/manditory-disclosure/10.15-e-2.pdf"
    },
    {
      "key": "Soft Skill Development Facilities",
      "value": "10.15.E.3"
      ,"url":"documents/About/manditory-disclosure/10.15-e-3.pdf"
    },
    {
      "key": "Teaching Learning Process",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Curricular and syllabus for each of the programmes as approved by the University",
      "value": "online-syllabus"
      ,"url":"online-syllabus"
    },
    {
      "key": "Academic Calendar of the University",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Academic Time Table with the name of the Faculty members handling the Course",
      "value": "10.15.F.1 to 10.15.F.6"
      ,"url":"documents/About/manditory-disclosure/10.15.f.1-to-10.15.f.6.pdf"
    },
    {
      "key": "Teaching Load of each Faculty",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Internal Continuous Evaluation System and place",
      "value": "Available"
      ,"url":"documents/About/"
    },
    {
      "key": "Student’s assessment of Faculty, System in place",
      "value": "Available"
      ,"url":"documents/About/"
    },
    {
      "key": "For each Post Graduate Courses give the following:",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Title of the Course",
      "value": "10.15.G.1 to 10.15.G.3"
      ,"url":"documents/About/manditory-disclosure/10.15.g.1-to-10.15.g.3.pdf"
    },
    {
      "key": "Curricula and Syllabi",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Laboratory facilities exclusive to the Post Graduate Course",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Special Purpose",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Software, all design tools in case",
      "value": "AUTOCAD, CATIA V5, MATLAB, ETAB, SAP"
      ,"url":"documents/About/"
    },
    {
      "key": "Academic Calendar and frame work",
      "value": "Academic_calender-_1819_SEMII_FY-_Btech.pdf"
      ,"url":"#"
    }
  ],
  [
    {
      "key": "Enrollment of students in the last 3 years",
      "value": 10.16
      ,"url":"documents/About/manditory-disclosure/10.16.pdf"
    }
  ],
  [
    {
      "key": "List of Research Projects/ Consultancy Works",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Number of Projects carried out, funding agency, Grant received",
      "value": "10.17.1 to 10.17.4"
      ,"url":"documents/About/manditory-disclosure/10.17.1-to-10.17.4.pdf"
    },
    {
      "key": "Publications (if any) out of research in last three years out of masters projects",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "Industry Linkage",
      "value": ""
   ,   "url":"documents/About/"
    },
    {
      "key": "MoUs with Industries (minimum 3)",
      "value": ""
   ,   "url":"documents/About/"
    }
  ],
  [
    {
      "key": "LoA and subsequent EoA till the current Academic Year",
      "value": 10.18
      ,"url":"documents/About/manditory-disclosure/10.18.pdf"
    }
  ],
  [
    {
      "key": "Accounted audited statement for the last three years",
      "value": "10.19"
      ,"url":"documents/About/manditory-disclosure/10.19-audit-report.pdf"
    },
    {
      "key": "",
      "value": "Audit Report - 2016-17"
      ,"url":"documents/About/manditory-disclosure/10.19-audit-report-2016-17.pdf"
    },
    {
      "key": "",
      "value": "Audit Report - 2017-18"
      ,"url":"documents/About/manditory-disclosure/10.19-audit-report-2017-18.pdf"
    },
    {
      "key": "",
      "value": "Audit Report - 2018-19"
      ,"url":"documents/About/manditory-disclosure/10.19-audit-report-2018-19.pdf"
    },
    {
      "key": "",
      "value": "Audit Report - 2020-21"
      ,"url":"documents/About/Mandatory-Disclosure/KIT COEK Audit Report 2020-21.pdf"
    }
  ],
  [
    {
      "key": "Best Practices adopted, if any",
      "value": 10.2
     , "url":"documents/About/manditory-disclosure/10.20.pdf"
    }
  ]
    ]
  return (
    <DefaultLayout>
      <div className="w-full ">
        <section className="flex flex-col h-[250px] items-center w-full relative">
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-24 h-24 absolute top-0 left-[25%] z-10 sm:w-16 sm:h-16 sm:top-[5%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-32 h-32 absolute top-[10%] left-[5%] z-10 sm:w-24 sm:h-24 sm:top-[35%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-40 h-40 absolute top-[10%] left-[60%] z-10 sm:w-20 sm:h-20 sm:top-[17%]"
            alt=""
          />
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
            alt=""
          />
          <div className="absolute w-full h-[250px] top-0 left-0 bg-[#24346D] z-0"></div>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] mt-14 sm:text-xl  text-4xl font-bold text-center text-white z-20"
          >
            Manditory Disclosure
          </h1>
          <br></br>
          <br></br>
        
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Manditory Disclosure
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="overflow-hidden pb-16 max-w-screen bg-secondary">
          <section className="relative z-30  mx-auto h-fit px-14 sm:px-4 sm:pb-10  ">
            <div className="mt-8"></div>
          {mandatory2021.map((card, cardIndex) => {
               return (<>
                        <div className="grid grid-flow-row bg-white divide-y items-center mx-auto h-fit p-2 mt-6 gap-2 text-left rounded-lg shadow-lg ">
                          {card.map((item,itemIndex) => {
                            console.log("------------------------------",item)
                           if(item.url != "documents/About/"){
                            return(<>
                                  <div className="grid grid-cols-2">
                                    <div className="text-slate-400">{item.key}</div>
                                    <a href={item.url} target="_blank" rel="noreferrer" className="text-primary" >{item.value}</a>
                                  </div>         
                              </>  )
                           }else{
                            return(<>
                              <div className="grid grid-cols-2">
                                <div className="text-slate-400">{item.key}</div>
                                <div>{item.value}</div>
                              </div>         
                              </>  )
                           }
                                   
                          })}     
                         
                        </div>
                    </>)
          })}
           
            
          </section>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default ManditoryDisclosure20
