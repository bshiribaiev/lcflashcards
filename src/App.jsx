import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const cards = [
    {
      question: "Explain how two pointers work", 
      answer: "Use two variables (left, right) that traverse the structure independently or in coordination, to avoid using nested loops."
    },
    {
      question: "What is a sliding window?", 
      answer: "A technique where a subset of elements is tracked using two pointers to solve problems involving contiguous sequences in arrays or strings."
    },
    {
      question: "What is the difference between a stack and a queue?", 
      answer: "A stack uses LIFO (last in, first out), while a queue uses FIFO (first in, first out)."
    },
    {
      question: "How does merge sort work?", 
      answer: "Merge sort is a divide and conquer algorithm that splits the array into halves, recursively sorts them, and merges the sorted halves."
    },
    {
      question: "What is dynamic programming?", 
      answer: "A technique for solving problems by breaking them into overlapping subproblems and storing the results to avoid redundant computation."
    },
    {
      question: "How does binary search work?", 
      answer: "It repeatedly divides a sorted array in half to find a target value in O(log n) time."
    },
    {
      question: "What is a hash table?", 
      answer: "A data structure that maps keys to values using a hash function for fast lookup, insertion, and deletion."
    },
    {
      question: "What is time complexity?", 
      answer: "A way to express how the runtime of an algorithm grows with the size of the input, commonly using Big-O notation."
    },
    {
      question: "What is recursion?", 
      answer: "A function that calls itself to solve smaller instances of a problem until a base case is reached."
    },
    {
      question: "What does 'greedy algorithm' mean?", 
      answer: "An algorithm that builds up a solution piece by piece, always choosing the option that looks best at the moment."
    }
  ]

  const [index, setIndex] = useState(0)
  const updateIndex = () => {
    setIndex(Math.floor(Math.random() * cards.length));
  }

  return (
    <>
      <h1>Leetcode Flashcards</h1>
      <h2 className='test'>Let's test your algorithmic thinking!</h2>
      <h3>Number of cards: {cards.length}</h3>
      <Card question={cards[index].question} answer={cards[index].answer}/>
      <button onClick={updateIndex}>Next</button>
    </>
  )
}

export default App
