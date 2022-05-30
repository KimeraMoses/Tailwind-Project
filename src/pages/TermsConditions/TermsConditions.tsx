import CopyRight from "src/components/Footer/CopyRight";
import { NewsLetterSection } from "src/components/NewsLetterSection";
import terms from "src/terms.pdf";

export const TermsConditions = () => {
  return (
    <div>
      <iframe src={terms} className="w-full min-h-screen" />
      <div className="w-full h-1 bg-primary"></div>
      <NewsLetterSection />
      <CopyRight />
    </div>
  );
};
