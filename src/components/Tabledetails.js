import { useContext } from "react";
import Userdetails from "./Userdetails";
import { TableContext } from "./Details";

export default function Tabledetails(){

   



    return(
        <>

<table className="table">

<thead>
    <tr>
      <th scope="col">Age(1-20)</th>
      <th scope="col">Age(20-40)</th>
      <th scope="col">Age(40-60)</th>
     
    </tr>
  </thead>

  <tbody>
<tr>
<td><Userdetails  data="a1" /></td>

<td><Userdetails data="a2"  /></td>

<td><Userdetails data="a3"/></td>

</tr>


  </tbody>



</table>

 






        </>
    )
}