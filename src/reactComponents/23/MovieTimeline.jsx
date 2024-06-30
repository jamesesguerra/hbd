import "../..//styles/styles.css";

import nobodyPoster from "../../assets/nobody-poster.jpg";
import trainToBusanPoster from "../../assets/train-to-busan-poster.jpg";
import asAboveSoBelowPoster from "../../assets/as-above-so-below-poster.jpg";
import fiftyFirstDatesPoster from "../../assets/50-first-dates.jpg";
import notIntoYouPoster from "../../assets/not-into-you-poster.jpg";
import bratzBabyzPoster from "../../assets/bratz-babyz.jpg";
import hsmPoster from "../../assets/hsm-poster.jpg";
import sawPoster from "../../assets/saw-poster.jpg";
import lucaPoster from "../../assets/luca-poster.jpg";
import toAllTheBoysPoster from "../../assets/to-all-the-boys-poster.jpg";
import happilyNeverAfterPoster from "../../assets/happily-never-after-poster.jpg";
import hungerGamesPoster from "../../assets/hunger-games-poster.jpeg";
import boyAndTheHeronPoster from "../../assets/boy-and-the-heron-poster.jpeg";
import insideOutTwoPoster from "../../assets/inside-out-poster.png";

import movieMoments from "~/data/movieMoments";

const posterDictionary = {
    "nobody": nobodyPoster,
    "train to busan": trainToBusanPoster,
    "as above so below": asAboveSoBelowPoster,
    "50 first dates": fiftyFirstDatesPoster,
    "he's just not that into you": notIntoYouPoster,
    "bratz babyz": bratzBabyzPoster,
    "hsm the musical the series": hsmPoster,
    "saw": sawPoster,
    "luca": lucaPoster,
    "to all the boys": toAllTheBoysPoster,
    "happily n'ever after": happilyNeverAfterPoster,
    "the hunger games": hungerGamesPoster,
    "the boy and the heron": boyAndTheHeronPoster,
    "inside out 2": insideOutTwoPoster
};

const MovieTimeline = () => {
    
  return (
    <div
        class="mb-10"
    >
        <h2 class="text-3xl font-bold mb-3">my past yr with u in movies</h2>
        <p class="mb-10">I like to think of where we were in our relationship whenever we’d watch movies together. Spending time with you every night is special / memorable, why we got close agad</p>
        {movieMoments.map(moment => (
            <div
                class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-5 dark:border-gray-700"
                style={{
                    backgroundColor: "var(--color-inverted-primary)",
                    color: "var(--color-inverted-text)"
                }}
                key={moment.date}
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
                                    <div class="font-bold">{movie.title}</div>
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