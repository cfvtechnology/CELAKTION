import KeenSlider from "keen-slider";
if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        const keenSliderActive = document.getElementById("keen-slider-active");
        const keenSliderCount = document.getElementById("keen-slider-count");

        const keenSlider = new KeenSlider("#keen-slider", {
            loop: true,
            defaultAnimation: {
                duration: 750,
            },
            slides: {
                origin: "center",
                perView: 1,
                spacing: 16,
            },
            breakpoints: {
                "(min-width: 640px)": {
                    slides: {
                        origin: "center",
                        perView: 1.5,
                        spacing: 16,
                    },
                },
                "(min-width: 768px)": {
                    slides: {
                        origin: "center",
                        perView: 1.75,
                        spacing: 16,
                    },
                },
                "(min-width: 1024px)": {
                    slides: {
                        origin: "center",
                        perView: 3,
                        spacing: 16,
                    },
                },
            },
            created(slider) {
                updateActiveSlide(slider);
            },
            slideChanged(slider) {
                updateActiveSlide(slider);
            },
        });

        function updateActiveSlide(slider) {
            slider.slides.forEach((slide) => {
                const blockquote = slide.querySelector("blockquote");
                if (blockquote) {
                    blockquote.classList.add(
                        "bg-gray-50",
                        "text-gray-900",
                        "opacity-40",
                    );
                    blockquote.classList.remove(
                        "bg-yellow-600",
                        "text-white",
                        "opacity-100",
                    );
                }
            });

            const activeSlide = slider.slides[slider.track.details.rel];
            const activeBlockquote = activeSlide.querySelector("blockquote");
            if (activeBlockquote) {
                activeBlockquote.classList.remove(
                    "bg-gray-50",
                    "text-gray-900",
                    "opacity-40",
                );
                activeBlockquote.classList.add(
                    "bg-yellow-600",
                    "text-white",
                    "opacity-100",
                );
            }

            keenSliderActive.innerText = slider.track.details.rel + 1;
            keenSliderCount.innerText = slider.slides.length;
        }

        const keenSliderPrevious = document.getElementById("keen-slider-previous");
        const keenSliderNext = document.getElementById("keen-slider-next");

        keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
        keenSliderNext.addEventListener("click", () => keenSlider.next());
    });
}
