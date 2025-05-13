import Link from "next/link";

export default function Navbar() {
  return (
    <div
      id="Links"
      className="flex pt-3 h-10 w-[982px] absolute top-0 justify-between items-center font-montserrat font-medium text-yellow-300"
    >
      <Link href={"/"}>home</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/projects"}>projects</Link>
      <Link href={"/experience"}>experience</Link>
    </div>
  );
}
