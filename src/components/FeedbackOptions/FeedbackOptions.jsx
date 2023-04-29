import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onClick}) =>{
    return(
        <ul className={css.FeedbackOptions}>
            {options.map(option => 
                <li key={option}>
                    <button className={css.button} onClick={()=>onClick(option)}>{option}</button>
                </li>
            )}
        </ul>
    );
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
};
export default FeedbackOptions;