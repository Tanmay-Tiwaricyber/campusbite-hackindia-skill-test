const menu = [
  [
    { time: "7:30–9:00 AM", title: "Breakfast", items: "Poha, banana, tea", icon: "☕", className: "breakfast" },
    { time: "12:30–2:00 PM", title: "Lunch", items: "Dal, rice, roti, seasonal sabzi", icon: "🍛", className: "lunch" },
    { time: "5:00–6:00 PM", title: "Evening snacks", items: "Veg sandwich, chai", icon: "🥪", className: "snacks" },
    { time: "7:30–9:00 PM", title: "Dinner", items: "Paneer curry, roti, salad", icon: "🌙", className: "dinner" }
  ],
  [
    { time: "7:30–9:00 AM", title: "Breakfast", items: "Aloo paratha, curd, tea", icon: "☕", className: "breakfast" },
    { time: "12:30–2:00 PM", title: "Lunch", items: "Rajma, rice, roti, salad", icon: "🍛", className: "lunch" },
    { time: "5:00–6:00 PM", title: "Evening snacks", items: "Samosa, chai", icon: "🥪", className: "snacks" },
    { time: "7:30–9:00 PM", title: "Dinner", items: "Mix veg, dal, roti", icon: "🌙", className: "dinner" }
  ],
  [
    { time: "7:30–9:00 AM", title: "Breakfast", items: "Idli, sambar, chutney", icon: "☕", className: "breakfast" },
    { time: "12:30–2:00 PM", title: "Lunch", items: "Chole, rice, roti, salad", icon: "🍛", className: "lunch" },
    { time: "5:00–6:00 PM", title: "Evening snacks", items: "Biscuits, tea", icon: "🥪", className: "snacks" },
    { time: "7:30–9:00 PM", title: "Dinner", items: "Aloo gobi, dal, roti", icon: "🌙", className: "dinner" }
  ],
  [
    { time: "7:30–9:00 AM", title: "Breakfast", items: "Veg upma, fruit, tea", icon: "☕", className: "breakfast" },
    { time: "12:30–2:00 PM", title: "Lunch", items: "Kadhi, rice, roti, sabzi", icon: "🍛", className: "lunch" },
    { time: "5:00–6:00 PM", title: "Evening snacks", items: "Bread pakora, chai", icon: "🥪", className: "snacks" },
    { time: "7:30–9:00 PM", title: "Dinner", items: "Soyabean curry, roti, salad", icon: "🌙", className: "dinner" }
  ],
  [
    { time: "7:30–9:00 AM", title: "Breakfast", items: "Bread, butter, jam, milk", icon: "☕", className: "breakfast" },
    { time: "12:30–2:00 PM", title: "Lunch", items: "Dal makhani, rice, roti", icon: "🍛", className: "lunch" },
    { time: "5:00–6:00 PM", title: "Evening snacks", items: "Pasta, chai", icon: "🥪", className: "snacks" },
    { time: "7:30–9:00 PM", title: "Dinner", items: "Kofta curry, roti, salad", icon: "🌙", className: "dinner" }
  ],
  [
    { time: "8:00–9:30 AM", title: "Breakfast", items: "Chole bhature, tea", icon: "☕", className: "breakfast" },
    { time: "1:00–2:30 PM", title: "Lunch", items: "Veg pulao, raita, salad", icon: "🍛", className: "lunch" },
    { time: "5:00–6:00 PM", title: "Evening snacks", items: "Pakora, chai", icon: "🥪", className: "snacks" },
    { time: "7:30–9:00 PM", title: "Dinner", items: "Dal tadka, jeera rice, roti", icon: "🌙", className: "dinner" }
  ],
  [
    { time: "8:00–9:30 AM", title: "Breakfast", items: "Dosa, sambar, chutney", icon: "☕", className: "breakfast" },
    { time: "1:00–2:30 PM", title: "Lunch", items: "Veg biryani, raita", icon: "🍛", className: "lunch" },
    { time: "5:00–6:00 PM", title: "Evening snacks", items: "Cake, tea", icon: "🥪", className: "snacks" },
    { time: "7:30–9:00 PM", title: "Dinner", items: "Dal, roti, seasonal sabzi", icon: "🌙", className: "dinner" }
  ]
];

const dayPicker = document.querySelector("#day-picker");
const mealGrid = document.querySelector("#meal-grid");
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderMenu(dayIndex) {
  const dayMeals = menu[Number(dayIndex)];
  mealGrid.innerHTML = dayMeals.map(meal => `
    <article class="meal-card">
      <div class="meal-icon ${meal.className}" aria-hidden="true">${meal.icon}</div>
      <p class="meal-time">${meal.time}</p>
      <h3>${meal.title}</h3>
      <p class="meal-items">${meal.items}</p>
    </article>
  `).join("");

  const dinner = dayMeals.find(meal => meal.title === "Dinner");
  document.querySelector("#special-title").textContent = dinner.items.split(",")[0] + " tonight.";
  document.querySelector("#special-description").textContent = `On the ${dayPicker.options[dayPicker.selectedIndex].text} menu. Check the full lineup below.`;
}

function getShareText() {
  const day = dayPicker.options[dayPicker.selectedIndex].text;
  return `CampusBite — ${day}'s hostel menu\nCheck the planned meals on this page: ${window.location.href}`;
}

async function shareMenu() {
  const shareData = { title: "CampusBite — Hostel Menu", text: getShareText(), url: window.location.href };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      if (error.name !== "AbortError") showToast("Sharing wasn't available. Copy the page link from your browser.");
    }
  } else if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(getShareText());
      showToast("Menu link copied. Share it with your hostel group!");
    } catch {
      showToast("Copy the page link from your browser's address bar.");
    }
  } else {
    showToast("Copy the page link from your browser's address bar.");
  }
}

dayPicker.addEventListener("change", event => renderMenu(event.target.value));
document.querySelector("#share-button").addEventListener("click", shareMenu);
document.querySelector("#share-button-bottom").addEventListener("click", shareMenu);
document.querySelector("#year").textContent = new Date().getFullYear();

// Preselect today's day. Menu content is sample data and should be verified locally.
const today = new Date().getDay();
const mondayFirstIndex = (today + 6) % 7;
dayPicker.value = String(mondayFirstIndex);
renderMenu(mondayFirstIndex);
