import React from "react";

import { Authenticated } from "./authenticated";
import { Unauthenticated } from "./unauthenticated";
import { AuthState } from "./authState";

import "./login.css";

export function Login(userName, authState, onAuthChange) {
  console.log(userName);
  // console.log(authState);
  // console.log(onAuthChange);

  return (
    <main className="container-fluid bg-white text-center">
      <div>
        {authState !== AuthState.Unauthenticated && <h1>Let's get started</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onLogout={(loginUserName) =>
              onAuthChange(loginUserName, AuthState.Unauthenticated)
            }
          />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={() => onAuthChange(userName, AuthState.Unauthenticated)}
          />
        )}
      </div>
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
