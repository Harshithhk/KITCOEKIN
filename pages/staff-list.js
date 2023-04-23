import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const StaffList = () => {
  let staff = [{
		"SrNo": 0,
		"NameOfTheFaculty": "DR KARJINNI VILAS VIJAYA",
		"Course": "Executive DIRECTOR",
		"Designation": "Executive DIRECTOR",
		"DateOfJoining": "02/02/2014",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH.(TRANSPORTATION SYSTEM ENGINEERING) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 34
	},
	{
		"SrNo": 1,
		"NameOfTheFaculty": "Prof.Dr. M. B. VANAROTTI",
		"Course": "DIRECTOR",
		"Designation": "DIRECTOR",
		"DateOfJoining": "",
		"Qualification": "",
		"NatureOfAppointment": "REGULAR",
		"Experience": 25
	},
	{
		"SrNo": 2,
		"NameOfTheFaculty": "DR DIXIT MANASI RENUKAPRASAD",
		"Course": "ELECTRONICS ENGINEERING",
		"Designation": "PROFESSOR",
		"DateOfJoining": "22/9/1985",
		"Qualification": "BE (ELECTRICAL) , ME (ELECTRONICS) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 35
	},{
		"SrNo": 3,
		"NameOfTheFaculty": "MR NIGAVEKAR ATUL RAVICHANDRA",
		"Course": "ELECTRONICS ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR HEAD",
		"DateOfJoining": "5/9/1989",
		"Qualification": "B.E.(ELECTRONICS ENGINEERING) , M.E. (ELECTRONICS ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 29
	},{
		"SrNo": 4,
		"NameOfTheFaculty": "MR DESAI VIVEK KAMALAKAR",
		"Course": "ELECTRONICS ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "20/08/1993",
		"Qualification": "B.E.(ELECTRONICS ENGINEERING) ,  ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 25
	},{
		"SrNo": 5,
		"NameOfTheFaculty": "MR RENKE AMAR LAXMAN",
		"Course": "ELECTRONICS ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/07/2004",
		"Qualification": "B.E.(ELECTRONICS ENGINEERING) , M.E. (ELECTRONICS TELECOMMUNICATION ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 19
	},{
		"SrNo": 6,
		"NameOfTheFaculty": "MRS GANGAPURE MADHURA VIJAY",
		"Course": "ELECTRONICS ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/1/2008",
		"Qualification": "B.E.(ELECTRONICS ENGINEERING) , M.E. (ELECTRONICS TELECOMMUNICATION ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 15
	},{
		"SrNo": 7,
		"NameOfTheFaculty": "MR MOHITE ANIL SUBARAO",
		"Course": "ELECTRONICS ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "31/07/2011",
		"Qualification": "B.E.(ELECTRONICS ENGINEERING) , M.TECH.(ELECTRONICS TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 14
	},{
		"SrNo": 8,
		"NameOfTheFaculty": "MS VIDHATE GAYATRI RAVINDRA",
		"Course": "ELECTRONICS ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "10/7/2014",
		"Qualification": "B.TECH (ELECTRONICS COMMUNICATION TECHLOGY) , M.TECH. (ELECTRONICS TECHLGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 5
	},{
		"SrNo": 9,
		"NameOfTheFaculty": "MR THAKUR GOURAV SHOBHAN",
		"Course": "ELECTRONICS ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2014",
		"Qualification": "B.E.(ELECTRONICS TELECOMMUNICATION ENGINEERING) , M.TECH (VLSI EMBEDDED SYSTEMS) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 5
	},{
		"SrNo": 10,
		"NameOfTheFaculty": "MS LAD SONAL RAMESH",
		"Course": "ELECTRONICS ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "14/08/2012",
		"Qualification": "B.E. (ELECTRONICS ENGINEERING) , M. TECH. ( ELECTRONCIS TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 7
	},{
		"SrNo": 11,
		"NameOfTheFaculty": "DR NAIK GIRISH RAMCHANDRA",
		"Course": "PRODUCTION ENGINEERING",
		"Designation": "PROFESSOR ",
		"DateOfJoining": "4/2/1989",
		"Qualification": "B.E.(PRODUCTION ENGINEERING) , M.E. (MECH-PROD) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 30
	},{
		"SrNo": 12,
		"NameOfTheFaculty": "MR MADHALE AJAY KRISHNARAO",
		"Course": "PRODUCTION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR DY. REGISTRAR ON-EXAM",
		"DateOfJoining": "01/07/2004",
		"Qualification": "B.E.(PRODUCTION ENGINEERING) , M.E. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 19
	},{
		"SrNo": 13,
		"NameOfTheFaculty": "DR POWAR PRASHANT PRAKASH",
		"Course": "PRODUCTION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR DEAN QUALITY ASSURANCE",
		"DateOfJoining": "01/07/2004",
		"Qualification": "B.E.(MECHANICAL ENGINEERING) , M.E. (MECH-PROD) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 18
	},{
		"SrNo": 14,
		"NameOfTheFaculty": "MR KADANE SANDEEP MADHUKAR",
		"Course": "PRODUCTION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR HEAD",
		"DateOfJoining": "1/7/2004",
		"Qualification": "B.E.(PRODUCTION ENGINEERING) , M.E. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 14
	},{
		"SrNo": 15,
		"NameOfTheFaculty": "MR PATIL RANJIT SADANAND",
		"Course": "PRODUCTION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/06/2010",
		"Qualification": "B.E.(PRODUCTION ENGINEERING) , M.TECH (MANUFACTURING ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 10
	},{
		"SrNo": 16,
		"NameOfTheFaculty": "MR KAMBLE BHUSHAN SHANKAR",
		"Course": "PRODUCTION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "12/1/2010",
		"Qualification": "B.E.(PRODUCTION ENGINEERING) , M.E. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 9
	},{
		"SrNo": 17,
		"NameOfTheFaculty": "DR SWAMI VIDULA ARUN",
		"Course": "CIVIL ENGINEERING",
		"Designation": "PROFESSOR HEAD ",
		"DateOfJoining": "12/7/1991",
		"Qualification": "B.E.(CIVIL ENGINEERING) , M.E(TOWN COUNTRY PLANNING) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 28
	},{
		"SrNo": 18,
		"NameOfTheFaculty": "DR MUJUMDAR MANOJ MOHAN",
		"Course": "CIVIL ENGINEERING",
		"Designation": "PROFESSOR REGISTRAR",
		"DateOfJoining": "1/10/1991",
		"Qualification": "B.E.(CIVIL ENGINEERING) , M.E (WATTER RESOURCE ENGINEERING) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 31
	},{
		"SrNo": 19,
		"NameOfTheFaculty": "MR CHAVAN MOHAN APPASAHEB",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR ",
		"DateOfJoining": "01/01/2008",
		"Qualification": "B.E. (CONSTRUCTION) , M.E. (-CIVIL-STRUCTURES) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 28
	},{
		"SrNo": 20,
		"NameOfTheFaculty": "MR HIRASKAR KISHOREKUMAR GOVINDRAO",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR ",
		"DateOfJoining": "14/01/1993",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH. (MARIN STRUCTURES) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 27
	},{
		"SrNo": 21,
		"NameOfTheFaculty": "MR DIGE SATEJ GUNPAL",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR DY. REGISTRAR POST-EXAM",
		"DateOfJoining": "6/7/1989",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.E. (CIVIL STRUCTURES) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 29
	},{
		"SrNo": 22,
		"NameOfTheFaculty": "MR SADOLIKAR HEMANT VASANT",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "23/08/1990",
		"Qualification": "B.E. (CONSTRUCTION) , M.E. (CIVIL STRUCTURES) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 34
	},{
		"SrNo": 23,
		"NameOfTheFaculty": "MR LIPARE SANJAY VASUDEV",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "10/9/1994",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.E. (CIVIL-STRUCTURES) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 28
	},{
		"SrNo": 24,
		"NameOfTheFaculty": "MR VARUR SHEETAL SATYAVEER",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/8/2001",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH.(ENVIRONMENTAL SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 26
	},{
		"SrNo": 25,
		"NameOfTheFaculty": "MR KOLEKAR SHITAL MURALIDHAR",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "12/1/2010",
		"Qualification": "B.E.(CIVIL ENGINEERING) , M.E. (CIVIL-STRUCTURES) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 15
	},{
		"SrNo": 26,
		"NameOfTheFaculty": "MR SURYAWANSHI-PATIL VIVEKANAND SADASHIV",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2009",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.E (CIVIL-STRUCTURES) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 27,
		"NameOfTheFaculty": "MR SAWANT AMOL BALASAHEB",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2008",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.E (CIVIL-CONSTRUCTION MANAGEMENT )  ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 28,
		"NameOfTheFaculty": "MR PATIL  ABHIJIT DAJI",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "02/07/2013",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH. (EARTHQUAKE-STRUCTURAL DYNAMICS) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 29,
		"NameOfTheFaculty": "MR SAWANT SANDEEP GANPATI",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.E (CIVIL-CONSTRUCTION MANAGEMENT)  ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 9
	},{
		"SrNo": 30,
		"NameOfTheFaculty": "MR JADHAV SURENDRANATH  SHIVAJI",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "27/8/2015",
		"Qualification": "B. TECH. (CIVIL ENGINEERING) , M.TECH. (CIVIL-STRUCTURES) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 3
	},{
		"SrNo": 31,
		"NameOfTheFaculty": "MS LAVANGARE  VASUNDHARA  HANMANTRAO",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/8/2014",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH. (ENVIRONMENTAL  SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 4
	},{
		"SrNo": 32,
		"NameOfTheFaculty": "MR MOHITE SWAPNIL BABURAO",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/06/2010",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH. (STRUCTURAL ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 13
	},{
		"SrNo": 33,
		"NameOfTheFaculty": "MR NALAWADE ROHAN VIJAY",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH. (CIVIL-CONSTRUCTION MANAGEMENT) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 10
	},{
		"SrNo": 34,
		"NameOfTheFaculty": "MR CHAVAN GURUPRASAD  AJAY",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "16/7/2013",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.E. ( CONSTRUCTION MANAGEMENT) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 7
	},{
		"SrNo": 35,
		"NameOfTheFaculty": "MR KHEBUDKAR ADITYA KIRAN",
		"Course": "CIVIL ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "15/01/2020",
		"Qualification": "B.E.(CIVIL ENGINEERING) , M.TECH(STRUCTURES) No",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 36,
		"NameOfTheFaculty": "DR THORVAT AKSHAY RAJAN",
		"Course": "ENVIRONMENTAL ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR HEAD DEAN STUDENT ACTIVITY",
		"DateOfJoining": "01/01/2009",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH.(ENVIRONMENTAL SCIENCE TECHLOGY) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 37,
		"NameOfTheFaculty": "MR NIKAM RAVINDRA ANANDRAO",
		"Course": "ENVIRONMENTAL ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "14/02/1988",
		"Qualification": "B.E. (ENVIRONMENTAL ENGINEERING) , M.E. (STRUCTURES) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 32
	},{
		"SrNo": 38,
		"NameOfTheFaculty": "MRS SALER PARUL SUNIL",
		"Course": "ENVIRONMENTAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/01/2008",
		"Qualification": "B.E. (ENVIRONMENTAL ENGINEERING) , M.E. (ENVIRONMENTAL ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 20
	},{
		"SrNo": 39,
		"NameOfTheFaculty": "MR JADHAV PRAMOD KESHAVRAO",
		"Course": "ENVIRONMENTAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2008",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH.(ENVIRONMENTAL SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 16
	},{
		"SrNo": 40,
		"NameOfTheFaculty": "MR INGAVALE BHARAT CHANDRAKANT",
		"Course": "ENVIRONMENTAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2011",
		"Qualification": "B.E. (ENVIRONMENTAL ENGINEERING) , M.TECH.(CIVILENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 8
	},{
		"SrNo": 41,
		"NameOfTheFaculty": "MR KANGALE KIRAN MADHUKAR",
		"Course": "ENVIRONMENTAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.E. (ENVIRONMENTAL ENGINEERING) , M.TECH.(ENVIRONMENTAL SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 42,
		"NameOfTheFaculty": "MR KATKAR AMAR AKARAM",
		"Course": "ENVIRONMENTAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/06/2010",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH.(ENVIRONMENTAL SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 43,
		"NameOfTheFaculty": "MR JOSHI SAURABH SANJAY",
		"Course": "ENVIRONMENTAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "10/07/2012",
		"Qualification": "B.E.(ENVIRONMENTAL ENGINEERING) , M.TECH.(ENVIRONMENTAL  SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 6
	},{
		"SrNo": 44,
		"NameOfTheFaculty": "MRS BORCHATE SMITA SANDEEP",
		"Course": "ENVIRONMENTAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2009",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH.(ENVIRONMENTAL  SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 13
	},{
		"SrNo": 45,
		"NameOfTheFaculty": "DR KALAS MAMATA SACHIN",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "PROFESSOR HEAD",
		"DateOfJoining": "06/01/2010",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING), M.TECH. (COMPUTER SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 23
	},{
		"SrNo": 46,
		"NameOfTheFaculty": "DR AMIT SARKAR",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "PROFESSOR",
		"DateOfJoining": "10/11/2019",
		"Qualification": "B.E.(COMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER SCIENCE ENGG.), Ph.D. ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 16
	},{
		"SrNo": 47,
		"NameOfTheFaculty": "MR PATIL AJIT SAMAGONDA",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR ",
		"DateOfJoining": "01/01/2004",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.TECH. (COMPUTER SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 15
	},{
		"SrNo": 48,
		"NameOfTheFaculty": "MR SALUNKHE MAHESH SITARAM",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "14/7/2000",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 18
	},{
		"SrNo": 49,
		"NameOfTheFaculty": "MR PATIL TANAJI BHAUSO",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR  ASSO. DEAN EXAMINATION EVALUATION",
		"DateOfJoining": "01/01/2004",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER SCIENCE ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 15
	},{
		"SrNo": 50,
		"NameOfTheFaculty": "MRS JADHAV DEEPALI KISHOR",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/07/2003",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.TECH(. COMPUTER SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 15
	},{
		"SrNo": 51,
		"NameOfTheFaculty": "MRS SAWANT ARCHANA SANDEEP",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/06/2010",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.TECH.(COMPUTER SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 16
	},{
		"SrNo": 52,
		"NameOfTheFaculty": "MRS PANDHARE RANJEETA BALU",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR ASSO.  DEAN STUDENT ACTIVITY ",
		"DateOfJoining": "02/02/2007",
		"Qualification": "B.E.(COMPUTER SCIENCE ENGINEERING) , M.TECH. (COMPUTER SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 53,
		"NameOfTheFaculty": "MR MAHAJAN NAVIN SHRIPAL",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "2/07/2013",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.TECH. (COMPUTER SCIENCE ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 15
	},{
		"SrNo": 54,
		"NameOfTheFaculty": "MRS POWAR VAISHALI GUNDU",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "25/01/2011",
		"Qualification": "B.E. (INFORMATION TECHLOGY) , M.TECH. (COMPUTER SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 55,
		"NameOfTheFaculty": "MRS GURAV UMA PRASHANT",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/07/2009",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.TECH(COMPUTER ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 14
	},{
		"SrNo": 56,
		"NameOfTheFaculty": "MR PUJARI JAMBUKESHWAR SURESH",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "2/07/2013",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER SCIENCE ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 8
	},{
		"SrNo": 57,
		"NameOfTheFaculty": "MRS PATIL VIDYA ROHAN",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER SCIENCE ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 14
	},{
		"SrNo": 58,
		"NameOfTheFaculty": "MR MAHAJAN DEEPAK DILIP",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "3/08/2011",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER SCIENCE ENGG.) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 8
	},{
		"SrNo": 59,
		"NameOfTheFaculty": " MR PATIL AJIT BHIMRAO",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "8/11/2017",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 3
	},{
		"SrNo": 60,
		"NameOfTheFaculty": "MR KAPASE AJAY BABASAHEB",
		"Course": "COMPUTER SCIENCE ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "11/07/2013",
		"Qualification": "B.E. (INFORMATION TECHLOGY) , M.E. (COMPUTER NETWORKS)   ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 5
	},{
		"SrNo": 61,
		"NameOfTheFaculty": "MR PALKAR SAMADHAN  SHIVAJI",
		"Course": "INFORMATION TECHNOLOGY ",
		"Designation": "ASSISTANT PROFESSOR HEAD",
		"DateOfJoining": "2/07/2013",
		"Qualification": "B.E.(INFORMATION TECHLOGY) , M.TECH. (COMPUTER  SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 62,
		"NameOfTheFaculty": "MR DESAI ARUN RANGRAO",
		"Course": "INFORMATION TECHNOLOGY",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "16/07/2013",
		"Qualification": "B.E. (COPMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER NETWORKS)   ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 8
	},{
		"SrNo": 63,
		"NameOfTheFaculty": "MR PRABHAVALKAR VINAY SUDHIR",
		"Course": "INFORMATION TECHNOLOGY",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "09/08/2016",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.TECH. (COMPUTER SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 10
	},{
		"SrNo": 64,
		"NameOfTheFaculty": "MS PATIL MANALI SAMBHAJI",
		"Course": "INFORMATION TECHNOLOGY",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "13/06/2017",
		"Qualification": "B.E. (INFORMATION TECHNOLOGY),M.E. (INFORMATION TECHNOLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 2.5
	},{
		"SrNo": 65,
		"NameOfTheFaculty": "MR RABADE SANDIP SADASHIV",
		"Course": "INFORMATION TECHNOLOGY",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "18/07/2017",
		"Qualification": "B.E. (INFORMATION TECHNOLOGY),M.E. (COMPUTER NETWORKS)   ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 6
	},{
		"SrNo": 66,
		"NameOfTheFaculty": "MRS PATIL POOJA PANDIT",
		"Course": "INFORMATION TECHNOLOGY",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/12/2017",
		"Qualification": "B.E.(INFORMATION TECHLOGY) , M.E.(COMPUTER) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 7
	},{
		"SrNo": 67,
		"NameOfTheFaculty": "DR BHAPKAR UDAYSINH SHIVAJI",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "PROFESSOR HEAD",
		"DateOfJoining": "01/07/2004",
		"Qualification": "B.E. (MECHANICAL ENGINEERING) , M.E. (MECHANICAL- Heat POWER ENGG) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 18
	},{
		"SrNo": 68,
		"NameOfTheFaculty": "MR MANE SUBHASH SHIVRAM",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR DEAN ALUMNI CORPORATE RELATIONS",
		"DateOfJoining": "01/01/2006",
		"Qualification": "B.E. (METALARGY) , M.E. (MECHANICAL ENGINEEING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 34
	},{
		"SrNo": 69,
		"NameOfTheFaculty": "DR KARIDKAR SUNIL SURESHRAO",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/9/2004",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECH-PROD), Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 19
	},{
		"SrNo": 70,
		"NameOfTheFaculty": "MRS MANE VINITA SANDIP",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "3/1/2006",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 13
	},{
		"SrNo": 71,
		"NameOfTheFaculty": "MR MUTALIK PRASAD BALAJI",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "3/7/2007",
		"Qualification": "B.E. (MECHANICAL ENGINEERING) , M.TECH. (THERMAL ENGG) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 15
	},{
		"SrNo": 72,
		"NameOfTheFaculty": "MR KADAM SHIVRAJ SAMBHAJIRAO",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR DY. REGISTRAR PRE-EXAM.",
		"DateOfJoining": "14/07/2004",
		"Qualification": "B.E. (MECHANICAL ENGINEERING) , M.E. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 22
	},{
		"SrNo": 73,
		"NameOfTheFaculty": "MR KAMBLE VIJAYKUMAR DNYANDEO",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.TECH.Prod.Engineering (MANUFACTURING AUTOMATION)  ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 9
	},{
		"SrNo": 74,
		"NameOfTheFaculty": "MR JAMADADE SUNIL  SHARAD",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "2/07/2013",
		"Qualification": "B.E. (MECHANICAL ENGINEERING) , M.Tech. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 7
	},{
		"SrNo": 75,
		"NameOfTheFaculty": "MR SHINDE SANGRAM SHIVAJIRAO",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.E.(AUTOMOBILE ENGINEERING)  , M.E. (MECH-Heat power) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 13
	},{
		"SrNo": 76,
		"NameOfTheFaculty": "MRS CHOUGULE ASHWINI MAHESH",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "18/07/2006",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECH-PROD)  ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 77,
		"NameOfTheFaculty": "MRS KHAN JAHIDA NIYAZ",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2009",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 78,
		"NameOfTheFaculty": "MR KULKARNI MIHIR HEMANT",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "3/7/2012",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 9
	},{
		"SrNo": 79,
		"NameOfTheFaculty": "MR GOSAVI PRAVIN SAMBHAJI",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "21/12/2015",
		"Qualification": "B.E. (MECHANICAL ENGINEERING) , M.TECH. (MECHANICAL DESIGN) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 4
	},{
		"SrNo": 80,
		"NameOfTheFaculty": "MR SHAH SHAILESH JAYANTILAL",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/09/2010",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 24
	},{
		"SrNo": 81,
		"NameOfTheFaculty": "MR KULKARNI GURURAJ RAMKRISHNA",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/01/2008",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.TECH. (MECHANICAL ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 82,
		"NameOfTheFaculty": "MR VAIDYA AMIT SURESH",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "18/01/2011",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 18
	},{
		"SrNo": 83,
		"NameOfTheFaculty": "MR DESAI NILESH TUKARAM",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "23/12/2015",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E.(CAD/CAM/CAE) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 13
	},{
		"SrNo": 84,
		"NameOfTheFaculty": "MR PATIL ASHISH TATYASAHEB",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "21/12/2016",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECHANICAL /PRODUCTION) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 14
	},{
		"SrNo": 85,
		"NameOfTheFaculty": "MR PATIL SOURABH SURYAKANT",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "13/06/2017",
		"Qualification": "B.E. (MECHANICAL ENGINEERING) , M.TECH (I C ENGINE) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 4
	},{
		"SrNo": 86,
		"NameOfTheFaculty": "MR FARANDE BAHUBALI BALASO",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/1/2020",
		"Qualification": "B.E.(MECHANICAL ENGG.) , M.E.(MECHANICAL DESIGN ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 4.7
	},{
		"SrNo": 87,
		"NameOfTheFaculty": "MR BORE SWAROOPSINH BALWANT",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/1/2020",
		"Qualification": "B.E.(MECHANICAL ENGG.) , M.Tech.(HEAT POWER ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 0.5
	},{
		"SrNo": 88,
		"NameOfTheFaculty": "MR GHULANAVAR ROHIT DUNDAPPA",
		"Course": "MECHANICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "14/01/2020",
		"Qualification": "B.E. (MECHANICAL ENGINEERING) , M.E. (MACHINE DESIGN) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 6
	},{
		"SrNo": 89,
		"NameOfTheFaculty": "MRS PETKAR MEDHA BHARAT",
		"Course": "BIOTECHNOLOGY ",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "03/01/2006",
		"Qualification": "B.SC.(MICROBIOLOGY) , M.SC.(MICROBIOLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 13
	},{
		"SrNo": 90,
		"NameOfTheFaculty": "MR KARKARE RUTUPARNA PRAMOD",
		"Course": "BIOTECHNOLOGY ",
		"Designation": "ASSISTANT PROFESSOR HEAD",
		"DateOfJoining": "3/8/2007",
		"Qualification": "B.E.(BIOTECHLOGY ENGINEERING) , M.TECH.(BIOPROCESS TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 9
	},{
		"SrNo": 91,
		"NameOfTheFaculty": "DR SANANDAM MONICA RAJAN",
		"Course": "BIOTECHNOLOGY ",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/2/2005",
		"Qualification": "B.SC.(ZOOLOGY) , M.SC.(ZOOLOGY) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 20
	},{
		"SrNo": 92,
		"NameOfTheFaculty": "MRS THAKUR SAEE HARSHAD",
		"Course": "BIOTECHNOLOGY ",
		"Designation": "ASSISTANT PROFESSOR ASO. DEAN INTERNATIONL RELATIONSHIP",
		"DateOfJoining": "01/01/2009",
		"Qualification": "B.E.(CHEMICAL) , M.E.(CHEMICAL ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 10
	},{
		"SrNo": 93,
		"NameOfTheFaculty": "MS NAVARE BILWA SHIRISH ",
		"Course": "BIOTECHNOLOGY ",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/9/2019",
		"Qualification": "M.TECH. (BIOCHEMICAL ENGINEERING BIOTECHNOLOGY) , B.E. (BIOTECHNOLOGY ENGINEERING) No",
		"NatureOfAppointment": "REGULAR",
		"Experience": 1
	},{
		"SrNo": 94,
		"NameOfTheFaculty": "MS PISHTE-DESHMUKH AISHWARYA ADITYA",
		"Course": "BIOTECHNOLOGY ",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "21/6/2018",
		"Qualification": "B.E. (BIOTECHLOGY) , M.E. (BIOMECHICAL ENGINEERING BIO TECLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 1
	},{
		"SrNo": 95,
		"NameOfTheFaculty": "MS DHEKANE PALLAVI SARJERAO",
		"Course": "BIOTECHNOLOGY ",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "4/8/2019",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.E. (ENVIRONMENTAL ENGINEERING) No",
		"NatureOfAppointment": "REGULAR",
		"Experience": 1
	},{
		"SrNo": 96,
		"NameOfTheFaculty": "MR CHOUDHARI SURENDRA KRISHNAKANT",
		"Course": "BIOTECHNOLOGY ",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "13/09/2019",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M. TECH. (STRUCTURAL ENGINEERING) No",
		"NatureOfAppointment": "REGULAR",
		"Experience": 4
	},{
		"SrNo": 97,
		"NameOfTheFaculty": "DR CHOUGULE SANGEETA RAJENDRA",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "PROFESSOR HEAD",
		"DateOfJoining": "8/12/2017",
		"Qualification": "B.E.(ELECTRONICS) , M.E.(ELECTRONICS) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 22
	},{
		"SrNo": 98,
		"NameOfTheFaculty": "MR SAMBRE NITIN BABURAO",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "1/2/1992",
		"Qualification": "B.E. (ELECTRONICS ENGINEERING) , M.E.(ELECTRONICS ENGGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 27
	},{
		"SrNo": 99,
		"NameOfTheFaculty": "MR SONTAKKE MANDAR DIGAMBAR",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/01/2010",
		"Qualification": "B.E. (ELECTRONICS ENGINEERING) , M.E.(ELECTRONICS TELECOMMUNICATION) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 15
	},{
		"SrNo": 100,
		"NameOfTheFaculty": "MR POL AJAY MANOHAR",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/01/2010",
		"Qualification": "B.E. (ELECTRONICS ENGINEERING) , M.TECH. (ELECTRONICS ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 101,
		"NameOfTheFaculty": "MR PATIL EKNATH CHANDAR",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/06/2010",
		"Qualification": "B.E. (ELECTRONICS ENGINEERING) , M.E. (ELECTRONICS TELECOMMUNICATION ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 18
	},{
		"SrNo": 102,
		"NameOfTheFaculty": "MRS SURYAWANSHI VARSHA AMOL",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "16/06/2010",
		"Qualification": "B.E. (ELECTRONICS ENGINEERING) , M.E. (ELECTRONICS TELECOMMUNICATION ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 103,
		"NameOfTheFaculty": "MRS JADHAV KOMAL VIVEK",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/07/2009",
		"Qualification": "B.E. (ELECTRONICS TECHLOGY) , M.TECH. (ELECTRONICS TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 13
	},{
		"SrNo": 104,
		"NameOfTheFaculty": "MR GUNDAVADE VIKAS BHAUSO",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2011",
		"Qualification": "B.E. (ELECTRONICS TELECOMMUNICATION ENGINEERING) , M.TECH.(ELECTRONICS TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 10
	},{
		"SrNo": 105,
		"NameOfTheFaculty": "MRS SHINDE ASHWINI AMIT",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "17/06/2010",
		"Qualification": "B.E. (ELECTRONICS TELECOMMUNICATION ENGINEERING) , M.E. (ELECTRONICS TELECOMMUNICATION ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 8
	},{
		"SrNo": 106,
		"NameOfTheFaculty": "MRS SHIKALGAR MINAJ SHARIF",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/06/2010",
		"Qualification": "B.E.- ELECTRONICS ENGG. , M.E. (ELECTRONCIS TELECOMMUNICATION ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 107,
		"NameOfTheFaculty": "MR SAWANT PARESH DATTAJI",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "10/01/2012",
		"Qualification": "B.E. (ELECTRONICS TELECOMMUNICATION ENGINEERING) , M.TECH. (MICRO ELECTRONICS) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 108,
		"NameOfTheFaculty": "MRS SUSHMITA SHARMA",
		"Course": "ELECTRONICS TELE COMMUNICATION ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "2/1/2020",
		"Qualification": "B.E. (ELECTRONCIS TELE COMMUNICATION ENGINEERING) , M.E. (ELECTRONCIS TELE COMMUNICATION ENGINEERING)",
		"NatureOfAppointment": "REGULAR",
		"Experience": 10
	},{
		"SrNo": 109,
		"NameOfTheFaculty": "MRS KULKARNI PRIYANKA PRAKASH",
		"Course": "ELECTRICAL ENGINEERING",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "9/9/1986",
		"Qualification": "BE ( ELECTRICAL ENGINEERING) , ME ( ELECTRONICS ) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 30
	},{
		"SrNo": 110,
		"NameOfTheFaculty": "MR CHAVAN PRAKASH LAXMAN ",
		"Course": "ELECTRICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/01/2020",
		"Qualification": "B.E. (ELECTRICAL ELECTRONICS ENGINEERING) , M.TECH.(POWER ENERGY SYSTEMS)",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 111,
		"NameOfTheFaculty": "MS BELGAONKAR RICHA ASHOK",
		"Course": "ELECTRICAL ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "10/08/2016",
		"Qualification": "B.E. (ELECTRICAL ELECTRONICS ENGINEERING) , M.TECH. (POWAR SYSTEM ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 4
	},{
		"SrNo": 112,
		"NameOfTheFaculty": "DR SATHE DATTATRAYA JAGANNATH",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSOCIATE PROFESSOR HEAD",
		"DateOfJoining": "20/01/2004",
		"Qualification": "B. SC. (CHEMISTRY) , M. SC. (CHEMISTRY) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 15
	},{
		"SrNo": 113,
		"NameOfTheFaculty": "DR DESAI TEJASWINI SURESHRAO",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "5/1/2010",
		"Qualification": "B. SC. (PHYSICS) , M. SC. (PHYSICS) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 22
	},{
		"SrNo": 114,
		"NameOfTheFaculty": "DR SHINDE MAHESH BALASAHEB",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "2/07/2013",
		"Qualification": "B.A.(ENGLISH) , M.A. (ENGLISH) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 9
	},{
		"SrNo": 115,
		"NameOfTheFaculty": "MR CHAVAN-PATIL SAMBHAJI VISHNU",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "3/7/1996",
		"Qualification": "B. SC. (MATHS) , M. SC. (MATHS) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 30
	},{
		"SrNo": 116,
		"NameOfTheFaculty": "MR SHINDE BHIM PRABHAKAR",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "2/7/2004",
		"Qualification": "B. SC. (MATHS) , M. SC. (MATHS) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 13
	},{
		"SrNo": 117,
		"NameOfTheFaculty": "DR DESAI SANDIP PRAKASH",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "21/7/2005",
		"Qualification": "B. SC. (PHYSICS) , M. SC. (PHYSICS) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 14
	},{
		"SrNo": 118,
		"NameOfTheFaculty": "DR KAMBLE GANESH SHAMRAO",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "5/8/2011",
		"Qualification": "B. SC. (CHEMISTRY) , M. SC. (CHEMISTRY) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 9
	},{
		"SrNo": 119,
		"NameOfTheFaculty": "DR MANE  ANANDA HINDURAO",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "02/07/2013",
		"Qualification": "B.SC.(CHEMISTRY) , M.SC.(ORGANICS CHEMISTRY) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 6
	},{
		"SrNo": 120,
		"NameOfTheFaculty": "MR PATIL PRAMOD SHANKAR",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.A. (ENGLISH) , M.A. (ENGLISH) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 6
	},{
		"SrNo": 121,
		"NameOfTheFaculty": "DR KULKARNI  DEEPTI CHANDRAKANT",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "11/02/2014",
		"Qualification": "B.SC.(PHYSICS) , M.SC.(PHYSICS) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 5
	},{
		"SrNo": 122,
		"NameOfTheFaculty": "DR DHANANI SACHIN HARAKHCHAND",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2006",
		"Qualification": "B. SC. (MATHS) , M. SC. (MATHS) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 13
	},{
		"SrNo": 123,
		"NameOfTheFaculty": "MR PATIL NIVAS SAKHARAM",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "23/08/2016",
		"Qualification": "B.A.(ENGLISH) , M.A. (ENGLISH) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 8
	},{
		"SrNo": 124,
		"NameOfTheFaculty": "MS SHWETHA S. H.",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "21/12/2016",
		"Qualification": "B.E. (ELECTRICAL ELECTRONICS ENGINEERING) , M.TECH. (POWER SYSTEM ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 2
	},{
		"SrNo": 125,
		"NameOfTheFaculty": "MRS MANE PRIYANKA NIKHIL",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "13/06/2017",
		"Qualification": "B.E. (ELECTRICAL ENGINEERING) , M.E. (ELECTRICAL -POWER SYSTEMS) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 2
	},{
		"SrNo": 126,
		"NameOfTheFaculty": "MRS PATIL NEETA ANUP",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2006",
		"Qualification": "B. SC. (MATHS) , M. SC. (MATHS) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 127,
		"NameOfTheFaculty": "MR TIKOLE AMAR HANAMANT",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2006",
		"Qualification": "B. SC.(STAT.)) , M. SC.(STAT.) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 10
	},{
		"SrNo": 128,
		"NameOfTheFaculty": "MS PATIL SWAPNALI SURESH",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "9/7/2014",
		"Qualification": "B. SC. (MATHEMATICS) , M. SC. (MATHEMATICS) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 7
	},{
		"SrNo": 129,
		"NameOfTheFaculty": "MRS KALE SHIVANI SHIVRAJ",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER SCIENCE ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 130,
		"NameOfTheFaculty": "MRS SARNOBBAT MANJUSSA NETRADEEP",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/06/2010",
		"Qualification": "B.E. (ENVIRONMENTAL ENGINEERING) , M.TECH.(ENVIRONMENTAL SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 8
	},{
		"SrNo": 131,
		"NameOfTheFaculty": "MS GADKARI ASPIYA  MAHAMAD",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "9/7/2014",
		"Qualification": "B. SC. (MATHEMATICS) , M. SC. (MATHEMATICS) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 3
	},{
		"SrNo": 132,
		"NameOfTheFaculty": "MR PEDNEKAR  CHAITANYA  BAPUSAHEB",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "30/04/2016",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 8
	},{
		"SrNo": 133,
		"NameOfTheFaculty": "MR GADE RAJESH DHANANJAY",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR COO",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.E. (INFORMATION TECHLOGY) , M.E. (COMPUTER SCIENCE ENGINEERING ) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 10
	},{
		"SrNo": 134,
		"NameOfTheFaculty": "MR BHAT JITENDRA SHANKARRAO",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/06/2010",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M E (CAD/CAM/CAE) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 135,
		"NameOfTheFaculty": "DR SHINDE SACHIN SHRAVAN",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSOCIATE PROFESSOR DEAN INTERNATIONL RELATIONS DEAN INCUBATION INNOVATION LINKAGES",
		"DateOfJoining": "3/1/2006",
		"Qualification": "B.E. (MECHANICAL ENGINEERING), M.E. (MECH- PROD.) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 13
	},{
		"SrNo": 136,
		"NameOfTheFaculty": "DR KUBADE PRAVIN RAMCHANDRA",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR ASSO. DEAN RD",
		"DateOfJoining": "02/07/2013",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECH-PROD.) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 12
	},{
		"SrNo": 137,
		"NameOfTheFaculty": "MR BHEDASGAONKAR RAHUL  CHANDRAKANT",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR ASSO. DEAN ACAD.",
		"DateOfJoining": "2/07/2013",
		"Qualification": "B.E. (MECHANICAL ENGINEERING) , M.Tech. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 7
	},{
		"SrNo": 138,
		"NameOfTheFaculty": "MRS PATIL VIDULA RANJIT",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH.(ENVIRONMENTAL SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 139,
		"NameOfTheFaculty": "MR BHOITE  SUBODH  SHIVAJI",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "22/08/2013",
		"Qualification": "B.E. (ELECTRONICS ENGINEERING) , M.E.(ELECTRONICS AND TELECOMMUNICATION ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 5
	},{
		"SrNo": 140,
		"NameOfTheFaculty": "MR KARADKAR SAMEER RAMCHANDRA",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "28/11/2017",
		"Qualification": "B.E.(ELECTRONICS TELECOMMUNICATION ENGINEERING) , M.TECH.(ELECTRONICS TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 5
	},{
		"SrNo": 141,
		"NameOfTheFaculty": "MR PATIL SAYAJI BALASAHEB",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR ASSO DEAN ACR",
		"DateOfJoining": "1/01/2011",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECH-PROD) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 142,
		"NameOfTheFaculty": "MR DARUR ADIVEPPA SADASHIV",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "17/06/2017",
		"Qualification": "B.E (MECHANICAL ENGINEERING) , M.TECH. (DESIGN ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 6
	},{
		"SrNo": 143,
		"NameOfTheFaculty": "MR KATTI GURURAJ BASVESHWAR",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "4/8/2016",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.E. (STRUCTURES) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 10
	},{
		"SrNo": 144,
		"NameOfTheFaculty": "MR DESAI NITIN SHANKARRAO",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/7/2012",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (PRODUCTIO -INDUSTRIAL ENGINEERING MGT.) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 27
	},{
		"SrNo": 145,
		"NameOfTheFaculty": "MR ULAGADDE ABHIJIT APPASO",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "8/12/2017",
		"Qualification": "B.E.(CIVIL ENGINEERING) , M.TECH.(STRUCTURAL ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 1
	},{
		"SrNo": 146,
		"NameOfTheFaculty": "MR PATIL ADITYA PANDURANG",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "13/06/2017",
		"Qualification": "B.E (CIVIL ENGINEERING) , M. TECH. (STRUCTURAL ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 4
	},{
		"SrNo": 147,
		"NameOfTheFaculty": "MR BAGAL JAYAVANTRAO JAYSINGRAO",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/07/2017",
		"Qualification": "B.SC. (MATHEMATICS) , M.SC. (MATHEMATICS) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 4
	},{
		"SrNo": 148,
		"NameOfTheFaculty": "MR WAGHMARE AMOL DADA",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "3/10/2017",
		"Qualification": "B.A. (ENGLISH) , M.A. (ENGLISH) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 7
	},{
		"SrNo": 149,
		"NameOfTheFaculty": "MR PETKAR RAJENDRA BHIMRAO",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "15/06/2017",
		"Qualification": "B.E. (INFORMATION TECHLOGY) , M. TECH. (COMPUTER SCIENCE ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 5
	},{
		"SrNo": 150,
		"NameOfTheFaculty": "MR BHUJBAL MAYUR VISHWANATH",
		"Course": "BASIC SCIENCE HUMANITIES",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "1/28/2019",
		"Qualification": "B.E. (MECHANICAL ENGINEERING) , M.E.(MECHANICAL DESIGN ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 3
	},{
		"SrNo": 151,
		"NameOfTheFaculty": "DR KAMAT  RUCHA  RAJANISH",
		"Course": "LIBRARY",
		"Designation": "LIBRARIAN",
		"DateOfJoining": "09/04/2008",
		"Qualification": "B.Lib , M.Lib.,SET Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 152,
		"NameOfTheFaculty": "MR ROKADE  VIJAY BALKRISHNA",
		"Course": "DIRECTOR OF PHYSICAL",
		"Designation": "DIRETOR OF PHYSICAL ",
		"DateOfJoining": "01/01/2010",
		"Qualification": "B.PED , M.PED ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 9
	},{
		"SrNo": 153,
		"NameOfTheFaculty": "DR CHAVAN MAHESHKUMAR SHRIKANT",
		"Course": "ELECTRONICS TELE-COMMUNICATION ENGINEERING(PG)",
		"Designation": "PROFESSOR DEAN ACADEMIC",
		"DateOfJoining": "18/08/2011",
		"Qualification": "B.E. (ELECTRONICS ENGINEERING) , M.E..(ELECTRICAL) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 29
	},{
		"SrNo": 154,
		"NameOfTheFaculty": "MR NAGTILAK  SAMEER SURYAKANT",
		"Course": "ELECTRONICS TELE-COMMUNICATION ENGINEERING(PG)",
		"Designation": "ASSISTANT PROFESSOR DEAN QUALITY ASSURANCE",
		"DateOfJoining": "01/01/2014",
		"Qualification": "B.E. (ELECTRONICS TELECOMMUNICATION ENGINEERING) , M.E. (ELECTRONICS ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 14
	},{
		"SrNo": 155,
		"NameOfTheFaculty": "MR PATIL VIJAYKUMAR VILASRAO",
		"Course": "ELECTRONICS TELE-COMMUNICATION ENGINEERING(PG)",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "08/03/2003",
		"Qualification": "B.E. (ELECTRONICS ENGINEERING) , M.E. (ELECTRONICS ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 19
	},{
		"SrNo": 156,
		"NameOfTheFaculty": "DR PISE SHIVALING MAHALING",
		"Course": "CAD/CAM ENGINEERING",
		"Designation": "PROFESSOR RESEARCH DEV.",
		"DateOfJoining": "1/6/1989",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M.E. (MECHANICAL- HEAT POWER ENGG) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 28
	},{
		"SrNo": 157,
		"NameOfTheFaculty": "MR SANGALE SANDESH BALWANT",
		"Course": "CAD/CAM ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/07/2007",
		"Qualification": "B.E. (PRODUCTION ENGINEERING) , M E (CAD/CAM/CAE) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 11
	},{
		"SrNo": 158,
		"NameOfTheFaculty": "MR QURESHI ASIF MAHAMMAD SAYEED",
		"Course": "CAD/CAM ENGINEERING",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "03/07/2007",
		"Qualification": "B.E. (MECHANICAL ENGINEERING) , M.E. MECH.( DESIGN ENGG.) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 24
	},{
		"SrNo": 159,
		"NameOfTheFaculty": "DR PATIL YUVARAJ MAHADEO",
		"Course": "COMPUTER SCIENCE AND ENGINEERING (PG)",
		"Designation": "PROFESSOR DEAN EXAMINATION EVALUATION ",
		"DateOfJoining": "13/1/2004",
		"Qualification": "B.E. (ELECTRONICS ENGINEERING) , ME ( CONTROL SYSTEM) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 27
	},{
		"SrNo": 160,
		"NameOfTheFaculty": "MR OTARI GRANTEJ VINOD",
		"Course": "COMPUTER SCIENCE AND ENGINEERING (PG)",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "04/01/2004",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.TECH. (COMPUTER  SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 15
	},{
		"SrNo": 161,
		"NameOfTheFaculty": "MR PATIL SAMEER BHIMRAO",
		"Course": "COMPUTER SCIENCE AND ENGINEERING (PG)",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/01/2010",
		"Qualification": "B.E. (COMPUTER SCIENCE ENGINEERING) , M.E. (COMPUTER SCIENCE ENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 10
	},{
		"SrNo": 162,
		"NameOfTheFaculty": "MR SHAHA SUNIL SUMATILAL",
		"Course": "ENVIRONMENTAL ENGINEERING (PG)",
		"Designation": "ASSOCIATE PROFESSOR",
		"DateOfJoining": "5/1/1989",
		"Qualification": "B.E. (ENVIRONMENTAL ENGINEERING) , M.E. (CIVIL-ENVIRONMENTAL) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 32
	},{
		"SrNo": 163,
		"NameOfTheFaculty": "MR MANE SUNIL SHIVAJI",
		"Course": "ENVIRONMENTAL ENGINEERING (PG)",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "17/08/2004",
		"Qualification": "B.E. (CIVIL ENGINEERING) , M.TECH.(ENVIRONMENTAL SCIENCE TECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 17
	},{
		"SrNo": 164,
		"NameOfTheFaculty": "MRS SHANKARGOUDA RASHMI BAHUBALI",
		"Course": "ENVIRONMENTAL ENGINEERING (PG)",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "17/01/2020",
		"Qualification": "B.E.(CIVIL ENGINEERING) , M.TECH(TRANSPORTATION) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 4
	},{
		"SrNo": 165,
		"NameOfTheFaculty": "MRS PATIL PALLAVI SANJAY",
		"Course": "BIOCHEMICAL ENGINEERING AND BIOTECHNOLOGY",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "4/1/2005",
		"Qualification": "BE (CHEMICAL ) , ME(CHEMICALENGINEERING) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 14
	},{
		"SrNo": 166,
		"NameOfTheFaculty": "DR JORGEWAD RAJESH MOHANRAO",
		"Course": "BIOCHEMICAL ENGINEERING AND BIOTECHNOLOGY",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "21/10/2005",
		"Qualification": "B.SC.(BOTANY) , M.SC.(BIOTECHLOGY) Ph.D",
		"NatureOfAppointment": "REGULAR",
		"Experience": 16
	},{
		"SrNo": 167,
		"NameOfTheFaculty": "MR CHAVAN ATISH SHRIKANT",
		"Course": "BIOCHEMICAL ENGINEERING AND BIOTECHNOLOGY",
		"Designation": "ASSISTANT PROFESSOR",
		"DateOfJoining": "01/01/2010",
		"Qualification": "B.E.(BIOTECHLOGY ENGINEERING) , M.Tech.(BIOTECHLOGY) ",
		"NatureOfAppointment": "REGULAR",
		"Experience": 9
	}
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
            Faculty List
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Faculty List 
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className="overflow-auto max-w-fit mx-auto md:mx-0  bg-secondary">
          <section className="relative z-30 w-[1500px] mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <div className="sm:hidden grid grid-cols-8 sm:grid-cols-7 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Name Of The Faculty</div>
              <div className=" ">Course</div>
              <div className=" ">Designation</div>
              <div className=" ">Date Of Joining</div>
              <div className=" ">Qualification</div>
              <div className=" ">Nature of Apointment</div>
              <div className=" ">Experience</div>
          </div> 

            {staff.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-8 sm:grid-cols-7 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item.SrNo}</div>
                    <div className="">{item.NameOfTheFaculty}</div>
                    <div className="">{item.Course}</div>
                    <div className="">{item.Designation}</div>
                    <div className="">{item.DateOfJoining}</div>
                    <div className="">{item.Qualification}</div>
                    <div className="">{item.NatureOfAppointment}</div>
                    <div className="">{item.Experience}</div>      
                </div>
                <div className=" sm:grid 2xl:hidden divide-y grid-rows-7 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item.SrNo}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Name Of The Faculty</div>
                    <div className="">{item.NameOfTheFaculty}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Course</div>  
                    <div className="">{item.Course}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Designation</div> 
                    <div className="">{item.Designation}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Date Of Joining</div>  
                    <div className="">{item.DateOfJoining}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Qualification</div>   
                    <div className="">{item.Qualification}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Nature of Apointment</div>  
                    <div className="">{item.NatureOfAppointment}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Experience</div> 
                    <div className="">{item.Experience}</div>      
                  </div>
                </div>
                </>
              )
            })}
          </section>
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default StaffList
