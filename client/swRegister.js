/*
* First example
* Function to check if service worker is enabled and
* compatible with our browser
export default async () => {
  * navigator obj contains info about browser
  try {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    * sw.js is the service worker file we want to register
    * this will return a promise, if successful, we receive
    * the ServiceWorkerRegistration object as a parameter

    * after reload the page will enter the activated state immediately
    const swRegistration = await navigator.serviceWorker.register(
      "serviceWorker.js",
      { scope: "" }
    );

    let serviceWorker;

    if (swRegistration.installing) {
      console.log("SWReg object resolved on installing:", swRegistration);
      serviceWorker = swRegistration.installing;
    } else if (swRegistration.waiting) {
      console.log(
        "SWReg object resolved on installed/waiting:",
        swRegistration
      );
      serviceWorker = swRegistration.waiting;
    } else if (swRegistration.active) {
      console.log("SWReg object resolved on activated:", swRegistration);
      serviceWorker = swRegistration.active;
    }

    serviceWorker.addEventListener("statechange", (event) => {
      console.log("Event target: ", event.target.state);
    });
  } catch (error) {
    console.log("This is the error:", error);
  }
};
*/

export default async () => {
  const serviceWorkerFileName = "/serviceWorker.js";

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register(serviceWorkerFileName).then(
        function (registration) {
          console.log(
            "SW registration successful. Scope: ",
            registration.scope
          );
        },
        function (err) {
          console.log("SW registration failed: ", err);
        }
      );
    });
  }
};
