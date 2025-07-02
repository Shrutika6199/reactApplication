import React from 'react'
var students=[
    {id:1,name:"komal"},//students[0].id
    {id:2,name:"preeti"},
    {id:3,name:"jeevan"},
    {id:4,name:"kiara"}
]
const iteration2 = () => {
  return (
    <div>
        {/* <ul>
          {students.map((student)=>{
        return (
            <>
            <li>{student.id}--{student.name}</li>
            </>
        )
      })}
        </ul> */}
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student)=>{
                    var {id,name}=student
                    return(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                        </tr>

                    )
                })}
            </tbody>
        </table>
      
    </div>
  )
}

export default iteration2