import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";

const FAQSection = ({}) => {
  const List = [
    {
      question: "1.Will I get to interact with my tutor?",
      answer: "Yes! All the doubts and queries would be addressed through built in chat option and WhatsApp portal would also be active where your tutor would respond you within 24 hours of addressing your query.",
    },
    {
      question: "3.Do I need any equipment?",
      answer: "No! These are no equipment workouts for you to practice them easily at home.",
    },
    {
      question: "4.What is the procedure after I purchase this course?",
      answer: "Once you register for our sessions, your course will be visible to you in ‘My stuff’. You can select your desired time slot once each day and can attend your session.",
    },
    {
      question: "5.What if I miss a session?",
      answer: "In case you miss a session, don’t worry. We offer flexible time slots to our users. You can select your desired time slot each day.",
    }
    
  ];
  return (
    <div class="bg-white w-full py-10">
      <div class="max-w-[60%] mx-auto">
        <h1 class="text-4xl font-semibold text-center   mb-4 text-slate-800">
          Frequently Asked Questions
          <br />( FAQ )
        </h1>
        <h4 className="text-xl text-slate-700 font-medium text-center max-w-[80%] mx-auto mb-6">
          I’ve tried my best to answer all frequently asked questions. For
          further queries, please email me at:{" "}
          <span className=" text-blue-700">support@sisinty.com</span>. My
          amazing support team will reply within 12 hours. 🙂
        </h4>
        <Accordion allowToggle>
          {List.map((l, i) => {
            return (
              <FAQ key={i} index={i} question={l.question} answer={l.answer} />
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

const FAQ = ({ question, answer }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton fontSize={20} py={5}>
          <Box as="span" flex='1' textAlign='left'>
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
export default FAQSection;
