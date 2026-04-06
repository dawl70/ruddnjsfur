# GEMINI.md

## Project Context
This project is a specialized East Asian Almanac (Manse-ryeok) called **Gyeongwon-ryeok (庚元曆)**. It implements a unique 360-day cycle based on the I Ching (64 hexagrams) and traditional Ganzhi (Sexagenary cycle) systems.

## Tech Stack & Architecture
- **No Frameworks**: The project uses pure Vanilla JS, HTML, and CSS. Avoid adding external dependencies unless explicitly requested.
- **Data-Driven UI**: The almanac grid is dynamically generated in `app.js` based on complex calculations of stems, branches, and hexagrams.
- **Styling**: Uses CSS Variables and Flex/Grid layouts for an "Excel-like" experience.

## Development Standards
- **Naming Conventions**: 
    - JavaScript variables and functions use `camelCase`.
    - CSS classes use `kebab-case`.
    - Traditional terms (Hanja/Korean) are used extensively in the code (e.g., `HEAVENLY_STEMS`, `JU_NAMES_HANJA`).
- **Code Style**:
    - Maintain the functional programming style used for Ganzhi calculations and hexagram filtering.
    - Ensure UI components remain responsive to the dynamic date changes.
- **Documentation**: All new logic related to calendar calculations should be documented with comments explaining the metaphysical basis if applicable.

## Verification Workflow
1. **Visual Consistency**: Any changes to `style.css` must preserve the grid alignment and the "Noto Serif" aesthetic.
2. **Calculation Accuracy**: When modifying `app.js`, verify that the Ganzhi and Hexagram rotations still align with the defined "Gyeongwon" epoch (12월 22일 동지 기준).
3. **Cross-browser Check**: Ensure the grid layout remains functional in modern browsers (Chrome, Firefox, Safari).
