import "../..//styles/styles.css";

import nobodyPoster from "../../assets/nobody-poster.jpg";
import trainToBusanPoster from "../../assets/train-to-busan-poster.jpg";
import asAboveSoBelowPoster from "../../assets/as-above-so-below-poster.jpg";
import fiftyFirstDates from "../../assets/50-first-dates.jpg";
import bratzBabyz from "../../assets/bratz-babyz.jpg";

import movieMoments from "~/data/movieMoments";

const posterDictionary = {
    "nobody": nobodyPoster,
    "train to busan": trainToBusanPoster,
    "as above so below": asAboveSoBelowPoster,
    "50 first dates": fiftyFirstDates,
    "bratz babyz": bratzBabyz
};

const MovieTimeline = () => {
    
  return (
    <div
        class="mb-10"
    >
        <h2 class="text-3xl font-bold mb-3">the past year in movies</h2>
        <p class="mb-10">I like to think of where we were in our relationship whenever we’d watch movies together. Spending time with you every night is special / memorable, why we got close agad</p>
        {movieMoments.map(moment => (
            <div
                class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-5 dark:border-gray-700"
                style={{
                    backgroundColor: "var(--color-inverted-primary)",
                    color: "var(--color-inverted-text)"
                }}
            >
                <time class="text-lg font-semibold">{moment.date}</time>
                <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                    {moment.movies.map(movie => (
                        <li>
                            <div class="items-start block px-3 py-7 sm:flex">
                                <img
                                    class="mb-3 sm:mb-0 me-5 object-cover"
                                    src={posterDictionary[movie.title].src} alt={`${movie.title} poster`}
                                    style={{ width: "64px !important" }}
                                />
                                <div>
                                    <div class="font-medium font-bold">{movie.title}</div>
                                    <div class="text-sm font-normal">{movie.message}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        ))}
    </div>
  )
}

export default MovieTimeline;