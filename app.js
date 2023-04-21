// Wait for 10 seconds after the page loads
setTimeout(function () {
  // Select the target node to observe
  const targetNode = document.querySelector('[data-pb-monitored="true"]');

  // Create a new MutationObserver object
  const observer = new MutationObserver(function (mutationsList, observer) {
    // Check if any new items have been added to the newsfeed
    if (mutationsList.some((mutation) => mutation.addedNodes.length > 0)) {
      // Call your function here
      removeS();
    }
  });

  // Configure the observer to watch for changes to the newsfeed
  const config = { childList: true, subtree: true };
  observer.observe(targetNode, config);

  function removeS() {
    // Get all <span> elements on the page
    let count = 0;
    const spanElements = document.getElementsByTagName("span");

    // Loop through all <span> elements and check their content
    for (let i = 0; i < spanElements.length; i++) {
      const spanContent = spanElements[i].textContent;

      // Check if the content of the <span> element matches "Gợi ý cho bạn"
      // You can edit this to match with your language
      if (
        spanContent === "Gợi ý cho bạn" ||
        spanContent === "Suggested for you"
      ) {
        // Do something with the matching <span> element
        let currentElement = spanElements[i];
        while (currentElement.className != "x1lliihq") {
          currentElement = currentElement.parentElement;
        }
        //   console.log(currentElement.className);
        currentElement.remove();
        count++;
      }
    }
    console.log("removed posts: " + count);
  }
}, 10000); // Wait for 10 seconds (10,000 milliseconds) before running the code