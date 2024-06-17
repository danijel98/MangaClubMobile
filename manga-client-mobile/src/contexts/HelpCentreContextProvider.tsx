import { createContext, FC, useState } from "react";
import { QuestionAnswer } from "../models/QuestionAnswer";

interface IHelpCentreContext {
  questionsAnswers: QuestionAnswer[];
  getQuestionsAndAnswers: () => void;
}

const HelpCentreContext = createContext({} as IHelpCentreContext);

interface IHelpCentreContextProps {
  children: React.ReactNode;
}

const HelpCentreContextProvider: FC<IHelpCentreContextProps> = (props) => {
  const [questionsAnswers, setQuestionsAnswers] = useState<QuestionAnswer[]>(
    []
  );

  const getQuestionsAndAnswers = () => {
    setQuestionsAnswers([
      {
        question: "What is the MangaClub?",
        answer:
          "The MangaClub is a manga platform that gives you unlimited access to all the content on our platform, including stories from new content drops, for a set monthly subscription. Paying per content, or being limited to the amount you can read, is a thing of the past. Get 1000s of chapters with new ones dropped weekly, for the price of three cups of coffee!\n\nThe MangaClub is always ad free, to give you a great user experience, and can be viewed on any device, as long as you have an active monthly subscription. New chapters and stories are added weekly, with the aim of building up the world's largest manga collection, all for the enjoyment of fellow manga lovers like yourself!",
      },
      {
        question: "What is included in my subscription?",
        answer:
          "Unlimited access to our platform, and all the content on it. This includes 1000s of chapters from 20+ genres, with new chapters and stories added weekly! Read as much as you like, as many times as you like. You also get unlimited access to all new content, as long as you keep your subscription active.",
      },
      {
        question: "When and how will I be billed?",
        answer:
          "You will then be billed every month on the same day you first signed up. You can cancel at any time, as long as you cancel before your next bill date. Payments won’t be refunded… so if you want to cancel, make sure you do so before you get billed!",
      },
      {
        question: "Why is there a fee?",
        answer:
          "We hate to see artists treated badly. Did you know that many Mangaka work 16 hours a day 7 days a week?!\nWe started the MangaClub with the mission of creating fair payment and working hours for the talented artists who create the manga we all love so much. We couldn’t do this without charging you a small fee.\nPersonally, we think that if you can afford to spare $8, then it’s worth doing so to create better working conditions for artists.\nCharging a fee also means that we can afford to keep your data and info 100% secure. Free platforms are usually sharing your data and preference with third parties (yikesss) to make a profit. With us, all your information is always kept between us and you, forever!",
      },
      {
        question: "Why was the MangaClub created?",
        answer:
          "As devoted manga readers, we got just a little tired of a couple of things...\n\nOne of our co-creators has worked as an artist, and with many many other artists, so we know first hand how hard it can be for talented artists to live a comfortable life from their craft. And this sucks! We hate seeing some of the most talented people out there being unfairly compensated, struggling with consistent income, and awful working hours/conditions. We created the MangaClub with the mission of creating a safe space for artists to get fair compensation for their work, and we use over 70% of the money we bring in to compensate artists fairly and promote artists, so they get the credit for their own work, and can make a name for themselves!\n\nSecondly, we got tired of either having to pay a fortune to read as many chapters as we’d like to (those pay per content platforms/apps will hit your bank account hard… ouch!), or manga being free but coming with the cost of our personal data being sold on to third parties. The MangaClub lets you opt out of both those options, with a small monthly fee, unlimited content, and your privacy always respected. That’s why we are ad free, always!",
      },
    ]);
  };

  const providerValue = { questionsAnswers, getQuestionsAndAnswers };

  return (
    <HelpCentreContext.Provider value={providerValue}>
      {props.children}
    </HelpCentreContext.Provider>
  );
};

export { HelpCentreContextProvider, HelpCentreContext };
