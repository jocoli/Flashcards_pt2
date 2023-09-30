import React, { useState } from "react";



const Card = () => {
    const [flip, setFlip] = useState(0);


    const questions = [
        {
            id: 1,
            questionText: 'What do dolphins use to get high?',
            choices: [
                'Cocaine', 'Marijuana', 'Pufferfish', 'None of the above'
            ],
            answer: 'Pufferfish!',

        },
        {
            id: 2,
            questionText: 'Which of these animals is the fastest?',
            choices: [
                'African Bush Elephant', 'Bull', 'Hippo', 'Brown Bear'
            ],
            answer: 'Brown Bear!',

        },
        {
            id: 3,
            questionText: 'Which of these whales is classified as a toothed whale?',
            choices: [
                'Humpback Whale', 'Sperm Whale', 'Minke Whale', 'Blue Whale'
            ],
            answer: 'Sperm Whale!',

        },
        {
            id: 4,
            questionText: 'Which animal kills the most humans annually?',
            choices: [
                'Snake', 'Mosquito', 'Crocodile', 'Shark'
            ],
            answer: 'Mosquito!',

        },
        {
            id: 5,
            questionText: 'Which bird has the largest wingspan?',
            choices: [
                'Stork', 'Swan', 'Albatross', 'Condor'
            ],
            answer: 'Albatross!',

        },
        {
            id: 6,
            questionText: 'Which of these animals lived the longest?',
            choices: [
                'Galapagos tortoise', 'Red sea urchin', 'Ocean quahog', 'Rougheye rockfish'
            ],
            answer: 'Ocean quahog!',

        },
        {
            id: 7,
            questionText: 'According to scientists, an attack by which animal is most likely to kill you?',
            choices: [
                'Hippo', 'Shark', 'Crocodile', 'Grizzley Bear'
            ],
            answer: 'Hippo!',

        },
        {
            id: 8,
            questionText: 'Rabies, which kills 59,000 people a year, is transmitted mostly by which animal?',
            choices: [
                'Raccoon', 'Bat', 'Dog', 'Rat'
            ],
            answer: 'Dog',

        },
        {
            id: 9,
            questionText: 'From 1979 to 2019, attacks by which animal has killed the most people in the United States and Canada?',
            choices: [
                'Cougar', 'Alligator', 'Brown Bear', 'Wolf'
            ],
            answer: 'Brown Bear!',

        },
        {
            id: 10,
            questionText: 'Which of these animals has the strongest jaw strength?',
            choices: [
                'Spotted hyena', 'Silverback gorilla', 'Saltwater crocodile', 'Polar Bear'
            ],
            answer: 'Saltwater crocodile!',

        }
    ]


    const [questionIndex, setQuestionIndex] = useState(0);
    const nextQuestionIndex = () => setQuestionIndex((questionIndex + 1) % 10);
    const previousQuestionIndex = () => setQuestionIndex(Math.abs((questionIndex - 1) % 10));
    const randomQuestionIndex = () => setQuestionIndex(Math.floor(Math.random()*10));


    //const questionDisplayIndex = 0;

    const questionDisplayed = questions[questionIndex];



    return(


        <div>

            <div 
                className= {`flashcard ${flip ? 'flip' : ''}`}
                onClick={()=> setFlip(!flip)} 
            
            >

                
                <div className= 'front-card'> 
                    <h2>{questionDisplayed.id}.   {questionDisplayed.questionText}</h2>
                    <ol type='a'>
                        {questionDisplayed.choices.map((choice, index)=>(
                            <li key={index}>{choice}</li>
                        ))}
                    </ol>
                </div>
                <div className='back-card'>
                    <h2>{questionDisplayed.answer}</h2>
                </div>
                
            </div>

        <button className='button' onClick={previousQuestionIndex}>Previous</button>
        <button className='button' onClick={nextQuestionIndex}>Next</button>
        <button className='button' onClick={randomQuestionIndex}>Random</button>


        </div>

    


    )
    
};

export default Card;
