import Image from "next/image";
import SectionHeading from "./SectionHeading";
const featuredInList = [
  {
    link: "https://wap.business-standard.com/content-amp/press-releases-ani/hobit-ed-tech-s-next-buzzing-sensation-successfully-clocks-in-1-00-000-users-122061600508_1.html",
    image: "/images/featured_in_logos/business-insider.png",
  },
  {
    link: "https://www.aninews.in/news/business/business/hobit-an-interactive-learning-platform-for-hobbies-amp-a-marwari-catalysts-portfolio-startup-lands-usd-200k-in-seed-round-funding20220207181833/",
    image: "/images/featured_in_logos/ani.jpg",
  },
  {
    link: "https://theprint.in/ani-press-releases/hobit-ed-techs-next-buzzing-sensation-successfully-clocks-in-100000-users/996465/?amp",
    image: "/images/featured_in_logos/the-print.webp",
  },
  {
    link: "https://yourstory.com/2021/08/faridabad-based-live-virtual-learning-startup-pursue-hobbies",
    image: "/images/featured_in_logos/yourstory.png",
  },
];
const FeaturedSection = () => {
  return (
    <div class="my-10 md:my-15 py-6 w-full flex flex-col items-center px-[5%]">
      <SectionHeading>Featured In</SectionHeading>
      <div class="grid grid-cols-2 md:grid-cols-4 max-w-[900px] w-full gap-x-[5%] gap-y-8">
        {featuredInList.map((item, index) => {
          return (
            <a
              href={item.link}
              className="relative h-[70px]"
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={item.image}
                alt=""
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedSection;
