import terms from "src/terms.pdf";

export const TermsConditions = () => {
  return (
    <div>
      <iframe src={terms} className="w-full min-h-screen" />
    </div>
  );
};
