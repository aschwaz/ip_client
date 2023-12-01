import aiIcon from "../../assets/aiicon.png"


export default function LeadAi({ aiResponse, setAiResponse }) {
    async function handleAi() {
        console.log("calling the API")

        if (aiResponse === null) {

            const APIBody = {
                "model": "gpt-4",
                "messages": [
                    {"role": "system", "content": "You're a sales expert and will need to overcome the objection by providing a short script"},
                    {"role": "user", "content": "I'm not interested in your call"},
                    {"role": "assistant", "content": "i totally udnerstand how you feel, a lot of my clients felt that way but what they found was the value of our product"},
                    {"role": "user", "content": "I dont have time for this"}
                ],
                "temperature": 0.8,
                "max_tokens": 100
            }

            const APIkey = "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"

            setAiResponse("Ai thinking...")
            await fetch('https://api.openai.com/v1/chat/completions',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + APIkey
                },
                body: JSON.stringify(APIBody)
            })
            .then(res => res.json())
            .then((data) => {
                console.log("pulled")
                setAiResponse(data.choices[0].message.content);
            })
        } else {
            return null
        }
    }
    
    
    return(
        <>
         <img alt="AI" className="lead-icon h-10" 
         src={aiIcon} 
         onClick={handleAi} />
        </>
    )
}