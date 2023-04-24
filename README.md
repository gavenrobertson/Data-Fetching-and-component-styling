[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10188754&assignment_repo_type=AssignmentRepo)

## Weather API Application

## Fetch forecast data for a user-specified city

Note that there are several different API methods that might work well here, though some of them require a paid subscription to the OpenWeather API, though, since you're a student, [OpenWeather will upgrade your API key for free](https://openweathermap.org/price#offers), giving you access to some of the API methods you'd normally have to pay for.  Here are a few of the API methods that might work well for this assignment:
  * [The 16-day daily forecast](https://openweathermap.org/forecast16) (requires an upgraded API key)
  * [The 5 day/3 hour forecast](https://openweathermap.org/forecast5)
  * [The one call API](https://openweathermap.org/api/one-call-api)
    * Note that this API might work best in conjunction with the [geocoding API](https://openweathermap.org/api/geocoding-api) to allow queries by city name

Whatever API method(s) you use, make sure you fetch several periods of forecast data (e.g. several days or several 3-hour periods).  Then, once you receive a response from the API, parse the relevant data out of the response body, and use it to render forecast cards in your app, each of which should represent the forecast for a specific period from the data.  Each card may display as much of the weather data as you want, but at a minimum, it should display the following information:
  * The date/time
  * The high and low temperatures
  * The probability of precipitation
  * The short description of the day's weather
  * The appropriate icon for the day's weather.  You can read more about how to get an OpenWeather icon URL from the forecast data here: https://openweathermap.org/weather-conditions.

> Note: The OpenWeather API works best when you use a specific format for the city name, e.g. "Corvallis,OR,US".  To make it easier on you, you can assume that users will type city names in this format.

## Apply professional-grade styling to your app

Use Emotion to make your app look as good as you can.  It's up to you to come up with an application design, but really try to make your app look like a real, production weather app.  Remember, the assignments in this course are graded based on effort, not correctness, so you won't be penalized if your app doesn't win design awards, but treat this as an opportunity to practice using CSS to build an app that looks really good.
