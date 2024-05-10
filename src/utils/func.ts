import { galleryImage } from "../components/Projects/ProjectGallery";

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

export const scrollToContactSection = (
  setIsSidenavOpen?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const element = document.getElementById("contact-us");

  setIsSidenavOpen && setIsSidenavOpen(false);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const createViewableImageGrid = (
  galleryImagesArr: galleryImage[]
): galleryImage[] => {
  const newGalleryImagesArr: galleryImage[] = [];
  const addPortrateImagesIndex = new Set();

  for (let i = 0; i < galleryImagesArr.length; i++) {
    if (galleryImagesArr[i].type === "landscape") {
      newGalleryImagesArr.push(galleryImagesArr[i]);
      continue;
    }

    let counter = i + 1;

    if (counter === galleryImagesArr.length && !addPortrateImagesIndex.has(i)) {
      newGalleryImagesArr.push(galleryImagesArr[i]);
      break;
    }

    if (
      !addPortrateImagesIndex.has(i) &&
      !addPortrateImagesIndex.has(counter)
    ) {
      let foundNextPortrait = false;

      while (!foundNextPortrait) {
        if (
          galleryImagesArr[counter] &&
          galleryImagesArr[counter].type === "portrait"
        ) {
          addPortrateImagesIndex.add(i);
          addPortrateImagesIndex.add(counter);

          newGalleryImagesArr.push(galleryImagesArr[i]);
          newGalleryImagesArr.push(galleryImagesArr[counter]);

          foundNextPortrait = true;
        }

        if (counter === galleryImagesArr.length) {
          foundNextPortrait = true;
        }

        ++counter;
      }
    }
  }

  return newGalleryImagesArr;
};

export const isEvenArray = (galleryImagesLength: number): boolean => {
  if (galleryImagesLength % 4 === 0) {
    return true;
  }

  return false;
};
