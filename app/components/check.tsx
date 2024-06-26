/* eslint-disable @next/next/no-img-element */
"use client";

import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { HAIDILAO_PRICE, NEXT_PUBLIC_API_BASE_URL } from "@/lib/constants";
import { HaidilaoData } from "./types";
import { shortPubKey } from "@/lib/shortPubkey";

export default function Check() {
  const { login, ready, authenticated, user, logout } = usePrivy();
  const [checkedData, setCheckedData] = useState<HaidilaoData>();

  const checkMeHaidilao = useCallback(async () => {
    if (!authenticated) {
      login();
      return;
    }

    const fid = user?.farcaster?.fid || "";

    const resp = await fetch(
      `${NEXT_PUBLIC_API_BASE_URL}/onboarding/haidilao?topNum=0&fid=${fid}&evmAddr=${
        fid ? "" : user?.wallet?.address
      }`,
      {
        method: "POST",
      }
    );
    const data = await resp.json();
    if (data.code !== 0) {
      // alert(data.msg);
      console.log("err msg", data.msg);
      return;
    }
    // setChecked(true);
    setCheckedData(data.data);
  }, [authenticated, user?.farcaster?.fid, user?.wallet?.address, login]);

  useEffect(() => {
    if (!user) {
      setCheckedData(undefined);
      return;
    }
    checkMeHaidilao();
  }, [user, checkMeHaidilao]);

  // console.log({ checkedData });
  if (checkedData) {
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
            <div className="p-5 text-[26px]">
              {(user?.farcaster && (
                <div>
                  {user?.farcaster?.displayName}@{user?.farcaster?.username}:
                </div>
              )) || <div>{shortPubKey(user?.wallet?.address || "")}:</div>}
              <div>
                {`I paper handed ${checkedData.amount.toLocaleString()} $degen now worth $${(
                  checkedData.amount * checkedData.priceUSD
                ).toLocaleString()}, if i held them today
                i can have...`}
              </div>
            </div>
          </div>
          <div className="w-[720px] h-[180px] box-content mt-5 flex gap-10">
            {user?.farcaster?.pfp && (
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
                  src={user?.farcaster?.pfp}
                  alt=""
                />
              </div>
            )}
            <div className="text-[60px] leading-none">
              <div className="p-0 m-0 text-[#F9D818]">
                {(
                  (checkedData.amount * checkedData.priceUSD) /
                  HAIDILAO_PRICE
                ).toLocaleString()}{" "}
              </div>
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
              {(user?.farcaster && (
                <div>
                  {user?.farcaster?.displayName}@{user?.farcaster?.username}:
                </div>
              )) || <div>{shortPubKey(user?.wallet?.address || "")}:</div>}
              <div>
                {`I paper handed ${checkedData.amount.toLocaleString()} $degen now worth $${(
                  checkedData.amount * checkedData.priceUSD
                ).toLocaleString()}, if i held them today
                i can have...`}
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[100px] box-content mt-2 flex gap-5">
            {user?.farcaster?.pfp && (
              <div
                className="w-[100px] min-w-[100px] h-full p-1 overflow-hidden"
                style={{
                  backgroundColor: "none",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundImage: "url('/mobileavatar.png')",
                }}
              >
                <img
                  className="w-full h-full"
                  src={user?.farcaster?.pfp}
                  alt=""
                />
              </div>
            )}
            <div className="text-[30px] leading-none">
              <div className="p-0 m-0 text-[#F9D818]">
                {(
                  (checkedData.amount * checkedData.priceUSD) /
                  HAIDILAO_PRICE
                ).toLocaleString()}
              </div>
              <div className="p-0 m-0 text-white">
                time haidilao hot pot!!!!!
              </div>
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
          onClick={checkMeHaidilao}
        >
          Check Me
        </Button>
      </div>
    </div>
  );
}
