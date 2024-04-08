/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCallback, useEffect, useMemo, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { cn } from "@/lib/utils";
import { shortPubKey } from "@/lib/shortPubkey";
import { HAIDILAO_PRICE, NEXT_PUBLIC_API_BASE_URL } from "@/lib/constants";
import { HaidilaoData } from "./types";

export default function List() {
  const [mounted, setMounted] = useState(false);
  const { login, ready, authenticated, user } = usePrivy();

  const [data, setData] = useState<HaidilaoData[]>([]);

  const fetchData = useCallback(async () => {
    const fid = user?.farcaster?.fid || "";
    const resp = await fetch(
      `${NEXT_PUBLIC_API_BASE_URL}/onboarding/haidilao?topNum=10&fid=${fid}`
    );
    const data = await resp.json();
    if (data.code !== 0) return;
    // console.log(data.data);
    setData(data.data);
  }, [user]);

  useEffect(() => {
    if (!mounted) return;
    fetchData();
  }, [mounted, fetchData]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentData = useMemo(() => {
    if (!user?.farcaster?.fid) return;
    return data.find(
      (item) =>
        `${item.fid}` === `${user?.farcaster?.fid}` ||
        item.ethAddress === user?.wallet?.address
    );
  }, [data, user?.farcaster?.fid, user?.wallet?.address]);

  const renderData = useMemo(() => {
    if (!currentData) return data;
    return [currentData, ...data];
  }, [currentData, data]);

  return (
    <div className="w-screen mt-5 border-4 border-x-0 md:w-[900px] md:border-x-4 border-black mb-10">
      <div className="bg-[#AD3E10] flex items-center justify-center text-center text-[20px] md:text-[32px]">
        <img src="/heartbreak.png" alt="" />
        <span>The Heartbreaker Board</span>
        <img src="/heartbreak.png" alt="" />
      </div>
      <Table className="text-base md:text-2xl">
        <TableHeader>
          <TableRow className="bg-[#F0B952]">
            <TableHead className="w-[80px] text-black">Rank</TableHead>
            <TableHead className="text-black">User</TableHead>
            <TableHead className="text-black">$Degen</TableHead>
            <TableHead className="text-right text-black">Haidilao</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {renderData.map((item, index) => {
            return (
              <TableRow
                key={index}
                className={cn(
                  "border-t-4 border-black",
                  (index % 2 !== 0 && "bg-[#F0B952]") || "bg-[#AD3E10]"
                )}
              >
                <TableCell className="font-medium">
                  {item.rank || "-"}
                </TableCell>
                <TableCell>
                  {item.username || shortPubKey(item.ethAddress)}
                </TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell className="text-right">
                  {(
                    (item.amount * item.priceUSD) /
                    HAIDILAO_PRICE
                  ).toLocaleString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
