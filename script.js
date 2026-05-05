/* ==================== NAP CALCULATOR ==================== */

function calculateNapTimes() {
  const wakeupInput = document.getElementById("wakeup-time").value;

  if (!wakeupInput) {
    alert("Please enter a wake-up time");
    return;
  }

  const [hours, minutes] = wakeupInput.split(":").map(Number);
  const wakeupTime = new Date();
  wakeupTime.setHours(hours, minutes, 0);

  // Calculate sleep windows (working backwards from wake time)
  // Each 90-minute cycle takes ~90 minutes
  // We calculate several options

  const sleepOptions = [];

  // Option 1: 20-minute nap (light sleep, not ideal but quick)
  const twentyMin = new Date(wakeupTime.getTime() - 20 * 60000);
  sleepOptions.push({
    duration: 20,
    startTime: formatTime(twentyMin),
    description: "Quick alertness boost (not ideal)",
    color: "#4a6fa5",
  });

  // Option 2: 90-minute cycle (ideal)
  const ninetyMin = new Date(wakeupTime.getTime() - 90 * 60000);
  sleepOptions.push({
    duration: 90,
    startTime: formatTime(ninetyMin),
    description: "Perfect cycle - wake during REM",
    color: "#00d4ff",
    ideal: true,
  });

  // Option 3: Another 90-minute cycle earlier
  const oneEightyMin = new Date(wakeupTime.getTime() - 180 * 60000);
  sleepOptions.push({
    duration: 180,
    startTime: formatTime(oneEightyMin),
    description: "Two full cycles (emergency recovery)",
    color: "#00ff88",
  });

  // Option 4: 110 minutes (might catch deep sleep) - avoid
  const oneTenMin = new Date(wakeupTime.getTime() - 110 * 60000);
  sleepOptions.push({
    duration: 110,
    startTime: formatTime(oneTenMin),
    description: "Likely to wake in deep sleep (AVOID)",
    color: "#ff0000",
    avoid: true,
  });

  // Display results
  displayNapResults(sleepOptions, wakeupInput);
}

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function displayNapResults(options, wakeupTime) {
  const resultsDiv = document.getElementById("nap-results");

  let html = `
        <div class="nap-results-header">
            <h3>💤 Sleep Windows (Wake at ${wakeupTime})</h3>
            <p class="results-info">Fall asleep at these times to wake refreshed:</p>
        </div>
        <div class="nap-options">
    `;

  options.forEach((option) => {
    const emphasis = option.ideal
      ? " ideal-option"
      : option.avoid
        ? " avoid-option"
        : "";
    const badge = option.ideal ? "✅ BEST" : option.avoid ? "❌ AVOID" : "";

    html += `
            <div class="nap-option${emphasis}">
                <div class="nap-option-header">
                    <div class="nap-color-marker" style="background: ${option.color};"></div>
                    <div>
                        <strong>Fall asleep: ${option.startTime}</strong>
                        <span class="duration">${option.duration} minutes</span>
                        ${badge ? `<span class="nap-badge">${badge}</span>` : ""}
                    </div>
                </div>
                <p>${option.description}</p>
            </div>
        `;
  });

  html += `
        </div>
        <div class="nap-science-note">
            <p><strong>💡 Pro Tip:</strong> Set a phone alarm for when you need to wake. Your body might not naturally cycle out of deep sleep on schedule.</p>
        </div>
    `;

  resultsDiv.innerHTML = html;
}

/* ==================== ZOMBIE QUIZ ==================== */

function calculateZombieScore() {
  const form = document.getElementById("zombie-form");
  let totalScore = 0;
  let questions = [];

  // Collect responses
  for (let i = 1; i <= 6; i++) {
    const response = document.querySelector(`input[name="q${i}"]:checked`);
    if (!response) {
      alert(`Please answer question ${i}`);
      return;
    }
    questions.push({
      q: i,
      value: parseInt(response.value),
    });
    totalScore += parseInt(response.value);
  }

  // Determine sleep debt level
  const q5Value = parseInt(
    document.querySelector('input[name="q5"]:checked').value,
  );
  const q6Value = parseInt(
    document.querySelector('input[name="q6"]:checked').value,
  );
  const sleepDebtScore =
    (totalScore - q5Value - q6Value) * 5 + q5Value + q6Value;

  displayZombieResults(sleepDebtScore, questions);
}

