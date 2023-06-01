const formatDate = ISOFormate => {
  const date = new Date(ISOFormate);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};

export default formatDate;
