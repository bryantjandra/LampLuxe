const testimonialsContainer = document.querySelector(
  ".js-testimonials-container"
);
async function fetchTestimonials() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=3"
    );
    const testimonials = await response.json();

    let testimonialFetch = "";
    testimonials.map((testimonial) => {
      testimonialFetch += `
               <div class="testimonial">
               <p class="testimonial-text">
               ${testimonial.body.substring(0, 85)}
               </p>
               <p class="testimonial-author">${testimonial.name}</p>
               </div>`;
      testimonialsContainer.innerHTML = testimonialFetch;
    });
  } catch (error) {
    console.error("Error fetching testimonials!");
  }
}
fetchTestimonials();
