//
//
// 55902608
const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '55902608',
      i: 'tt0848228'
    }
  });
  console.log(response.data);
};

fetchData();
