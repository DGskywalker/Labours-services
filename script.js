document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
  
      question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  });
document.querySelectorAll(".faq-question").forEach((button) => {
     button.addEventListener("click", () => {
        const faqItem = button.parentNode;
        const answer = faqItem.querySelector(".faq-answer");
        const icon = button.querySelector(".toggle-icon");

        if (faqItem.classList.contains("active")) {
            answer.style.display = "none";
            faqItem.classList.remove("active");
            icon.textContent = "+";
        } else {
            document.querySelectorAll(".faq-answer").forEach((ans) => ans.style.display = "none");
            document.querySelectorAll(".faq-item").forEach((item) => item.classList.remove("active"));
            document.querySelectorAll(".toggle-icon").forEach((i) => i.textContent = "+");

            answer.style.display = "block";
            faqItem.classList.add("active");
            icon.textContent = "-";
        }
    });
});
