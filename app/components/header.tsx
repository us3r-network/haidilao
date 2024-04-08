/* eslint-disable @next/next/no-img-element */
"use client";

import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";
import { shortPubKey } from "@/lib/shortPubkey";

export default function Header() {
  const { login, ready, authenticated, user, logout } = usePrivy();

  //   useEffect(() => {
  //     if (ready && !privyAuthenticated) {
  //       login();
  //     }
  //   }, [login, privyAuthenticated, ready]);
  // console.log(authenticated, ready, user);

  return (
    <div className="border-b-4 border-black bg-[#AD3E10] flex items-center  p-5 md:py-0 md:px-10 sticky top-0 z-20">
      <div className="flex items-center gap-1 md:gap-2">
        <span className="border-2 rounded-full border-black  w-10 h-10">
          <img src="/logo.png" alt="log" />
        </span>
        <span className="text-[16px] p-2 md:text-[24px] md:p-5">
          Haidilao Hot Pot
        </span>
      </div>
      <div className="flex-grow"></div>
      {(authenticated && (
        <div className="text-[16px] p-2 md:text-[24px] md:p-5 flex items-center gap-1">
          <span>
            {user?.farcaster?.username ||
              (user?.wallet?.address && shortPubKey(user.wallet.address))}
          </span>
          {/* <Button onClick={logout}>Logout</Button> */}
        </div>
      )) || (
        <div>
          <Button
            className="text-[16px] p-2 md:text-[24px] md:p-5"
            style={{
              borderRadius: "10px",
              border: "4px solid var(--Black, #000)",
              background: "#F0B952",
              boxShadow: "4px 4px 0px 0px #1E293B",
            }}
            onClick={() => {
              login();
              console.log("login");
            }}
          >
            Connect
          </Button>
        </div>
      )}
    </div>
  );
}
