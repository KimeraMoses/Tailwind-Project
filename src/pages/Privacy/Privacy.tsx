import privacy from "src/privacy.pdf";
import { NewsLetterSection } from "./../../components/NewsLetterSection/NewsLetterSection";
import CopyRight from "src/components/Footer/CopyRight";

export const Privacy = () => {
  return (
    <div>
      <iframe src={privacy} className="w-full min-h-screen" />
      <div className="w-full h-1 bg-primary"></div>
      <NewsLetterSection />
      <CopyRight />
    </div>
  );
};
