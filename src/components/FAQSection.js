import Image from "next/image";
import { useRef, useState } from "react";
import EnrollButton from "./EnrollButton";
import SectionHeading from "./SectionHeading";

const FAQSection = ({ data }) => {
  const List = [
    {
      question: "Will I get to interact with my tutor?",
      answer:
        "Yes! All the doubts and queries would be addressed through built in chat option and WhatsApp portal would also be active where your tutor would respond you within 24 hours of addressing your query.",
    },
    {
      question: "Do I need any equipment?",
      answer:
        "No! These are no equipment workouts for you to practice them easily at home.",
    },
    {
      question: "What is the procedure after I purchase this course?",
      answer:
        "Once you register for our sessions, your course will be visible to you in ‘My stuff’. You can select your desired time slot once each day and can attend your session.",
    },
    {
      question: "What if I miss a session?",
      answer:
        "In case you miss a session, don’t worry. We offer flexible time slots to our users. You can select your desired time slot each day.",
    },
  ];
  return (
    <div className="bg-white w-full py-10 px-[5%]">
      <div className="max-w-[900px] mx-auto">
        <SectionHeading className={"mb-2"}>
          Frequently Asked Questions
          <br />( FAQ )
        </SectionHeading>
        <h4 className="md:text-xl text-slate-700 font-medium text-center md:max-w-[80%] mx-auto mb-6">
          We’ve tried my best to answer all frequently asked questions. For
          further queries, please email me at:{" "}
          <span className=" text-blue-700">support@hobit.in</span>. Our amazing
          support team will reply within 12 hours. 🙂
        </h4>
        <ul className="flex flex-col items-stretch">
          {List.map((l, i) => {
          return (
            <AccordionItem
              key={i}
              index={i}
              question={l.question}
              answer={l.answer}
            />
          );
        })}
        </ul>
        <EnrollButton applyClasses="my-8">
          Sale at &#x20b9; {data.price}
        </EnrollButton>
      </div>
    </div>
  );
};

const AccordionItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const collapsibleRef = useRef();
  return (
    <div className="w-full flex flex-col bg-[#fafafa] rounded-lg mb-4">
      <div
        className="flex items-center justify-between   py-5 cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <h1 className="text-lg md:text-xl px-4 font-semibold text-slate-700">{question}</h1>
        <div className={`w-8 h-8 relative mr-[5%] transition-all ${isActive && "rotate-180"}`}>
            <Image src="/images/chevron-down.svg" alt="Chevron" fill={true} style={{objectFit:"contain"}}/>
        </div>
      </div>
      <div
        className={`transition-[max-height] max-h-0 duration-100 ease-in overflow-hidden`}
        style={{maxHeight:isActive?collapsibleRef?.current?.scrollHeight:"0px"}}
        ref={collapsibleRef}
      >
        <h3 className="md:text-lg text-slate-700 p-4">{answer}</h3>
      </div>
    </div>
  );
};
export default FAQSection;
