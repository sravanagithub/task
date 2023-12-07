import { useContext, useState } from "react"
import { FormContext, IndexContext, TableContext, UpdatedTableContext } from "./Details"

export default function Userdetails({data}){
    const setFormData=useContext(FormContext)
const setEditIndex= useContext(IndexContext)
const setTabledata= useContext(UpdatedTableContext)


    function getData(data)
    {
        if(data=="a1")
        return (t)=>t.age>1 && t.age<20
    else
    if(data=="a2")
    return (t)=>t.age>=20 && t.age<40
else
return (t)=>t.age>=40 && t.age<60
    }
    
    const tabledata= useContext(TableContext)

    let filtereddata= tabledata.filter(getData(data))



     const handleEdit = (s) => {
   
     setFormData(s);
    setEditIndex(s.id);
   };


   function handleDelete(s) {
   
    const newarray= tabledata.filter((d)=>d.id!==s.id)
    console.log(filtereddata)
    setTabledata(newarray)
    
  }

    return(
        <div>
           {filtereddata.map((s)=>{
            return(
                <div className="card">
                <div className="card-body">
                    <h5 class="card-title">User Details</h5>
                    <div className="d-flex flex-column" >
                        <p  >Name:{s.name}</p>
                        <p>Email:{s.email}</p>
                        <p>MobileNumber:{s.mobilenumber}</p>
                        <p>Age:{s.age}</p>
                        <div className="d-flex gap-2">
                        <button style={{width:"30%"}} type="button" className="btn btn-success" onClick={(e)=>handleEdit(s)}>Edit</button>
                        <button style={{width:"30%"}} type="button" className="btn btn-danger"
                        onClick={(e)=>handleDelete(s)}
                        > Delete</button>
                        </div>
                    </div>
                </div>

            </div>
            )
           })}
           
        </div>
    )
}