import Link from "next/link";
export default function Home() {
  return (
    <>
      <li>
        
        <Link  className="underline text-blue-600 text-xl" href="/zumba">Zumba</Link>
      </li>
      <li>
        
        <Link  className="underline text-blue-600 text-xl" href="/cooking">Cooking</Link>
      </li>
      <li>
        
        <Link  className="underline text-blue-600 text-xl" href="/bellydance">Belly Dance</Link>
      </li>
      <li>
        
        <Link  className="underline text-blue-600 text-xl" href="/bhangra">Bhangra Fitness</Link>
      </li>
      <li>
        
        <Link  className="underline text-blue-600 text-xl" href="/yoga">Yoga</Link>
      </li>
    </>
  );
}
