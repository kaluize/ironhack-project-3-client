// import { useEffect, useState } from "react";
// import { Card, Button, Container, Form } from "react-bootstrap";
// import { api } from "../../api/api";


// function Horarios({ form, setForm }) {

//   const [freeHours, setFreeHours] = useState();


//   useEffect(() => {
//     async function fetchFreeHours() {
//       try {


//         const body = {
//           resource: form.resource,
//           schedule: form.data
//         }

//         const response = await api.post("/booking/availability", body);

//         setFreeHours(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchFreeHours();
//   }, []);

//   console.log(freeHours)

//   function handleChange(e) {
//     console.log("handle change do radio ", e);
//     setForm({ ...form, schedule: e.target.id});
//   }

//   return (
//     <div>
//       {/*Escolher o horario*/}
//       <Container className="border rounded mt-3">
//         <h2>Horários disponíveis</h2>
//         <Form>
//         <div key={`default-radio`} className="mb-3">
//         {!isLoading && freeHours
//             .map((hour) => {
//               return (
//                   <Form.Check 
//                     type="radio"
//                     name="hour-radio"
//                     id={`${form.data}-${hour}`}
//                     label={`${hour}`}
//                     onChange={handleChange}
//                   />
//               );
//             })} 
//           </div>      
//         </Form>
//       </Container>

//     </div> 

//   );
// }

// export default Horarios;
