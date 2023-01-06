const AccordionSection = ({}) => {
  const List = [
    {
      heading: "Question #1334",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh",
    },
    {
      heading: "Question #1334",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh",
    },
    {
      heading: "Question #1334",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh",
    },
    {
      heading: "Question #1334",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh",
    },
    {
      heading: "Question #1334",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh",
    },
    {
      heading: "Question #1334",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh",
    },
    {
      heading: "Question #1334",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh",
    },
    {
      heading: "Question #1334",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh",
    },
    {
      heading: "Question #1334",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh",
    },
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
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {List.map((l, i) => {
            return (
              <Accordion key={i} index={i} heading={l.heading} text={l.text} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ heading, text, index }) => {
  return (
    <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
      <h2 class="accordion-header mb-0" id="flush-headingOne">
        <button
          class="accordion-button
 relative
 flex
 items-center
 w-full
 py-4
 px-5
 text-base text-gray-800 text-left
 bg-white
 border-0
 rounded-none
 transition
 focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collpase-${index}`}
          aria-expanded="false"
          aria-controls={`flush-collpase-${index}`}
        >
          {heading}
        </button>
      </h2>
      <div
        id={`flush-collpase-${index}`}
        class="accordion-collapse border-0 collapse transition-all"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body py-4 px-5">{text}</div>
      </div>
    </div>
  );
};
export default AccordionSection;
