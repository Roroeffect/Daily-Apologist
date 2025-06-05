const faqItems = [
  {
    question: "What is the Trinity?",
    answer: "The Trinity is one God in three persons: Father, Son, and Holy Spirit, co-equal and co-eternal."
  },
  {
    question: "Can we trust the Bible?",
    answer: "Yes, the Bible is historically reliable, archaeologically supported, and theologically coherent."
  },
  {
    question: "Why does God allow suffering?",
    answer: "God allows suffering to bring about greater good, build character, and display His glory. (Romans 8:28)"
  }
];

const faqContainer = document.getElementById("faq");

faqItems.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("mb-4", "border", "border-gray-300", "dark:border-gray-600", "rounded", "bg-white", "dark:bg-gray-800", "shadow");

  const header = document.createElement("button");
  header.classList.add("w-full", "text-left", "p-4", "font-semibold", "text-gray-900", "dark:text-gray-100");
  header.textContent = item.question;

  const body = document.createElement("div");
  body.classList.add("p-4", "border-t", "border-gray-300", "dark:border-gray-600", "hidden", "text-gray-800", "dark:text-gray-200");
  body.textContent = item.answer;

  header.addEventListener("click", () => {
    body.classList.toggle("hidden");
  });

  div.appendChild(header);
  div.appendChild(body);
  faqContainer.appendChild(div);
});

const darkToggle = document.getElementById("darkToggle");
const root = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
  darkToggle.textContent = "☀️";
}

darkToggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  const isDark = root.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  darkToggle.textContent = isDark ? "☀️" : "🌙";
});
