import { useState } from "react";



export default function Details() {
  var id = 1;
  const [formData, setFormData] = useState({
   
    name: '',
    email: '',
    mobilenumber: '',
    age: '',
  });
  
  const[ searchedname, setSearchedname]=useState('')
  const[ tabledata, setTabledata]= useState([])
  const [editIndex, setEditIndex] = useState(null);
  

  function handleSubmit(e) {
    e.preventDefault()

if(editIndex==null){

    setTabledata([...tabledata,formData])
    console.log(tabledata)
    
   }
   else{
    const updateTableData=[...tabledata]
    updateTableData[editIndex]={...formData}
    setTabledata(updateTableData);
    setEditIndex(null)
   }


   setFormData({
    name: '',
    email: '',
    mobilenumber: '',
    age: '',
  });
  }

   function handleChange(e){
    const{name, value}= e.target
setFormData({...formData,[name]:value })

   }

function handleSearch(e){
const searcheditms= [...tabledata].filter((s)=>s.name.toLowerCase().includes(searchedname.toLowerCase()))
console.log(searcheditms)
setTabledata(searcheditms)
}



function handleSort(e){
    alert(e.target.value)
    let value= e.target.value
    if(value==1){
        let sortedarray=[...tabledata].sort((a,b)=>a.name>b.name ? 1:-1)
        console.log(sortedarray)
       setTabledata(sortedarray)}

    if(value==2){
        let sortedarr=[...tabledata].sort((a,b)=>a.name<b.name?1:-1)
        setTabledata(sortedarr)
    }




}

  function handleDelete(event) {
    alert(event.target.name);
    const filtereddata= tabledata.filter((d)=>d.name!==event.target.name)
    console.log(filtereddata)
    setTabledata(filtereddata)
    
  }

  const handleEdit = (index) => {
    // Set the form data with the selected row for editing
    setFormData({ ...tabledata[index] });
    setEditIndex(index);
  };
    
  
    
    
   



  return (
    <>
      <div className="container-fluid">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h2>Form</h2>
                  <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label for="exampleFormControlInput" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        class="form-control"
                        id="exampleFormControlInput"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                         name="email"
                        value={formData.email}
                        onChange={handleChange}
                        
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput2" class="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="number"
                         name="mobilenumber"
                        value={formData.mobilenumber}
                        onChange={handleChange}
                        class="form-control"
                        id="exampleFormControlInput2"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput3" class="form-label">
                        Age
                      </label>
                      <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        class="form-control"
                        id="exampleFormControlInput3"
                      />
                    </div>
                    <div className="d-flex gap-2">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        
                      >
                       {editIndex!=null? "Update":"Add"}
                      </button>

                      <button type="button" class="btn btn-danger">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
             <div className="d-flex">
             <input
                        type="text"
                       
                        value={searchedname}
                        onChange={(e) =>{ setSearchedname(e.target.value)
                            
                        }}
                        
                        class="form-control"
                        id="exampleFormControlInput1"
                        
                      />
        <button class="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
             </div>

             <div className="mt-3">
             <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleSort}>
  <option selected>Open this select menu</option>
  <option value="1">Sort name by ascending order</option>
  <option value="2">Sort name by descending order</option>
  
</select>

 
             </div>

              <table class="table">
                <thead>
                  <tr>
                   
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobilenumber</th>
                    <th scope="col">age</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {  tabledata.map((s, index) => {
                    return (
                      <tr key={index}>
                        
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>{s.mobilenumber}</td>
                        <td>{s.age}</td>
                        <td>
                          <button type="button"
                           name={s.name}
                          class="btn btn-success" onClick={()=>handleEdit(index)}>
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            name={s.name}
                            class="btn btn-danger"
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
