import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { fbGet } from '../../config/firebase/fbmethods'
import Table from '../../components/table';
function CourseList() {
  const [Courses, setCourses] = useState([]);
  useEffect(() => {
    fbGet("courses").then((res:any)=>{setCourses(res)}).catch((err)=>{console.log(err)})
  },[])
  return (
    <>
      <h1>Course List</h1>
      <div className="Table">
        <Table
          data={Courses}
          col={[
            {
              heading: "Teacher Name",
              key: "teacher",
            },
            {
              heading: "Course Name",
              key: "courseName",
            },
            {
              heading: "Duration",
              key: "duration",
            },
            {
              heading: "Fees",
              key: "fee",
            },
          ]}
        ></Table>
      </div>
    </>
  );
}

export default CourseList