function displayZombieResults(score, responses) {
  const resultsDiv = document.getElementById("zombie-results");

  let level, levelColor, statusEmoji, message, action;

  if (score <= 6) {
    level = "Well-Rested";
    levelColor = "#00ff88";
    statusEmoji = "✨";
    message =
      "You're in the top 10% of college students. Your sleep is exceptional. Keep it up.";
    action = "Maintain your sleep schedule and keep those habits locked in.";
  } else if (score <= 10) {
    level = "Functional";
    levelColor = "#00d4ff";
    statusEmoji = "😌";
    message =
      "You're getting by, but you're leaving performance on the table. Minor tweaks would help significantly.";
    action =
      "Identify 1-2 saboteurs (caffeine after 2 PM? Blue light before bed?) and fix them.";
  } else if (score <= 14) {
    level = "Chronically Tired";
    levelColor = "#ffaa00";
    statusEmoji = "😴";
    message =
      "Your sleep debt is significant. This is impacting your grades, mood, and social life (you just don't realize it yet).";
    action =
      "Start the 7-Day Sleep Reset Challenge. Commit to ONE major change (earlier bedtime or no screens before bed).";
  } else if (score <= 20) {
    level = "Legally a Zombie";
    levelColor = "#ff6b00";
    statusEmoji = "🧟";
    message =
      "You're running on fumes. This is not sustainable. Your cognitive function is severely compromised.";
    action =
      "PRIORITY: Sleep 8 hours tonight and tomorrow. Fix your environment (temperature, light, noise). Talk to an RA or counselor if stress is the blocker.";
  } else {
    level = "Critical: Brain Shutdown Mode";
    levelColor = "#ff0000";
    statusEmoji = "💀";
    message =
      "You're in dangerous territory. Sleep deprivation at this level impairs judgment like alcohol. You shouldn't be driving or making major decisions.";
    action =
      "IMMEDIATE: Get medical advice. See your campus health center. This level of sleep debt increases injury risk, depression, and serious health issues.";
  }

  const debtStatus = getDebtStatus();

  let html = `
        <div class="zombie-results-container">
            <div class="zombie-status" style="border-left: 6px solid ${levelColor};">
                <h3>${statusEmoji} ${level}</h3>
                <p class="zombie-score">Sleep Sleepiness Score: ${score}/24</p>
            </div>
            
            <div class="zombie-message" style="border-color: ${levelColor};">
                <p>${message}</p>
            </div>

            <div class="zombie-action" style="background: rgba(255, 107, 0, 0.1); border-left: 4px solid #ff6b00;">
                <strong>🎯 Your Next Move:</strong>
                <p>${action}</p>
            </div>

            <div class="zombie-breakdown">
                <h4>Your Sleep Debt Estimate</h4>
                ${debtStatus}
            </div>

            <div class="zombie-recovery">
                <h4>💪 Recovery Timeline (From Current Level)</h4>
                ${getRecoveryTimeline(level)}
            </div>
        </div>
    `;

  resultsDiv.innerHTML = html;
}

function getDebtStatus() {
  const q5 = parseInt(document.querySelector('input[name="q5"]:checked').value);
  const q6 = parseInt(document.querySelector('input[name="q6"]:checked').value);

  let debtHours = q5;
  let nightsOfBadSleep = 0;

  if (q6 === 0) nightsOfBadSleep = 1;
  else if (q6 === 2) nightsOfBadSleep = 5;
  else if (q6 === 3) nightsOfBadSleep = 12;
  else if (q6 === 4) nightsOfBadSleep = 20;

  const estimatedDebt = debtHours + nightsOfBadSleep * 2;

  return `
        <div class="debt-estimate">
            <p><strong>Current debt:</strong> ~${estimatedDebt} hours over the past week/month</p>
            <p><strong>Nights with <6 hours:</strong> ${nightsOfBadSleep} nights</p>
        </div>
    `;
}

function getRecoveryTimeline(level) {
  const timelines = {
    "Well-Rested": "<p>You're already recovered. Maintain this.</p>",
    Functional:
      "<p>1-2 nights of 8+ hour sleep should reset you completely.</p>",
    "Chronically Tired":
      "<p>3-5 nights of consistent 8-9 hour sleep, plus environmental fixes (cooler room, less caffeine, less blue light).</p>",
    "Legally a Zombie":
      "<p>5-7 nights minimum. If you don't recover after a week, see a healthcare provider.</p>",
    "Critical: Brain Shutdown Mode":
      '<p>1-2 weeks of aggressive sleep recovery + professional guidance. This is not a typical "all-nighter bounce-back" situation.</p>',
  };

  return timelines[level] || timelines["Legally a Zombie"];
}

/* ==================== UTILITY FUNCTIONS ==================== */

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function exportChallenge() {
  const challengeCards = document.querySelectorAll(".challenge-card");
  let output = "SLEEP HACKER - 7-DAY CHALLENGE RESULTS\n";
  output += "=====================================\n\n";

  let completedDays = 0;
  let totalNotes = "";

  challengeCards.forEach((card, index) => {
    const checkbox = card.querySelector('input[type="checkbox"]');
    const textarea = card.querySelector("textarea");
    const dayBadge = card.querySelector(".day-badge").textContent;

    if (checkbox.checked) {
      completedDays++;
    }

    if (textarea.value.trim()) {
      totalNotes += `${dayBadge}\n${textarea.value}\n\n`;
    }
  });

  output += `Days Completed: ${completedDays}/7\n\n`;
  output += "NOTES:\n";
  output += totalNotes;
  output += "\nExported: " + new Date().toLocaleString() + "\n";

  // Create downloadable file
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(output),
  );
  element.setAttribute("download", "sleephacker-7day-results.txt");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  alert(
    `✅ Challenge results exported! You completed ${completedDays}/7 days.`,
  );
}

/* ==================== PAGE LOAD INITIALIZATION ==================== */

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Add visual feedback to challenge checkboxes
  document.querySelectorAll(".challenge-check").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const card = this.closest(".challenge-card");
      if (this.checked) {
        card.style.borderColor = "#00ff88";
        card.style.boxShadow = "0 0 20px rgba(0, 255, 136, 0.3)";
      } else {
        card.style.borderColor = "#00ff88";
        card.style.boxShadow = "none";
      }
    });
  });
});

/* ==================== INTERACTIVE ENHANCEMENTS ==================== */

// Add glow effect to hover elements
document.addEventListener("mouseover", function (e) {
  if (
    e.target.closest(".pillar-card") ||
    e.target.closest(".challenge-card") ||
    e.target.closest(".process-card")
  ) {
    e.target.closest(
      ".pillar-card, .challenge-card, .process-card",
    ).style.transition = "all 0.3s ease";
  }
});
