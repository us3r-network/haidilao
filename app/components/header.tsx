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

  // console.log({ user });

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
          <Button onClick={logout} variant={null} size={"icon"}>
            <LogoutIcon />
          </Button>
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

function LogoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4.16662 15.8333H5.83329C6.05428 15.8334 6.26621 15.9212 6.42246 16.0775C6.57871 16.2337 6.66649 16.4457 6.66649 16.6667C6.66649 16.8877 6.57871 17.0996 6.42246 17.2559C6.26621 17.4122 6.05428 17.5 5.83329 17.5H3.33329C3.11227 17.5 2.90031 17.4122 2.74403 17.2559C2.58775 17.0996 2.49995 16.8877 2.49995 16.6667V3.33333C2.49995 3.11232 2.58775 2.90036 2.74403 2.74408C2.90031 2.5878 3.11227 2.5 3.33329 2.5H5.83329C6.05428 2.50003 6.26621 2.58785 6.42246 2.74412C6.57871 2.9004 6.66649 3.11234 6.66649 3.33333C6.66649 3.55433 6.57871 3.76627 6.42246 3.92254C6.26621 4.07882 6.05428 4.16663 5.83329 4.16667H4.16662V15.8333ZM14.655 9.16667L11.0775 5.58917C10.9979 5.51229 10.9344 5.42034 10.8907 5.31867C10.847 5.217 10.824 5.10765 10.8231 4.997C10.8221 4.88635 10.8432 4.77662 10.8851 4.6742C10.927 4.57179 10.9889 4.47875 11.0671 4.4005C11.1454 4.32226 11.2384 4.26038 11.3408 4.21848C11.4432 4.17658 11.553 4.1555 11.6636 4.15646C11.7743 4.15742 11.8836 4.18041 11.9853 4.22408C12.087 4.26776 12.1789 4.33124 12.2558 4.41083L17.2558 9.41083C17.7808 9.93583 17.4091 10.8333 16.6666 10.8333H6.66662C6.44561 10.8333 6.23365 10.7455 6.07736 10.5893C5.92108 10.433 5.83329 10.221 5.83329 10C5.83329 9.77899 5.92108 9.56702 6.07736 9.41074C6.23365 9.25446 6.44561 9.16667 6.66662 9.16667H14.655ZM13.6333 12.2767C13.7169 12.2035 13.8143 12.1478 13.9198 12.1128C14.0253 12.0779 14.1367 12.0644 14.2475 12.0731C14.3582 12.0818 14.4662 12.1126 14.5648 12.1637C14.6635 12.2147 14.751 12.285 14.8222 12.3704C14.8933 12.4557 14.9467 12.5545 14.9791 12.6608C15.0115 12.767 15.0223 12.8787 15.0109 12.9893C14.9995 13.0998 14.9662 13.2069 14.9128 13.3044C14.8594 13.4018 14.787 13.4876 14.7 13.5567L12.2 15.64C12.1163 15.7132 12.0189 15.7689 11.9134 15.8038C11.808 15.8388 11.6965 15.8523 11.5858 15.8436C11.475 15.8348 11.3671 15.804 11.2684 15.753C11.1697 15.7019 11.0822 15.6317 11.0111 15.5463C10.9399 15.4609 10.8866 15.3622 10.8542 15.2559C10.8218 15.1496 10.8109 15.0379 10.8223 14.9274C10.8337 14.8169 10.8671 14.7097 10.9205 14.6123C10.9739 14.5148 11.0462 14.4291 11.1333 14.36L13.6333 12.2767Z"
        fill="#000"
      ></path>
    </svg>
  );
}
