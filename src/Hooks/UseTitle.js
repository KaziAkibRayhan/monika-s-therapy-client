import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    document.title = `${title} Monika's Therapy`;
  }, [title]);
}

export default useTitle;
