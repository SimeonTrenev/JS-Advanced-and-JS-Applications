function attachEvents() {
  let weatherButton = document.getElementById("submit");

  const locationsUrl = `https://judgetests.firebaseio.com/locations.json`;

  let locationName = document.getElementById("location");

  let baseURL = `https://judgetests.firebaseio.com/forecast/`;

  let currentDiv = document.getElementById("current");
  let upcomingDiv = document.getElementById("upcoming");
  let forecastParentDiv = document.getElementById("forecast");
  let forecastDiv = createElement("div", "forecast", "");

  const symbols = {
    Sunny: "&#x2600",
    "Partly sunny": "&#x26C5",
    Overcast: "&#x2601",
    Rain: "&#x2614",
    degrees: "&#176",
  };

  weatherButton.addEventListener("click", () => {
    fetch(locationsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let code;
        try {

            
          code = data.find((city) => city.name === locationName.value).code;
        } catch (err) {
          forecastParentDiv.textContent = "Error";
        }

        //fetch today
        let current = fetch(baseURL + `today/${code}.json`).then((response) =>
          response.json()
        );

        //fetch upcoming
        let upcoming = fetch(
          baseURL + `upcoming/${code}.json`
        ).then((response) => response.json());

        Promise.all([current, upcoming])
          .then(showForecast)
          .catch((err) => {
            console.log(err);
            forecastParentDiv.textContent = "Error";
          });
      });
  });

  function createElement(ele, classes, content) {
    let element = document.createElement(ele);
    element.className = classes;
    // element.classList.add(classes)
    element.innerHTML = content;
    return element;
  }

  function showForecast([currentData, upcomingData]) {
    forecastParentDiv.style.display = "block";

    showCurrent(currentData);
    showUpcoming(upcomingData);
  }

  function showCurrent(currentData) {
    //Dom manipulations

    let currentSymbol = symbols[currentData.forecast.condition];
    let conditionSymbolSpan = createElement(
      "span",
      "condition symbol",
      currentSymbol
    );
    let conditionInfoSpan = createElement("span", "condition", "");

    let forecastCitySpan = createElement(
      "span",
      "forecast-data",
      currentData.name
    );

    let highLow = `${currentData.forecast.low}${symbols.degrees}/${currentData.forecast.high}${symbols.degrees}`;
    let forecastInfoSpan = createElement("span", "forecast-data", highLow);

    let forecastConditionSpan = createElement(
      "span",
      "forecast-data",
      currentData.forecast.condition
    );

    forecastDiv.appendChild(conditionSymbolSpan);

    currentDiv.appendChild(forecastDiv);

    conditionInfoSpan.appendChild(forecastCitySpan);
    conditionInfoSpan.appendChild(forecastInfoSpan);
    conditionInfoSpan.appendChild(forecastConditionSpan);

    forecastDiv.appendChild(conditionInfoSpan);
  }

  function showUpcoming(upcomingData) {
    let foreCastInfo = createElement("div", "forecast-info", "");

    upcomingData.forecast.forEach((obj) => {
      let upcomingSpan = createElement("span", "upcoming", "");
      let conditionSymbolSpan = createElement(
        "span",
        "symbol",
        symbols[obj.condition]
      );

      let highLow = `${obj.low}${symbols.degrees}/${obj.high}${symbols.degrees}`;
      let forecastInfoSpan = createElement("span", "forecast-data", highLow);

      let forecastConditionSpan = createElement(
        "span",
        "forecast-data",
        obj.condition
      );

      upcomingSpan.appendChild(conditionSymbolSpan);
      upcomingSpan.appendChild(forecastInfoSpan);
      upcomingSpan.appendChild(forecastConditionSpan);

      foreCastInfo.appendChild(upcomingSpan);
    });

    upcomingDiv.appendChild(foreCastInfo);
  }
}

attachEvents();
