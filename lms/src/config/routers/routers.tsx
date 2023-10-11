import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../screens/admin_screen/Dashboard";
import Login from "../../screens/Login";
import Signupuser from "../../screens/SignUpuser";
import InstituteForm from "../../screens/admin_screen/InstituteForm";
import Studentsdashboard from "../../screens/Studentsdashboard";
import RegisterStudent from "../../screens/RegisterUser";
import Institutedashboard from "../../screens/Institute_screen/institutedashboard";
import CourseList from "../../screens/Institute_screen/CourseList";
import CourseForm from "../../screens/Institute_screen/CourseForm";
import StudentList from "../../screens/Institute_screen/StudentList";
import Studentdetail from "../../screens/Institute_screen/Studentdetail";
import StudentForm from "../../screens/Institute_screen/StudentForm";
export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="admin-dashboard/*" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signupuser />} />
          <Route path="studentdashboard" element={<Studentsdashboard />} />
          <Route path="instituteform" element={<InstituteForm />} />
          <Route path="registerStudent" element={<RegisterStudent />} />
          <Route
            path="institute-dashboard/*"
            element={<Institutedashboard />}
          />
          <Route path="courselist" element={<CourseList />} />
          <Route path="courseform" element={<CourseForm />} />
          <Route path="studentlist" element={<StudentList />} />
          <Route path="studentdetail" element={<Studentdetail />} />
          <Route path="studentform" element={<StudentForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
