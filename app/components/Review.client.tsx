import MarkdownPreview from "@uiw/react-markdown-preview";

const Review = ({ review }: { review?: string }) => {
  if (!review) {
    return null;
  }

  return <MarkdownPreview source={review} className="p-4" />;
};

export default Review;
