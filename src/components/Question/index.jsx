import { QuestionBody } from '../QuestionBody/index';
import { Option } from '../Option/index';
import './style.css';
import { useState } from 'react';

// export const Question = (props) => {
//   return (
//     <div className="question">
//       <QuestionBody 
//         iconType="symbolQuestion" 
//         text={props.text}
//       />
//       <div className="question__options">
//         <Option type="smileyStrongYes" text="Souhlasím"/>
//         <Option type="smileyYes" text="Spíše souhlasím"/>
//         <Option type="smileyNeutral" text="Nevím"/>
//         <Option type="smileyNo" text="Spíše nesouhlasím"/>
//         <Option type="smileyStrongNo" text="Nesouhlasím"/>
//       </div>
//     </div>
//   );
// };



// export const Question = ({ text }) => {
//   return (
//     <div className="question">
//       <QuestionBody 
//         iconType="symbolQuestion" 
//         text={text}
//       />
//       <div className="question__options">
//         <Option type="smileyStrongYes" text="Souhlasím"/>
//         <Option type="smileyYes" text="Spíše souhlasím"/>
//         <Option type="smileyNeutral" text="Nevím"/>
//         <Option type="smileyNo" text="Spíše nesouhlasím"/>
//         <Option type="smileyStrongNo" text="Nesouhlasím"/>
//       </div>
//     </div>
//   );
// };


//Dotazník s odpovědí
export const Question = ({text}) => {
  const [answer, setAnswered] = useState("symbolQuestion")

  const handleSelect = (iconType) => {
    setAnswered(iconType)
  }

  return (
    <div className="question">
      <QuestionBody 
        iconType={answer}
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím" onSelected={handleSelect}/>
        <Option type="smileyYes" text="Spíše souhlasím" onSelected={handleSelect}/>
        <Option type="smileyNeutral" text="Nevím" onSelected={handleSelect}/>
        <Option type="smileyNo" text="Spíše nesouhlasím" onSelected={handleSelect}/>
        <Option type="smileyStrongNo" text="Nesouhlasím" onSelected={handleSelect}/>
      </div>
    </div>
  );
};