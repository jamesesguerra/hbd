import clues from '~/data/2025/clues'
import ClueModal from './ClueModal'
import { fireConfetti } from '~/helpers/confetti-service';

const ScavengerHunt = () => {
  return (
   <section>
        <h2 class="text-3xl font-bold mb-3 mt-[75px]">mini website scavenger hunt</h2>
        <p>welcome birthday explorer 🕵🏻‍♀️</p>

        <br />

        <p>
          hidden across this website are five riddles -- each hiding a secret clue. when you think you've found an answer, look closely... some words or elements can be clicked to reveal the next clue.
          but i wont add make the cursor a pointer to indicate that it's clickable 😀. for example, click <b onClick={fireConfetti} data-modal-target="clue-5" data-modal-toggle="clue-5">me</b>
        </p>

        <br />

        <p>and once you've made it to the end, the final clue unlocks another bday gift</p>

        <br />

        <p>here's the first clue to start things off:</p>

        <br />

        <blockquote class="italic text-gray-500">
           "They watch, we fight, a deadly show. One girl sparks a rebel glow. Cameras roll, the crowd obeys — While power feasts on twisted games."
        </blockquote>
        <br />

        <p>good luck babsy, feel free to use <code onClick={fireConfetti} data-modal-target="clue-2" data-modal-toggle="clue-2">Ctrl + F</code> to find words on the page if you think it's a word</p>

        <ClueModal client:load index={4} isSample={true} />
        {clues.map((clue, index) => (
            <ClueModal client:load clue={clue} index={index} />
        ))}
   </section>
  )
}

export default ScavengerHunt