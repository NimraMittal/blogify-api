# Copilot Collaboration Log

This document captures the collaborative process used to build the weather CLI assignment with GitHub Copilot Chat.

## Objective

Build a Node.js command-line application that:

- accepts a city from command-line arguments,
- fetches weather data asynchronously from a free public API,
- prints a user-friendly summary,
- handles errors gracefully.

Target example output:

```text
Weather in London: 15°C, Clear sky
```

## Copilot-Assisted Workflow

1. Requirement breakdown
   - Defined core requirements from assignment brief.
   - Identified a no-key public API candidate (`wttr.in`).

2. Project architecture decisions
   - Keep implementation in repository root (`index.js`) to satisfy assignment scope.
   - Use Node built-in `https` module to avoid extra dependencies.
   - Keep output format stable and simple.

3. Implementation with Copilot support
   - Created async helper (`fetchJson`) for HTTP requests.
   - Added response parsing and weather summary formatter.
   - Added argument parsing (`process.argv`) for city input.

4. Error handling pass
   - Missing input: prints usage and exits with status code `1`.
   - API/network errors: prints clear message and exits with status code `1`.
   - Unexpected payload: prints city-not-found style error.

5. Documentation pass
   - Updated `README.md` with usage, expected output, and workflow instructions.
   - Added this process log as evidence of AI collaboration.

## Prompts/Requests Used (Summary)

- Build a weather CLI in Node.js with command-line city input.
- Use a free public weather API.
- Make output user-friendly and add robust error handling.
- Keep assignment implementation in the main project folder.
- Add submission support docs for workflow and demo video.

## Final Solution Notes

- API endpoint: `https://wttr.in/<CITY>?format=j1`
- Main file: `index.js`
- Run command: `node index.js London`

## Reflection

Copilot accelerated setup, code structure, and iteration, while final decisions (API choice, output format, branch strategy, and submission artifacts) were validated manually to match the assignment requirements.
