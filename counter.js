export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `How many &#127814 you have taken = 
    ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
