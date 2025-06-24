import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const cards = [
    {
      question: "What is this algorithm: Use two variables (left, right) that traverse the structure independently or in coordination, to avoid using nested loops.",
      answer: "two pointers"
    },
    {
      question: "What is this technique: A subset of elements is tracked using two pointers to solve problems involving contiguous sequences in arrays or strings.",
      answer: "sliding window"
    },
    {
      question: "What are these data structures: One uses LIFO (last in, first out), while the other uses FIFO (first in, first out).",
      answer: "stack vs queue"
    },
    {
      question: "What is this algorithm: It splits the array into halves, recursively sorts them, and merges the sorted halves.",
      answer: "merge sort"
    },
    {
      question: "What is this technique: Solves problems by breaking them into overlapping subproblems and storing results to avoid redundant computation.",
      answer: "dynamic programming"
    },
    {
      question: "What is this search method: Repeatedly divides a sorted array in half to find a target value in O(log n) time.",
      answer: "binary search"
    },
    {
      question: "What is this data structure: Maps keys to values using a hash function for fast lookup, insertion, and deletion.",
      answer: "hash table"
    },
    {
      question: "What is this concept: Expresses how the runtime of an algorithm grows with input size, using Big-O notation.",
      answer: "time complexity"
    },
    {
      question: "What is this concept: A function calls itself to solve smaller instances of a problem until a base case is reached.",
      answer: "recursion"
    },
    {
      question: "What is this algorithm strategy: Builds a solution piece by piece, always choosing the locally best option.",
      answer: "greedy algorithm"
    }
  ];
  
  

  const [flipped, setFlipped] = useState(false)
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [correct, setCorrect] = useState(null)
  const [showModal, setShowModal] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    if(input === cards[index].answer){
      setCorrect(true)
  }
    else { 
      setCorrect(false)
    }
    setShowModal(true)
  }

  const minusIndex = () => {
    setIndex(index - 1)
  }
  const plusIndex = () => {
    setIndex(index + 1)
  }

  const shuffleIndex = () => {
    setIndex(Math.floor(Math.random() * cards.length));
  }
  

  return (
    <div className='container'>
      <h1>Leetcode Flashcards</h1>
      <h2 className='test'>Let's test your algorithmic thinking!</h2>
      <h3>Number of cards: {cards.length}</h3>
      <Card flipped={flipped} setFlipped={setFlipped} question={cards[index].question} answer={cards[index].answer}/>
      <input type='text' value={input} placeholder='Your answer' onChange={handleInput}/>
      <button className='submit' disabled={flipped} onClick={handleSubmit}>Submit</button>

      {correct === true && showModal && (
        <div className="overlay">
          <div className="modal">
            <p style={{color: 'green'}}>Correct Answer!</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {correct === false && showModal && (
        <div className="overlay">
          <div className="modal">
            <p style={{color:'red'}}>Try again!</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      <div className='move'>
        <button className='prev' disabled={index === 0} onClick={minusIndex}>Previous</button>
        <button className='next' disabled={index === 9} onClick={plusIndex}>Next</button>
      </div>
      <button className='shuffle' onClick={shuffleIndex}>Shuffle</button>
    </div>

  )
}

export default App
