import { useState } from "react";
import MButton from "../../components/MButton";
import SInput from "../../components/input";
import "./addquiz.css";
import AddIcon from "@mui/icons-material/Add";
export default function Admin() {
  const [model, setModel] = useState<any>({});
  const [ques, setQues] = useState<any>({});
  const [Questions, setQuestions] = useState<any[]>([]);
  const [OptionA, setOptionA] = useState<any>("");
  const [OptionB, setOptionB] = useState<any>("");
  const [OptionC, setOptionC] = useState<any>("");
  const [OptionD, setOptionD] = useState<any>("");
  const [isopen, setIsopen] = useState<any>(false);
  const handleButtonClick = () => {
    setIsopen(!isopen);

    setModel({
      ...model,
      isOpen: !isopen,
    });
  };
  const fillModel = (key: any, val: any) => {
    setModel({ ...model, [key]: val });
  };
  const fillQues = (key: any, val: any) => {
    setQues({ ...ques, [key]: val });
  };
  const addQuestion = () => {
    const Options = [];
    Options.push(OptionA);
    Options.push(OptionB);
    Options.push(OptionC);
    Options.push(OptionD);

    ques["options"] = Options;

    // const newQuestion = {
    //   question: ques.question,
    //   options: [...ques.options],
    //   correctAns: ques.correctans,
    // };
    Questions.push(ques);
    console.log(Questions);
    setQues({});
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
  };

  function Clickss() {
    model["Questions"] = Questions;
    console.log(model);
    setModel({
      quizname: "",
      quizduration: "",
      secretkey: "",
      quizopen: "",
      description: "",
      question: "",
    });
  }

  return (
    <>
      <div className="main">
        <div className="left">
          <div className="l-t">
            <div className="imagess"></div>
          </div>
          <div className="l-m">
            <MButton
              variants="contained"
              label1="HTML"
              Click={Clickss}
              startIcon={null}
            />
            <MButton
              variants="contained"
              label1="CSS"
              Click={Clickss}
              startIcon={null}
            />
            <MButton
              variants="contained"
              label1="JS QUIZ 1"
              Click={Clickss}
              startIcon={null}
            />
            <MButton
              variants="contained"
              label1="JS QUIZ 2"
              Click={Clickss}
              startIcon={null}
            />
          </div>
          <div className="l-b">
            <MButton
              variants="contained"
              label1="Logout"
              Click={Clickss}
              startIcon={null}
            />
          </div>
        </div>
        <div className="right">
          <div className="body">
            <div className="heading">
              <h1>Quiz App Admin</h1>
              <MButton
                variants="contained"
                label1="Save"
                Click={Clickss}
                startIcon={null}
              />
            </div>
            <div className="quiz-info">
              <table>
                <tr>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) => fillModel("quizname", e.target.value)}
                      value={model.quizname}
                      placeholder="Quiz Name"
                    />
                  </td>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) =>
                        fillModel("quizduration", e.target.value)
                      }
                      value={model.quizduration}
                      placeholder="Time In Minutes"
                    />
                  </td>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) =>
                        fillModel("secretkey", e.target.value)
                      }
                      value={model.secretkey}
                      placeholder="Secret Key"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={handleButtonClick}>
                      {isopen ? "open" : "close"}
                    </button>
                  </td>
                  <td colSpan={2}>
                    <SInput
                      type="text"
                      change={(e: any) =>
                        fillModel("description", e.target.value)
                      }
                      value={model.description}
                      placeholder="Description"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <MButton
                      variants="contained"
                      label1="Lock Quiz"
                      Click={Clickss}
                      startIcon={null}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="questions">
              <table>
                <tr>
                  <td colSpan={2}>
                    <SInput
                      type="text"
                      change={(e: any) => fillQues("question", e.target.value)}
                      value={ques.question}
                      placeholder="Question"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) => setOptionA(e.target.value)}
                      value={OptionA}
                      placeholder="Option A"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) => setOptionB(e.target.value)}
                      value={OptionB}
                      placeholder="Option B"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) => setOptionC(e.target.value)}
                      value={OptionC}
                      placeholder="Option C"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) => setOptionD(e.target.value)}
                      value={OptionD}
                      placeholder="Option D"
                    />
                  </td>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) =>
                        fillQues("correctans", e.target.value)
                      }
                      value={ques.correctans}
                      placeholder="Correct Answer"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <MButton
                      variants="contained"
                      label1=""
                      Click={addQuestion}
                      startIcon={<AddIcon />}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import { useState, useEffect } from "react";
// import { fbAdd, fbGet } from "../../config/firebase/fbmethods";
// import { useNavigate } from "react-router-dom";

