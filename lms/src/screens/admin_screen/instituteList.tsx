import React from 'react'
import Tablee from '../../components/table';
import { useState, useEffect } from "react";
import { fbGet } from '../../config/firebase/fbmethods';
function InstituteList() {
    const [institutes, setinstitute] = useState([]);
    useEffect(() => {
      fbGet("Institutes")
        .then((res: any) => {
          setinstitute(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return (
      <>
        <h1>Course List</h1>
        <div className="Table">
          <Tablee
            data={institutes}
            col={[
              {
                heading: "Institute Name",
                key: "instituteName",
              },
              {
                heading: "Logo",
                key: "image",
              },
              
              {
                heading: "Campus No",
                key: "NoofCampus",
              },
            ]}
          ></Tablee>
        </div>
      </>
    );
}

export default InstituteList;