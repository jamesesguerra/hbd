import clues from '~/data/2025/clues'
import ClueModal from './ClueModal'

const ScavengerHunt = () => {

  const handleClick = async () => {
    const confetti = (await import('canvas-confetti')).default;
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
  }
  
  return (
   <section>
        <h2 class="text-3xl font-bold mb-3 mt-[75px]">mini website scavenger hunt</h2>
        <p>welcome birthday explorer 🕵🏻‍♀️</p>

        <br />

        <p>
          hidden across this website are five riddles -- each hiding a secret clue. when you think you've found an answer, look closely... some words or elements can be clicked to reveal the next clue.
          but i wont add make the cursor a pointer to indicate that it's clickable 😀. for example, click <b onClick={handleClick} data-modal-target="clue-5" data-modal-toggle="clue-5">me</b>
        </p>

        <br />

        <p>and once you've made it to the end, the final clue unlocks another bday gift</p>

        <br />

        <p>here's the first clue to start things off:</p>

        <br />

        <blockquote class="italic text-gray-500">
           "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?"
        </blockquote>
        <br />

        <p>good luck babsy, feel free to use <code>Ctrl + F</code> to find words on the page if you think it's a word</p>

        <ClueModal client:load index={4} isSample={true} />
        {clues.map((clue, index) => (
            <ClueModal client:load clue={clue} index={index} />
        ))}
   </section>
  )
}

export default ScavengerHunt