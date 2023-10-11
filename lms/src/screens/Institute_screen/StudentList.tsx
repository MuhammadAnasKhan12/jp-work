import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fbAdd, fbGet } from "../../config/firebase/fbmethods";
import Tablee from "../../components/table";
function StudentList() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    fbGet("users")
      .then((res: any) => {
        console.log(res);
        {res.map((x:any,i:any)=>{
          if(x.userType==="Student" && x.course){
            setStudent(res);
          }
        })}
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Student List</h1>
      <div className="Table">
        <Tablee
          data={student}
          col={[
            {
              heading: "Student Name",
              key: "username",
            },
            {
              heading: "Father Name",
              key: "fathername",
            },
            {
              heading: "Course",
              key: "course",
            },
          ]}
        ></Tablee>
      </div>
    </>
  );
}

export default StudentList;
