import axios from 'axios';

const url = 'https://covid-19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    const modification = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modification;
  } catch (error) {}
};
