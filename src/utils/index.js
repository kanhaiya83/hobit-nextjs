import moment from "moment";

export const isElementInViewport = (el) => {
  if (!el) return;
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
};
export const getProductUID = (campaignId, date) => {
  const keys = {
    zumba: "AZumba",
    yoga: "Yoga",
    bhangra: "Bhangra",
    bellydance: "BellyDance",
    cooking: "Cooking",
  };
  if (!keys[campaignId]) return null;
  const productUID = `${keys[campaignId]}_${moment(date).format("MM-DD-YYYY")}`;
  return productUID;
};
export const parseSlot = (slot) => {
  if (slot.slice(5).toUpperCase() === "PM") {
    return slot.slice(0, 5);
  } else {
    const parsedHours = (parseInt(slot.slice(0, 2)) + 12).toString();
    return parsedHours + slot.slice(2, 5);
  }
};
