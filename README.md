# Blogify API Weather CLI

This repository now contains a simple Node.js command-line app that prints the current weather for a city.

## Usage

```bash
node index.js London
```

Expected output:

```bash
Weather in London: 15°C, Clear sky
```

## How it works

- Reads the city name from command-line arguments.
- Calls the free public weather endpoint at `wttr.in`.
- Parses the JSON response and prints a user-friendly summary.
- Handles missing cities and request failures with clear error messages.

## Git workflow you should use

```bash
git checkout -b feature/weather-cli
git add index.js package.json README.md
git commit -m "Implement weather CLI"
git push -u origin feature/weather-cli
```

Open a Pull Request from `feature/weather-cli` into `main` on GitHub.

## Submission Artifacts

- `COPILOT_PROCESS.md`: documented AI-assisted workflow.
- `VIDEO_SCRIPT.md`: ready-to-use 2-3 minute demo narration outline.
