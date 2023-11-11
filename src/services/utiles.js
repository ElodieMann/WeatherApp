export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedTime = date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    return formattedTime;
  };

  