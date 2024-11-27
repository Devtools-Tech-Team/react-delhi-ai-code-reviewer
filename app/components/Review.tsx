import Markdown from "react-markdown";

const Review = ({ review }: { review?: string }) => {
  if (!review) {
    return null;
  }

  return <Markdown>{review}</Markdown>;
};

export default Review;
