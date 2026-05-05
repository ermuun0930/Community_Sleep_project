# 💤 SleepHacker: The Ultimate College Sleep Optimization Website

## Overview

**SleepHacker** is a modern, science-backed website designed to help college students optimize their sleep hygiene and understand the neurobiology of sleep. The site treats sleep as a high-ROI performance tool rather than a chore, speaking directly to high-achieving students who care about their GPA, social life, and mental health.

## Project Features

### 🎨 Design Aesthetic

- **Dark Mode Optimized**: Deep midnight blues, neon cyan, neon green, and magenta accents
- **Sleek & Modern**: Clean sans-serif typography, smooth animations, and glowing effects
- **Responsive**: Fully mobile-friendly for studying on any device
- **Science-Backed Visual Language**: SVG diagrams, charts, and interactive elements

### 📄 Website Pages

#### 1. **Home Page** (`index.html`)

- **Hero Section**: Bold headline and value proposition
- **3 Pillars of Sleep**:
  - Academic Performance (Memory Consolidation)
  - Social Life & Emotional EQ (Emotional Regulation)
  - Quality of Life (The Glymphatic System)
- **7-Day Sleep Reset Challenge**: Interactive tracking with daily challenges
- **Responsive Grid Layout**: Beautiful card-based design

#### 2. **The Science** (`science.html`)

- **Two-Process Model Explained**:
  - The Sleep Clock (Circadian Rhythm) with visual diagram
  - The Pressure Gauge (Homeostatic Sleep Drive/Adenosine)
- **Memory Consolidation by Major**:
  - Declarative Memory (NREM Sleep) - for humanities/biology majors
  - Procedural Memory (REM Sleep) - for STEM majors
- **Sleep Stages Visualization**: Interactive chart showing 90-minute sleep cycles
- **Phase Delay Validation**: Explains why college students' natural sleep time is later

#### 3. **The Saboteurs** (`saboteurs.html`)

- **☕ The Caffeine Trap**: How caffeine blocks adenosine receptors
  - Interactive visualization of caffeine half-life
  - Why "energy drinks" are particularly dangerous
  - Science-backed alternative strategies
- **💻 ALAN (Artificial Light At Night)**: Blue light suppression of melatonin
  - Why dorm LEDs and laptop screens ruin sleep
  - Melatonin suppression diagrams
  - Evidence-based fixes (blue light glasses, blackout curtains)
- **🌡️ Temperature**: Why room temperature is critical
  - Optimal sleep temperature (65-68°F)
  - Why dorm rooms are typically too hot
  - Thermoregulation strategies

#### 4. **Interactive Tools** (`tools.html`)

- **⏰ 90-Minute Nap Calculator**:
  - Input wake-up time
  - Calculate ideal sleep windows based on sleep cycles
  - Explains why waking at the wrong time causes grogginess
  - Includes BRAC (Basic Rest-Activity Cycle) science
- **🧟 "Are You Legally a Zombie?" Quiz**:
  - Simplified MSLT (Multiple Sleep Latency Test)
  - Calculates sleep debt level
  - Provides personalized recovery timeline
  - Non-judgmental assessment with science-backed messaging
- **Sleep Debt Breakdown**: Visual explanation of cumulative sleep debt and recovery timelines

### 🎯 Interactive Elements

- **Challenge Tracker**: Check off daily challenges and add notes
- **Export Challenge Results**: Download your 7-day progress as a text file
- **Nap Calculator**: Real-time calculation of optimal sleep windows
- **Sleep Quality Quiz**: Interactive self-assessment with personalized results
- **Responsive Forms**: Input fields for time and quiz responses

## Technical Stack

- **HTML5**: Semantic structure, modern markup
- **CSS3**: Advanced layout with flexbox and grid, animations, gradients
- **Vanilla JavaScript**: No dependencies—pure JS for calculators and interactivity
- **SVG Graphics**: Custom diagrams and visualizations (brain icon, circadian rhythms, etc.)

## File Structure

```
Community_Sleep_Project/
├── index.html          # Home page with hero and 3 pillars
├── science.html        # Sleep science and Two-Process Model
├── saboteurs.html      # Caffeine, ALAN, and Temperature explanations
├── tools.html          # Interactive calculator and quiz
├── styles.css          # All styling (dark mode theme)
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## How to Use

### 1. **View the Website**

Open any HTML file in your browser:

```
Open index.html in your default browser
or
File → Open → Select index.html
```

No server required—this is a fully static website.

### 2. **Interact with Tools**

- **Nap Calculator**: Enter your wake-up time on the Tools page, click "Calculate"
- **Zombie Quiz**: Answer all 6 questions and click "See Your Results"
- **Challenge Tracker**: Check boxes for each day's completion and add notes

- Each page is self-contained
- Share individual links to specific science pages
- Use the 7-Day Challenge to create accountability groups

## Key Science References

This website is backed by peer-reviewed research in sleep neurobiology:

- **Circadian Rhythm Research**: Suprachiasmatic nucleus (SCN) and melatonin production
- **Homeostatic Sleep Drive**: Adenosine accumulation and pressure regulation
- **Memory Consolidation**: Slow-wave sleep (N3) for declarative memory, REM for procedural memory
- **Sleep Architecture**: 90-minute Basic Rest-Activity Cycle (BRAC)
- **Light at Night (ALAN)**: Blue light (470nm) suppression of melatonin
- **Caffeine Pharmacology**: Adenosine receptor antagonism and half-life (5-6 hours)
- **Adolescent Phase Delay**: Circadian rhythm shift in ages 13-25
- **Glymphatic System**: Cerebrospinal fluid clearance of metabolic waste during sleep

## Customization Options

### Change Color Scheme

Edit CSS variables in `styles.css`:

```css
:root {
  --neon-cyan: #00d4ff;
  --neon-green: #00ff88;
  --neon-magenta: #ff00ff;
  /* ... other colors ... */
}
```

### Add More Content

- Add new pages by creating new `.html` files and linking them in the navbar
- Use the same card structure and styling for consistency
- JavaScript will automatically handle navigation

### Modify the Challenge

Edit `index.html` to change the 7-day challenges and add custom tracking fields.

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

The site uses CSS Grid, Flexbox, and modern CSS (no IE support).

## Performance

- Zero external dependencies
- All styling is inline CSS (no external CDN required)
- SVG graphics are optimized and scalable
- Lightweight JavaScript (< 10KB)
- Fast load times even on slow networks

## Future Enhancement Ideas

- [ ] Dark/Light mode toggle
- [ ] Local storage for challenge progress (so progress persists across sessions)
- [ ] Backend integration for user accounts
- [ ] Community leaderboard (% improvement in sleep)
- [ ] Email reminders during the 7-day challenge
- [ ] Video explanations of key concepts
- [ ] Sleep tracking integration (Apple Health, Google Fit)
- [ ] Personalized recommendations based on quiz results
- [ ] Academic calendar integration (heightened focus during exams)

## Disclaimer

This website provides educational information about sleep science and neurobiology. It is not a substitute for professional medical advice. For sleep disorders, insomnia, or other medical concerns, consult a healthcare provider or sleep specialist. Campus health centers can provide additional resources.

## Credits

Built for the "Community Sleep Project" as a science communication effort to help college students understand and optimize their sleep. Created with evidence-based sleep research and a passion for helping high-achieving students unlock their full potential.

---

**Made by sleep scientists and neurotransmitter nerds. 💤**

Questions or improvements? Sleep is important—let's make this better.
