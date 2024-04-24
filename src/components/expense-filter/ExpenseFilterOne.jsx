import css from "./ExpenseFilter.module.css";
import PropTypes from "prop-types";

export const ExpenseFilterOne = ({ value, onChange }) => {
  return (
    <div className={css.expenseFilter}>
      <div className={css.expenseFilterControl}>
        <select value={value} onChange={onChange}>
          <option value="По убыванию">По убыванию</option>
          <option value="По возрастанию">По возрастанию</option>
          <option value="По новизне">По новизне</option>
          <option value="По названию">По названию</option>
        </select>
      </div>
    </div>
  );
};

ExpenseFilterOne.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
