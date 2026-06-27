"use client";

import { signOut } from "next-auth/react";

export default function AuthBar({ email }) {
  return (
    <div className="gate-bar">
      <span className="gate-bar-email">
        <span className="gate-bar-dot" />
        {email}
      </span>
      <button className="gate-bar-out" onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
