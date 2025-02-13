import React from "react";

import { Unauthenticated } from "./unauthenticated";
import { AuthState } from "./authState";

import "./login.css";

export function Login(userName, authState, onAuthChange) {
  return (
    <main className="container-fluid bg-white text-center">
      {authState !== AuthState.Unknown && <h1>Let's get started</h1>}
      {authState === AuthState.Unauthenticated && (
        <Unauthenticated
          userName={userName}
          onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
        />
      )}
      {/* <form method="get" action="recipes.html">
        <div className="input-group mb-3">
          <span className="input-group-text" id="email">
            Email:
          </span>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="password">
            Password:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="password"
            aria-describedby="password"
          />
        </div>
        <span id="login-buttons">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button type="submit" className="btn btn-secondary">
            Create
          </button>
        </span>
      </form> */}
    </main>
  );
}

// import React from 'react';

// import { Authenticated } from './authenticated';

// export function Login({ userName, authState, onAuthChange }) {
//   return (
//     <main className='container-fluid bg-secondary text-center'>
//       <div>
//         {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
//         {authState === AuthState.Authenticated && (
//           <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
//         )}
//         {authState === AuthState.Unauthenticated && (
//           <Unauthenticated
//             userName={userName}
//             onLogin={(loginUserName) => {
//               onAuthChange(loginUserName, AuthState.Authenticated);
//             }}
//           />
//         )}
//       </div>
//     </main>
//   );
// }
