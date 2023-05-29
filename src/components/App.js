import React, { useState} from "react";

import '../styles/App.css';

function App() {
  let [ans,setAns]=useState("")
  let [firstName,setFirstName]=useState("")
  let [secondName,setSecondName]=useState("")
    // console.log(firstName)
    // console.log(secondName)

function helperFun(){
    if(firstName.length==0 || secondName.length==0){
        setAns("Please Enter valid input")
    }else{
        let str1=firstName
        let str2=secondName
        for (let i = 0; i < str1.length; i++) {
            for (let j = 0; j < str2.length; j++) {
                if(str1.charAt(i) == str2.charAt(j)){
                   str1= str1.replace(str1.charAt(i), "")
                   str2= str2.replace(str2.charAt(j), "")
                    i--
                }
            }
            
        }
        if(((str1.length+str2.length))%6 == 1){
            setAns("Friends")
        }else if((str1.length+str2.length)%6 == 2){
            setAns("Love")

        }else if((str1.length+str2.length)%6 == 3){
            setAns("Affection")

        }else if((str1.length+str2.length)%6 == 4){
            setAns("Marriage")

        }else if((str1.length+str2.length)%6 == 5){
            setAns("Enemy")

        }else if((str1.length+str2.length)%6 == 0){
            setAns("Siblings")

        }
    }
}
      return(
          <div id="main">
             {/* Do not remove the main div */}
             <input name="name1" data-testid="input1" type="text" placeholder="Enter first name" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>

             <input name="name2" data-testid="input2" type="text" placeholder="Enter second name" onChange={(e)=>setSecondName(e.target.value)} value={secondName}/>

              <button data-testid="calculate_relationship" onClick={helperFun}>Calculate Relationship Future</button>

              <button data-testid="clear" onClick={()=> {setFirstName(""); setSecondName(""); setAns("")}}>Clear</button>
              <div>
                <h3 data-testid="answer">
                    {ans}
                </h3>
              </div>
          </div>
      )
}

export default App