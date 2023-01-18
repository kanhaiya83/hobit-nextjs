import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import EnrollButton from "./EnrollButton";
import SectionHeading from "./SectionHeading";

const FAQSection = ({ data }) => {
  const List = [
    {
      question: "1.Will I get to interact with my tutor?",
      answer:
        "Yes! All the doubts and queries would be addressed through built in chat option and WhatsApp portal would also be active where your tutor would respond you within 24 hours of addressing your query.",
    },
    {
      question: "3.Do I need any equipment?",
      answer:
        "No! These are no equipment workouts for you to practice them easily at home.",
    },
    {
      question: "4.What is the procedure after I purchase this course?",
      answer:
        "Once you register for our sessions, your course will be visible to you in ‘My stuff’. You can select your desired time slot once each day and can attend your session.",
    },
    {
      question: "5.What if I miss a session?",
      answer:
        "In case you miss a session, don’t worry. We offer flexible time slots to our users. You can select your desired time slot each day.",
    },
  ];
  return (
    <div class="bg-white w-full py-10 px-[5%]">
      <div class="max-w-[900px] mx-auto">
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
        <Accordion allowToggle>
          {List.map((l, i) => {
            return (
              <FAQ key={i} index={i} question={l.question} answer={l.answer} />
            );
          })}

        </Accordion>
        {List.map((l, i) => {
            return (
              <CustomAccordion key={i} index={i} question={l.question} answer={l.answer} />
            );
          })}
        <EnrollButton applyClasses="my-8">
          Sale at &#x20b9; {data.price}
        </EnrollButton>
      </div>
    </div>
  );
};

const FAQ = ({ question, answer }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton fontSize={20} py={5}>
          <Box as="span" flex="1" textAlign="left">
            {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} fontSize={18}>
        {answer}
      </AccordionPanel>
    </AccordionItem>
  );
};
const CustomAccordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  return <div className="w-full flex flex-col  px-4 border-b border-slate-200">
      <div className="flex items-center  text-xl py-5 cursor-pointer hover:bg-slate-50" onClick={() => setIsActive(!isActive)}>
        <div>{question}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      <div className={`transition-[transform] origin-top duration-200 ease-linear overflow-hidden ${isActive ? "scale-y-100" : "scale-y-0"}`}>
        <h3 className="text-lg text-slate-700">{answer}</h3>
      </div>
    </div>
};
export default FAQSection;
