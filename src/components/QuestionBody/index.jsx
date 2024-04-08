import { Icon } from '../Icon/index';
import './style.css';

// export const QuestionBody = (props) => {
//   return (
//     <div className="question__body">
//       <p className="question__text">
//         {props.text}
//       </p>
//       <Icon type={props.iconType} />
//     </div>
//   );
// };



// export const QuestionBody = ({ text, iconType }) => {
//   return (
//     <div className="question__body">
//       <p className="question__text">
//         {text}
//       </p>
//       <Icon type={iconType} />
//     </div>
//   );
// };


//Dotazník s odpovědí
export const QuestionBody = ({text, iconType}) => {
  return (
    <div className="question__body">
      <p className="question__text">
        {text}
      </p>
      <Icon type={iconType} />
    </div>
  );
};