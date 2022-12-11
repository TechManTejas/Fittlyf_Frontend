import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const SubFAQComp = ({ que, ans }) => {
  const [show, setshow] = useState(false);

  return (
    <>
      <div
        className="border-b w-4/6 cursor-pointer"
        onClick={() => {
          setshow(!show);
        }}
      >
        <div className="flex justify-between p-3">
          <h2 className="text-xl">{que}</h2>
          {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>

        {show && (
          <div className="font-normal p-3">{ans}</div>
        )}
      </div>
    </>
  );
};

const FAQ = () => {
  const QuestionAnswers = [
    {
      q: "Is PCOS a disease?",
      a: "PCOS is a lifestyle disorder that can be effectively treated with Ayurveda for long-lasting relief.",
    },
    {
      q: "Who can get PCOS?",
      a: "PCOS normally affects women once they start having menstrual cycles or hit the age of puberty (typically around age 11).",
    },
    {
      q: "Is it possible to use Ayurveda to treat PCOS?",
      a: "Yes. The duration of the treatment depends on the severity of your PCOS.",
    },
    {
      q: "How long does it take to recover?",
      a: "For mild to moderate cases, it takes at least 6 months.",
    },
  ];

  return (
    <div id="FAQ" className="flex items-center justify-center my-12">
      <div className="w-full flex flex-col items-center">
        <h3 className="font-normal text-2xl">FAQs</h3>
        {QuestionAnswers.map((qa) => {
          return <SubFAQComp que={qa.q} ans={qa.a} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
