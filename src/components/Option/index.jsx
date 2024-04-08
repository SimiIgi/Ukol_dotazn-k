import { Icon } from '../Icon/index';
import './style.css';

// export const Option = (props) => {
//   return (
//     <div className="option">
//       <Icon type={props.type} />
//       <div>{props.text}</div>
//     </div>
//   );
// };



// export const Option = ({ type, text }) => {
//   return (
//     <div className="option">
//       <Icon type={type} />
//       <div>{text}</div>
//     </div>
//   );
// };

//Dotazník s odpovědí
export const Option = ({type, text, onSelected}) => {
  return (
    <div className="option" onClick={()=>onSelected(type)}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};