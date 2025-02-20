import React from "react";

import { Authenticated } from "./authenticated";
import { Unauthenticated } from "./unauthenticated";
import { AuthState } from "./authState";

import "./login.css";

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container-fluid bg-white text-center">
      <div>
        {authState !== AuthState.Unknown && <h1>Let's get started</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
          />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) =>
              onAuthChange(loginUserName, AuthState.Authenticated)
            }
          />
        )}
      </div>
    </main>
  );
}
