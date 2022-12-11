import React, { useEffect } from 'react'
import styled from 'styled-components'
import Popup from 'reactjs-popup';
import FaIcon from 'react-fa-icon/lib/FaIcon';
import {FaGithub,FaMailBulk,FaLinkedin} from 'react-icons/fa'
const Teammember = ({menuData}) => {
  const Wrapper = styled.div`

.flex-container {
  display: flex;
  column-gap: 19px;
  max-width: 1200px;
  width: 180%;
  margin: 0 auto;
  margin-top: 60px;
}
.space-between {
  justify-content: space-between;
}
.col {
  width: 60%;
  
}
.card {
  border: 1px solid #eee;
  border-radius: 15px;
  padding: 12px;
  background-color: #fff;
  display: flex;
  column-gap: 15px;
  box-shadow: 1px 1px 16px -6px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 1px 16px -6px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 1px 16px -6px rgba(0, 0, 0, 0.5);
}
.card img {
  
  max-width: 250px;
}
.img-placeholder {
  position: relative;
  max-height: 250px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 1px 1px 16px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 1px 16px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 16px -6px rgba(0, 0, 0, 0.75);
}
h3 {
  font-weight: 5500;
}
.flex{

  display: flex;
  flex-wrap: wrap;
  
}
p {
  font-weight: 400;
}
a {
  color: #888;
  text-decoration: none;
}
a:hover {
  color: inherit;
}
#rol{
  margin-top :15px;
  margin-right: 10px;
}


.outerdiv{
  height: 30px;
}
  `;
   
  return (
   <>

    <div class="grid">
    <ul id="hexGrid">
     {menuData.map((currElem)=>{
    return(
     
      <li class="hex" key={currElem.id}>
        <div  class="hexIn">
      
          <a class="hexLink" href="#">
          <Popup trigger={            <div class='img' style={{backgroundImage: `url("${currElem.image}")` }}></div>
} 
     position="right center">
     <Wrapper>
     <div class="flex-container space-between">
  <div class="col card">
    <div class="img-placeholder">
      <img src={currElem.image}/>
    </div>
    <div className="outerdiv" >
      <h3>{currElem.name}</h3>
    
        <p> <b> Role:</b> Web loper</p>
        <p> <b> Graduation:</b> 2023</p>
        <p> <b> Branch:</b> IT</p>
        <p> <b> Department:</b> DAQ•WebD</p>
      <a target={"_blank"} href=""><FaGithub/></a>  
      <a style={{marginLeft:'20px'}} target={"_blank"} href=""><FaMailBulk/></a>  
      <a style={{marginLeft:'20px'}} target={"_blank"} href=""><FaLinkedin/></a>  
    </div>
  </div>
 
</div>
</Wrapper>
    </Popup>
            <h1 id="demo1">{currElem.name}</h1>
            <p id="demo2">{currElem.branch}</p>
          </a>
        </div>
      </li>
            ) })}
     
    </ul>
      </div>
	
	
	


   
   </>
  )
}

export default Teammember
