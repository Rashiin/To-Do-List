import React from 'react'

function Card({ taskObj, index }) {
    
    const Colors = [
        {
            firstcolor: "#5D93E1",
            secondcolor:"#ECF3FC"
        },
        {
            firstcolor: "#F48687",
            secondcolor:"#FDF1F1"
        },
        {
            firstcolor: "#B964F7",
            secondcolor:"#F3F0FD"
        },
        {
            firstcolor: "#F9D288",
            secondcolor:"#FEFAF1"
        }
    ]
  return (
      <div className='card-wrapper mr-5'>
          <div className='card-top' style={{ "backgroundColor": Colors[index%4].firstcolor}}></div>
          <div className='task-holder'>
              <span className='card-header mt-2' style={{"border-redius":"10px","backgroundColor":Colors[index%4].secondcolor}}>{ taskObj.Name}</span>
              <p>{taskObj.Description}</p>
              <div style={{"position":"absolute","right":"20px","bottom":"20px"}}>
                  <i className='far fa-edit mr-3' style={{"color":Colors[index%4].firstcolor,"margin":"10px"}}></i>
                  <i className='fas fa-trash-alt' style={{"color":Colors[index%4].firstcolor}}></i>
              </div>
          </div>

  </div>
  )
}

export default Card
