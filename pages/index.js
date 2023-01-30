import Link from "next/link";
export default function Home() {
  return (
    <>
      <li>
        
        <Link  className="underline text-blue-600 text-xl" href="/campaign/zumba">Zumba</Link>
      </li>
      <li>
        
        <Link  className="underline text-blue-600 text-xl" href="/campaign/cooking">Cooking</Link>
      </li>
      <li>
        
        <Link  className="underline text-blue-600 text-xl" href="/campaign/bellydance">Belly Dance</Link>
      </li>
      <li>
        
        <Link  className="underline text-blue-600 text-xl" href="/campaign/bhangra">Bhangra Fitness</Link>
      </li>
    </>
  );
}
