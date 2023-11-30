///////////////////////////////////////////////////////////////////////
///////// I can work on this page on thursday, ////////////////////////
///////// however you can use this to make sure the fetch works////////
//////////////////////////////////////////////////////////////////////


// import Search from './Search'
// import PostsContainer from './lead_sub_components/postscontainer'
import { useEffect, useState } from 'react'



export default function Lead() {
    const [leads, setLeads] = useState([])
    
    
    // ONLY NEEDED IF I WANT TO USE SEARCH ON LEADS
    // const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/lead')
        .then(res => res.json())
        .then(data => setLeads(data))
      }, [])

    // ONLY NEEDED IF I WANT TO FILTER LEADS FROM SEARCH
    // const searchLeads = leads.filter((lead) => {
    //     return lead.leadName.toLowerCase().includes(
    //       search.toLowerCase()) || lead.leadPhone.toLowerCase().includes(
    //       search.toLowerCase()) || lead.leadEmail.toLowerCase().includes(
    //       search.toLowerCase()) || lead.leadStage.toLowerCase().includes(
    //       search.toLowerCase())
    //   })

    // USE THIS WITH DB.JSON TO SEE THE LEADS. ONCE WE UPLOAD DATABASE DELETE DB.JSON
    console.log(leads)
    return (
        <>
        <h1>Hi I'm Lead!</h1>
            <div className="bg-gray-800 mx-auto sm:px-6 lg:px-8">
            {/* ONLY NEEDED IF I WANT TO SET SEARCH ON LEADS */}
            {/* <Search search={search} setSearch={setSearch} /> */}
            {/* THIS IS THE BEGINING OF CREATING THE LEADS VIEW WHICH NEEDS TO BE REDONE
            TO ONLY SHOW ONE LEAD AT A TIME WITH ALL OF THE FUNCTIONALITY */}
            {/* <PostsContainer leads={searchLeads}/> */}
                {leads.map((lead)=> {
                    return <h1>{lead.id}</h1>
                })}
            </div>
        </>
    )
}

export const leadLoader = async({params}) => {
    leadsResponse = await fetch(`${url}/api/leads`)
    leads = await leadsResponse.json()
    return leads
}