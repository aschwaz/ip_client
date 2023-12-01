
// import Search from './Search'
// import PostsContainer from './lead_sub_components/postscontainer'
import { useContext, useState } from 'react'
// import LeadPost from './sublead/leadpost';
import { LeadContext } from './biz';

import LeadAi from './sublead/leadai'

import notesIcon from "../assets/notesicon.png"
import contactsIcon from "../assets/contactsicon.png"
import calendarIcon from "../assets/calendar.png"
import emailIcon from "../assets/emailicon.png"
import phoneIcon from "../assets/phoneicon.png"


{/* /////////////////////////////////////////// */}
{/* ///On Click Events for Contacts Notes & AI/ */}
{/* /////////////////////////////////////////// */}

function handleContacts() {
    setSelected("contacts")
}

function handleNotes() {
    setSelected("notes")
}

function handleCalendar() {
  console.log('clicked')
  // needs to send to url
}





export default function Lead() {
    const { leads, currentLeadIndex, setCurrentLeadIndex } = useContext(LeadContext);
    
    // ONLY NEEDED IF I WANT TO USE SEARCH ON LEADS
    // const [search, setSearch] = useState("")

    const handleLeadChange = (direction) => {
        if (direction === 'next') {
            setCurrentLeadIndex(current => (current === leads.length - 1 ? 0 : current + 1));
        } else if (direction === 'prev') {
            setCurrentLeadIndex(current => (current === 0 ? leads.length - 1 : current - 1));
        }
    };
    

    // ONLY NEEDED IF I WANT TO FILTER LEADS FROM SEARCH
    // const searchLeads = leads.filter((lead) => {
    //     return lead.leadName.toLowerCase().includes(
    //       search.toLowerCase()) || lead.leadPhone.toLowerCase().includes(
    //       search.toLowerCase()) || lead.leadEmail.toLowerCase().includes(
    //       search.toLowerCase()) || lead.leadStage.toLowerCase().includes(
    //       search.toLowerCase())
    //   })

    // USE THIS WITH DB.JSON TO SEE THE LEADS. ONCE WE UPLOAD DATABASE DELETE DB.JSON
    const lead = leads[currentLeadIndex]
    console.log(lead)


    //  USING THIS FOR leadai.jsx
    const [aiResponse, setAiResponse] = useState(null) 

    return (
        <>
        {/* <h1>Hi I'm Lead!</h1> */}
        <div className="bg-gray-800 mx-auto sm:px-6 lg:px-8">
            {leads.length > 0 ? (
                <div>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        

{/* /////////////////////////////////////////// */}
{/* //////////////// Lead Post //////////////// */}
{/* /////////////////////////////////////////// */}                      
                        
                        
                        {/* <LeadPost lead={lead} /> */}

                
                        
                        
                        
                        
                        
                        
                        
                    <div className="mx-auto max-w-7xl">

            

{/* /////////////// */}
{/* ///Lead Header/ */}
{/* /////////////// */}
                            <div className="p-1">
                                        {/* <LeadHeader 
                                        leadName={lead.leadName} 
                                        leadStage={lead.leadStage} 
                                        id={lead.id} 
                                        leadCategory={lead.leadCategory} 
                                        leadReward={lead.reward} 
                                        leadState={lead.leadState} 
                                        leadCity={lead.leadCity} 
                                        /> */}


                            <div className="">
                                <div className="flex">

                                <p className="text-base text-white  px-4 sm:text-lg lg:text-2xl">{lead.lead_name}</p>
                                <p className="text-xs text-white  px-1 sm:text-base lg:text-lg">{lead.lead_state},</p>
                                <p className="text-xs text-white  px-1 sm:text-base lg:text-lg">{lead.lead_city}</p>
                                {/* We'll need to update the database */}
                                {/* <p className="bg-green-500 text-white rounded-md h-6 px-1.5">${leadReward}</p> */}
                                </div>
                                <div className="text-sm text-white  flex justify-between p-2 sm:text-base lg:text-lg">
                                {/* needs to be added to database */}
                                {/* {leadCategory} */}
                                {/* <Stage id={id} stage={stage} setStage={setStage} /> */}
                                <div className="button bg-gray-800">
                                    {lead.lead_status}
                                </div>
                                
                            </div>
        

{/* //////////////// */}
{/* ///Lead Content/ */}
{/* //////////////// */}
                {/* <LeadContent leadUrl={leadUrls}  /> */}



                            <div className="h-[640px] rounded-md overflow-auto">
                                <img src={lead.website_url}/>
                                <img src={lead.yelp_url}/>
                                <img src={lead.facebook_url}/>
                                <img src={lead.instagram_url}/>
                                <img src={lead.linkedin_url}/>
                            </div>

{/* ///////////////// */}
{/* ///Lead Interact/ */}
{/* ///////////////// */}

                    {/* <LeadInteract 
                    setSelected={setSelected} 
                    selected={selected}
                    formNote={formNote}
                    setFormNote={setFormNote}
                    leadPhone={lead.leadPhone} 
                    leadEmail={lead.leadEmail}
                    leadNotes={leadNotes}
                    setLeadNotes={setLeadNotes}
                    leadId={lead.id}
                    leadContact={leadContacts}
                    setLeadContacts={setLeadContacts}
                    setContact={setContact}
                    formContact={formContact}
                    setFormContact={setFormContact}
                    lead={lead}
                    /> */}
      


    {/* ///////////////// */}
    {/* ///Click To X /// */}
    {/* ///////////////// */}
                
                            <div>

                {/* <ClickToX 
                    leadPhone={leadPhone} 
                    leadEmail={leadEmail} 
                    /> */}


                                <div className="click-to flex content-center h-10 text-xs p-2 text-white sm:text-base lg:text-lg">
                                    <img alt="Phone" className="p-1" src={phoneIcon} />
                                    <p className="flex items-center">{lead.lead_contact_phone}</p>
                                    <img alt="Email" className="p-1" src={emailIcon} />
                                    <p className="flex items-center">{lead.lead_contact_email}</p>
                                </div>








    {/* /////////////////////////// */}
    {/* /// Contacts Notes & AI /// */}
    {/* /////////////////////////// */}
                    {/* Need to create components for accordina using tailwindcss if time */}

                                <div className=" flex justify-between text-xs p-2 text-white sm:text-base lg:text-lg">
                                    <div className='flex'>
                                        <img alt="Contacts" className="lead-icon h-10" src={contactsIcon} onClick={handleContacts} />
                                        <img alt="Notes" className="lead-icon h-10" src={notesIcon} onClick={handleNotes} />
                                        <a href='/calendar'>
                                            <img alt="Calendar" className="lead-icon h-10" src={calendarIcon} onClick={handleCalendar} />
                                        </a>
                                    </div>
                                    <div>
                                        <LeadAi aiResponse={aiResponse} setAiResponse={setAiResponse}/>        
                                    </div>
                                </div>






    {/* /////////////////////////////////////////////////////////// */}
    {/* /// This is what opens the tabs for Conotacts and Notes /// */}
    {/* /////////////////////////////////////////////////////////// */}

                    {/* This needs to be completed but will require the database to be updated */}

                {/* <Select 
                selected={selected} 
                leadContact={leadContact} 
                setLeadContacts={setLeadContacts}
                leadNotes={leadNotes}
                setSelected={setSelected}
                setContact={setContact}
                formContact={formContact}
                setFormContact={setFormContact}
                leadId={leadId}
                setFormNote={setFormNote}
                formNote={formNote}
                setLeadNotes={setLeadNotes}
                title={title}
                name={name}
                phone={phone}
                email={email}
                setTitle={setTitle}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
                lead={lead}
                /> */}
                
    {/* /////////////////////////// */}
    {/* /////// AI Response /////// */}
    {/* /////////////////////////// */}      

                {/* This needs to be made to refresh when the user hits next */}
                
                                <div className='bg-gray-900 text-white rounded-md text-xs p-2 m-1 sm:text-base lg:text-lg'>
                                    {aiResponse}
                                </div>


                            </div>















                            </div>
                        </div>
                    </div>    
                        
                    <div className='flex justify-between text-gray-300 pb-6 '> 
                        <button className='bg-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' onClick={() => handleLeadChange('prev')}>Previous</button>
                        <button className='bg-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' onClick={() => handleLeadChange('next')}>Next</button>
                    </div>  
                </div>
            ): (
                <p>No leads available.</p>
            )}
        {/* ONLY NEEDED IF I WANT TO SET SEARCH ON LEADS */}
        {/* <Search search={search} setSearch={setSearch} /> */}
        {/* THIS IS THE BEGINING OF CREATING THE LEADS VIEW WHICH NEEDS TO BE REDONE
        TO ONLY SHOW ONE LEAD AT A TIME WITH ALL OF THE FUNCTIONALITY */}
        {/* <PostsContainer leads={searchLeads}/> */}
        </div>
        </>
    )
}

// export const leadLoader = async({params}) => {
//     leadsResponse = await fetch(`${url}/api/leads`)
//     leads = await leadsResponse.json()
//     return leads
// }