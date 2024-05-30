import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full py-2">
      <Link href={"/"}>
        <h1 className="text-2xl">wpi softeng companion site</h1>
      </Link>
    </div>
  );
}
