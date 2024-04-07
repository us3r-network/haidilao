/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Check() {
  const [checked, setChecked] = useState(true);
  if (checked) {
    return (
      <>
        <div className="m-10 hidden md:block">
          <div
            className="w-[720px] h-[200px] box-content"
            style={{
              backgroundColor: "none",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundImage: "url('/dialog.svg')",
            }}
          >
            <div className="p-5 text-3xl">
              <div>d-ttang@d_ttang:</div>
              <div>
                I paper handed xxx $degen now worth $xxxx, if i held them today
                i can have...
              </div>
            </div>
          </div>
          <div className="w-[720px] h-[180px] box-content mt-5 flex gap-10">
            <div
              className="w-[180px] min-w-[180px] h-full p-2 overflow-hidden"
              style={{
                backgroundColor: "none",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundImage: "url('/avatar.png')",
              }}
            >
              <img
                className="w-full h-full"
                src="https://wrpcd.net/cdn-cgi/image/fit=contain,f=auto,w=168/https%3A%2F%2Fi.imgur.com%2Fjaz8927.png"
                alt=""
              />
            </div>
            <div className="text-[60px] leading-none">
              <div className="p-0 m-0 text-[#F9D818]"> xxxx </div>
              <div className="p-0 m-0">time haidilao hot pot!!!!!</div>
            </div>
          </div>
        </div>
        <div className="m-5 flex flex-col items-center md:hidden">
          <div
            className="w-[390px] h-[200px] box-content"
            style={{
              backgroundColor: "none",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundImage: "url('/mobiledialog.svg')",
            }}
          >
            <div className="p-5 text-xl">
              <div>d-ttang@d_ttang:</div>
              <div>
                I paper handed xxx $degen now worth $xxxx, if i held them today
                i can have...
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[100px] box-content mt-2 flex gap-5">
            <div
              className="w-[100px] min-w-[100px] h-full p-2 overflow-hidden"
              style={{
                backgroundColor: "none",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundImage: "url('/mobileavatar.png')",
              }}
            >
              <img
                className="w-full h-full"
                src="https://wrpcd.net/cdn-cgi/image/fit=contain,f=auto,w=168/https%3A%2F%2Fi.imgur.com%2Fjaz8927.png"
                alt=""
              />
            </div>
            <div className="text-[30px] leading-none">
              <div className="p-0 m-0 text-[#F9D818]"> xxxx </div>
              <div className="p-0 m-0">time haidilao hot pot!!!!!</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="m-5 md:m-10">
      <div className="flex items-center justify-center ">
        <div className="block md:hidden">
          <img src="/mobilebanner.png" alt="" />
        </div>
        <div className="hidden md:block max-w-[720px]">
          <img src="/banner.png" alt="" />
        </div>
      </div>

      <div className="flex justify-center mt-7">
        <Button
          className="text-[16px] p-2 md:text-[24px] md:p-5 text-black w-[360px]"
          style={{
            borderRadius: "10px",
            border: "4px solid var(--Black, #000)",
            background: "#FFF",
            boxShadow: "4px 4px 0px 0px #1E293B",
          }}
          onClick={() => {
            setChecked(!checked);
          }}
        >
          Check Me
        </Button>
      </div>
    </div>
  );
}
