#!/usr/bin/env node
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { headers: { 'User-Agent': 'node.js' } }, (response) => {
      let body = '';

      response.on('data', (chunk) => {
        body += chunk;
      });

      response.on('end', () => {
        if (response.statusCode < 200 || response.statusCode >= 300) {
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }

        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(new Error('Invalid JSON response from weather service'));
        }
      });
    });

    request.on('error', (error) => reject(error));
  });
}

function buildWeatherMessage(city, payload) {
  const current = payload && payload.current_condition && payload.current_condition[0];

  if (!current) {
    return null;
  }

  const temperature = current.temp_C;
  const description = current.weatherDesc && current.weatherDesc[0] ? current.weatherDesc[0].value : 'Unknown conditions';

  return `Weather in ${city}: ${temperature}°C, ${description}`;
}

async function main() {
  const city = process.argv.slice(2).join(' ').trim();

  if (!city) {
    console.error('Usage: node index.js <city name>');
    process.exit(1);
  }

  const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;

  try {
    const payload = await fetchJson(url);
    const message = buildWeatherMessage(city, payload);

    if (!message) {
      console.error(`Could not find weather data for "${city}".`);
      process.exit(1);
    }

    console.log(message);
  } catch (error) {
    console.error(`Failed to fetch weather for "${city}": ${error.message}`);
    process.exit(1);
  }
}

main();