
exports.handler = async () => {
  const APP_ID = process.env.ADZUNA_APP_ID;
  const APP_KEY = process.env.ADZUNA_APP_KEY;
  const url = `https://api.adzuna.com/v1/api/jobs/za/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=60`;

  const res = await fetch(url);
  const data = await res.json();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=900'   // CDN cache 15 min
    },
    body: JSON.stringify(data)
  };
};
