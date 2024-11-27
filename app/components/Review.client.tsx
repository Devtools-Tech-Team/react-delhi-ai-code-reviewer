import MarkdownPreview from "@uiw/react-markdown-preview";

const Review = ({ review }: { review?: string }) => {
  if (!review) {
    return null;
  }

  return (
    <MarkdownPreview
      source={review}
      className="p-4 h-full"
      style={{
        fontSize: "20px",
      }}
    />
  );
};

export default Review;
