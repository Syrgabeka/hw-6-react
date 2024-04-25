import css from "./ExpenseFilter.module.css";
import PropTypes from "prop-types";

export const ExpenseFilterOne = ({ value, onChange }) => {
  return (
    <div className={css.expenseFilter}>
      <div className={css.expenseFilterControl}>
        <select className={css.allChange} value={value} onChange={onChange}>
          <option value="По убыванию">По убыванию</option>
          <option value="По возрастанию">По возрастанию</option>
        </select>
        <button value="По новизне" onClick={onChange}>
          По новизне
        </button>
        <button value="По названию" onClick={onChange}>
          По названию
        </button>
      </div>
    </div>
  );
};

ExpenseFilterOne.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
