export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '52ddaaeabemsh521f26667b8dd59p1f8819jsn53f2fcdfe0fb',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
const response = await fetch(url, options);
const data = await response.json();

return data;
}