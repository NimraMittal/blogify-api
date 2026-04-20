# 2-3 Minute Demo Script

Use this as a speaking guide while recording your assignment video.

## 1. Intro (15-20s)

"This project is a Node.js weather CLI built with support from GitHub Copilot Chat. It accepts a city name, fetches weather data from a free public API, and prints a clean summary to the console."

## 2. Show Project Files (20-30s)

Point out:

- `index.js` - CLI logic, API call, response parsing, error handling.
- `package.json` - valid Node project metadata and start command.
- `README.md` - usage + workflow.
- `COPILOT_PROCESS.md` - documented AI collaboration process.

## 3. Live Run (40-60s)

Run:

```bash
node index.js London
```

Say:

"The app reads `London` from command-line arguments, calls the weather API asynchronously, parses JSON, and prints a user-friendly line like `Weather in London: 15°C, Clear sky`."

Then show an error case:

```bash
node index.js
```

Say:

"With missing input, it fails gracefully and prints a clear usage message."

## 4. Copilot Collaboration (30-40s)

"I used Copilot Chat to scaffold the CLI flow, refine async HTTP handling, and tighten error handling. I then validated structure and adapted everything to the assignment requirements in the root repository."

## 5. Git Workflow + PR (20-30s)

Say:

"I used a feature branch, committed the implementation, pushed it to GitHub, and opened a pull request targeting main."

If needed, show commands quickly:

```bash
git checkout -b weather-cli
git add .
git commit -m "Implement weather CLI"
git push -u origin weather-cli
```

## 6. Closing (10-15s)

"This satisfies all core requirements: command-line input, async API call, JSON parsing, user-friendly output, and clear error handling."