// export default function AddQuiz() {
//   const [quizModel, setQuizModel] = useState<any>({});
//   const [questionModel, setQuestionModel] = useState<any>({});
//   const [option, setOption] = useState("");
//   const [optionsList, setOptionsList] = useState<any>([]);
//   const [islock, setIsLock] = useState(false);
//   const [correctOption, setCorrectOption] = useState<any>();
//   const [questions, setQuestions] = useState<any>([]);
//   const [allQuiz, setAllQuiz] = useState<any>([]);

//   const navigate = useNavigate();

//   const addOption = () => {
//     optionsList.push(option);
//     setOptionsList([...optionsList]);
//   };

//   const fillQuizModel = (key: string, val: any) => {
//     quizModel[key] = val;
//     setQuizModel({ ...quizModel });
//   };
//   const fillQuestionModel = (key: string, val: any) => {
//     questionModel[key] = val;
//     setQuestionModel({ ...questionModel });
//   };

//   const lockQuiz = () => {
//     setIsLock(!islock);
//   };
//   const addQuestion = () => {
//     questionModel.options = [...optionsList];
//     questionModel.correctAns = correctOption;
//     questions.push(questionModel);
//     setQuestions([...questions]);
//     fillQuestionModel("question", "");
//     setCorrectOption("");
//     setOption("");
//     setOptionsList([]);
//   };

//   const getQuiz = () => {
//     fbGet("quiz")
//       .then((res:any) => {
//         console.log(res);
//         setAllQuiz([...res]);
//       })
//       .catch((err:any) => {
//         console.log(err);
//       });
//   };

//   const saveQuiz = () => {
//     quizModel.questions = [...questions];
//     fbAdd("quiz", quizModel)
//       .then((res:any) => {
//         console.log(res);
//         getQuiz();
//       })
//       .catch((err:any) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getQuiz();
//   }, []);

//   return (
//     <>
//       <div className="p-0 m-0 row">
//         <div className="col-md-2 h-screen bg-dark">
//           <div className="p-2">
//             <div className="text-center p-2">
//               <img
//                 width={50}
//                 className="rounded-pill"
//                 src="https://lh3.googleusercontent.com/ogw/AKPQZvx7-_kQB62ensdz-SYhZoRGk8jxKPLeHpnh8QWeUak=s32-c-mo"
//                 alt=""
//               />
//             </div>
//             <div className="p-2">
//               {allQuiz.map((x: any, i: any) => (
//                 <button key={i}>{x.question}</button>
//               ))}

//             </div>
//           </div>
//         </div>
//         <div className="col-md-10 h-screen">
//           <div className="d-flex justify-content-between align-items-center p-2">
//             <h3>Quiz App</h3>
//             <button onClick={saveQuiz} className="btn btn-primary">
//               Save Quiz
//             </button>
//           </div>
//           <div className="p-2">
//             <div className="row">
//               <div className="col-md-4">
//                 <div className="p-2">
//                   <input
//                     disabled={islock}
//                     className="form-control"
//                     placeholder="Question"
//                     value={quizModel.question}
//                     onChange={(e) => fillQuizModel("question", e.target.value)}
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="p-2">
//                   <input
//                     disabled={islock}
//                     className="form-control"
//                     placeholder="Duration"
//                     value={quizModel.duration}
//                     onChange={(e) => fillQuizModel("duration", e.target.value)}
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="p-2">
//                   <input
//                     disabled={islock}
//                     className="form-control"
//                     placeholder="Secret Key"
//                     value={quizModel.secretKey}
//                     onChange={(e) => fillQuizModel("secretKey", e.target.value)}
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-12">
//                 <div className="p-2">
//                   <input
//                     disabled={islock}
//                     type="text"
//                     className="form-control"
//                     placeholder="Description"
//                     value={quizModel.description}
//                     onChange={(e) =>
//                       fillQuizModel("description", e.target.value)
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="p-2">
//                   <button onClick={lockQuiz} className="btn btn-primary">
//                     {islock ? "Unlock" : "Lock"} Quiz
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="p-2">
//                   <input
//                     disabled={!islock}
//                     className="form-control"
//                     placeholder="Question"
//                     value={questionModel.question}
//                     onChange={(e) =>
//                       fillQuestionModel("question", e.target.value)
//                     }
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-10">
//                 <div className="p-2">
//                   <input
//                     disabled={!islock}
//                     className="form-control"
//                     placeholder="Question"
//                     value={option}
//                     onChange={(e) => setOption(e.target.value)}
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-2">
//                 <div className="p-2">
//                   <button onClick={addOption} className="btn btn-danger">
//                     Add Option
//                   </button>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="p-2">
//                   {optionsList.map((x: any, i: any) => (
//                     <button
//                       className="btn mb-2 btn-info w-100"
//                       onClick={() => setCorrectOption(x)}
//                       key={i}
//                     >
//                       {x}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="p-2">
//                   {correctOption && (
//                     <button className="btn w-100 btn-danger">
//                       {correctOption}
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="p-2">
//                   <button onClick={addQuestion} className="btn btn-info">
//                     Add Question
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
