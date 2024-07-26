const useDateHandler = () => {
  const now = new Date();
  const options = {
    timeZone: "Asia/Tehran",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const iranianDateTime = now.toLocaleString("fa-IR", options as any);

  return iranianDateTime;
};
export default useDateHandler;
