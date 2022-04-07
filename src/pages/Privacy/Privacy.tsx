import privacy from "src/privacy.pdf";

export const Privacy = () => {
  return (
    <div>
      <iframe src={privacy} className="w-full min-h-screen" />
    </div>
  );
};
