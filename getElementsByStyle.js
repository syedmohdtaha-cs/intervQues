function getElementsByStyle(property, value) {
  const elements = document.querySelectorAll("*");
  const result = [];

  elements.forEach((element) => {
    const styles = getComputedStyle(element);

    if (styles[property] === value) {
      result.push(element);
    }
  });

  return result;
}
