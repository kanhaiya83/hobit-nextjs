import Link from "next/link";
import Script from "next/script";
export default function Home() {
  return (
    <>
        <Script async={true} src={"https://www.googletagmanager.com/gtag/js?id=AW-11109113326"}/>
        <Script
            id={'google-analytics'}
            strategy={"afterInteractive"}
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11109113326');
            `
            }}
        />
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
