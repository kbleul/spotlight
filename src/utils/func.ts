export const disableScroll = () => {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // if any scroll is attempted,
  // set this to the previous value
  window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);
};

export const enableScroll = () => {
  window.onscroll = function () {};
};

export const truncateText = (text: string, maxLength: number): string => {
  if (!text) return "";

  const ellipsis = "...";
  const amharicText = text.substring(0, maxLength);

  // Check if the original text is longer than the truncated text
  if (text.length > maxLength) {
    // Remove any incomplete UTF-8 characters at the end
    const truncatedText = amharicText.replace(
      /[\uD800-\uDBFF][\uDC00-\uDFFF]$/,
      ""
    );

    return truncatedText + ellipsis;
  }

  return amharicText;
};
