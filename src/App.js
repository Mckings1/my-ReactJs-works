//theme dark and ligh
import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./switch";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would make
        me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;

// import "./App.css";
// import { useState } from "react";
// import { validateEmail } from "../src/utils";

// const PasswordErrorMessage = () => {
//   return (
//     <p className="FieldError">Password should have at least 8 characters</p>
//   );
// };

// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState({
//     value: "",
//     isTouched: false,
//   });
//   const [role, setRole] = useState("role");

//   const getIsFormValid = () => {
//     return (
//       firstName &&
//       validateEmail(email) &&
//       password.value.length >= 8 &&
//       role !== "role"
//     );
//   };

//   const clearForm = () => {
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword({
//       value: "",
//       isTouched: false,
//     });
//     setRole("role");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Account created!");
//     clearForm();
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>Sign Up</h2>
//           <div className="Field">
//             <label>
//               First name <sup>*</sup>
//             </label>
//             <input
//               value={firstName}
//               onChange={(e) => {
//                 setFirstName(e.target.value);
//               }}
//               placeholder="First name"
//             />
//           </div>
//           <div className="Field">
//             <label>Last name</label>
//             <input
//               value={lastName}
//               onChange={(e) => {
//                 setLastName(e.target.value);
//               }}
//               placeholder="Last name"
//             />
//           </div>
//           <div className="Field">
//             <label>
//               Email address <sup>*</sup>
//             </label>
//             <input
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               placeholder="Email address"
//             />
//           </div>
//           <div className="Field">
//             <label>
//               Password <sup>*</sup>
//             </label>
//             <input
//               value={password.value}
//               type="password"
//               onChange={(e) => {
//                 setPassword({ ...password, value: e.target.value });
//               }}
//               onBlur={() => {
//                 setPassword({ ...password, isTouched: true });
//               }}
//               placeholder="Password"
//             />
//             {password.isTouched && password.value.length < 8 ? (
//               <PasswordErrorMessage />
//             ) : null}
//           </div>
//           <div className="Field">
//             <label>
//               Role <sup>*</sup>
//             </label>
//             <select value={role} onChange={(e) => setRole(e.target.value)}>
//               <option value="role">Role</option>
//               <option value="individual">Individual</option>
//               <option value="business">Business</option>
//             </select>
//           </div>
//           <button type="submit" disabled={!getIsFormValid()}>
//             Create account
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default App;
// import { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const [name, setName] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setName("");
//     console.log("Form Submitted");
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <div className="Field">
//             <label htmlFor="name">Name:</label>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <button disabled={!name} type="submit">
//             Submit
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }
// export default App;

// function App() {
//   const inputRef = useRef(null);
//   const resultRef = useRef(null);
//   const [result, setResult] = useState(0);

//   function plus(e) {
//     e.preventDefault();
//     setResult((result) => result + Number(inputRef.current.value));
//   }

//   function minus(e) {
//     // Add the code for the minus function
//     e.preventDefault();
//     setResult((result) => result - Number(inputRef.current.value));
//   }

//   function times(e) {
//     // Add the code for the plus function
//     e.preventDefault();
//     setResult((result) => result * Number(inputRef.current.value));
//   }

//   function divide(e) {
//     // Add the code for the divide function
//     e.preventDefault();
//     setResult((result) => result / Number(inputRef.current.value));
//   }

//   function resetInput(e) {
//     // Add the code for the resetInput function
//     e.preventDefault();
//     inputRef.current.value = 0;
//   }

//   function resetResult(e) {
//     // Add the code for the resetResult function
//     e.preventDefault();
//     setResult((prevVal) => prevVal * 0);
//   }

//   return (
//     <div className="App">
//       <div>
//         <h1>Simplest Working Calculator</h1>
//       </div>
//       <form>
//         <p ref={resultRef}>{result}</p>
//         <input
//           pattern="[0-9]"
//           ref={inputRef}
//           type="number"
//           placeholder="Type a number"
//         />
//         <button onClick={plus}>add</button>
//         {/* Add the subtract button */}
//         <button onClick={minus}>subtract</button>
//         {/* Add the multiply button */}
//         <button onClick={times}>multiply</button>
//         {/* Add the divide button */}
//         <button onClick={divide}>divide</button>
//         {/* Add the resetInput button */}
//         <button onClick={resetInput}>reset Input</button>
//         {/* Add the resetResult button */}
//         <button onClick={resetResult}>reset Result</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import ReactPlayer from "react-player/youtube";

// const App = () => {
//   return (
//     <div>
//       <MyVideo />
//     </div>
//   );
// };

// const MyVideo = () => {
//   return <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />;
// };

// export default App;

// import logo from "./logo.svg";
// import "./App.css";

// import { useState } from "react";
// import "./App.css";
// import Homepage from "./Homepage";
// import AboutLittleLemon from "./AboutLittleLemon";
// import Contact from "./Contact";
// import { Routes, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <nav>
//         <Link to="/" className="nav-item">
//           Homepage
//         </Link>
//         <Link to="/about" className="nav-item">
//           About Little Lemon
//         </Link>
//         <Link to="/contact" className="nav-item">
//           Contact
//         </Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Homepage />}></Route>
//         <Route path="/about" element={<AboutLittleLemon />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

// export default function RegisterForm() {
//   const [form, setForm] = useState({
//     firstName: "Luke",
//     lastName: "Jones",
//     email: "lukeJones@sculpture.com",
//   });

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={form.firstName}
//           onChange={(e) => {
//             setForm({
//               ...form,
//               firstName: e.target.value,
//             });
//           }}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={form.lastName}
//           onChange={(e) => {
//             setForm({
//               ...form,
//               lastName: e.target.value,
//             });
//           }}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={form.email}
//           onChange={(e) => {
//             setForm({
//               ...form,
//               email: e.target.value,
//             });
//           }}
//         />
//       </label>
//       <p>
//         {form.firstName} {form.lastName} ({form.email})
//       </p>
//     </>
//   );
// }
//hooks
// import { useState } from "react";
// export default function InputComponent() {
//   const [inputText, setText] = useState("hello");

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input value={inputText} onChange={handleChange} />
//       <p>You typed: {inputText}</p>
//       <button onClick={() => setText("hello")}>Reset</button>
//     </>
//   );
// }
// function Header() {
//   return <h1>Hello World!</h1>;
// }
// function App() {
//   return <Header />;
// }

// export default App;
