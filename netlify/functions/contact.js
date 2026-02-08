exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  console.log("Contact form submission:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submitted successfully!" }),
  };
};

