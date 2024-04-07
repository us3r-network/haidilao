import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function List() {
  return (
    <div className="w-screen mt-5 border-4 border-x-0 md:w-[900px] md:border-x-4 border-black">
      <div className="bg-[#AD3E10] flex items-center justify-center text-center text-[20px] md:text-[32px]">
        <img src="/heartbreak.png" alt="" />
        <span>The Heartbreaker Board</span>
        <img src="/heartbreak.png" alt="" />
      </div>
      <Table className="text-base md:text-2xl">
        <TableHeader>
          <TableRow className="bg-[#F0B952]">
            <TableHead className="w-[100px] text-black">Rank</TableHead>
            <TableHead className="text-black">User</TableHead>
            <TableHead className="text-black">$Degen</TableHead>
            <TableHead className="text-right text-black">Haidilao</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-t-4 border-black">
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow
            className="border-t-4 border-black bg-[#F0B952]"
            style={{
              borderTopWidth: "4px",
            }}
          >
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="border-t-4 border-black">
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow
            className="border-t-4 border-black bg-[#F0B952]"
            style={{
              borderTopWidth: "4px",
            }}
          >
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="border-t-4 border-black">
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow
            className="border-t-4 border-black bg-[#F0B952]"
            style={{
              borderTopWidth: "4px",
            }}
          >
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="border-t-4 border-black">
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow
            className="border-t-4 border-black bg-[#F0B952]"
            style={{
              borderTopWidth: "4px",
            }}
          >
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="border-t-4 border-black">
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow
            className="border-t-4 border-black bg-[#F0B952]"
            style={{
              borderTopWidth: "4px",
            }}
          >
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="border-t-4 border-black">
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow
            className="border-t-4 border-black bg-[#F0B952]"
            style={{
              borderTopWidth: "4px",
            }}
          >
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="border-t-4 border-black">
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow
            className="border-t-4 border-black bg-[#F0B952]"
            style={{
              borderTopWidth: "4px",
            }}
          >
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow className="border-t-4 border-black">
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow
            className="border-t-4 border-black bg-[#F0B952]"
            style={{
              borderTopWidth: "4px",
            }}
          >
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
