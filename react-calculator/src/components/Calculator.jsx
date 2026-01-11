// src/components/Calculator.jsx
import { useReducer } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
  ADD_DECIMAL: "add-decimal",
};

const initialState = {
  current: "0",
  previous: null,
  operation: null,
};

function evaluate({ previous, current, operation }) {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (Number.isNaN(prev) || Number.isNaN(curr)) return null;

  let result;
  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "×":
      result = prev * curr;
      break;
    case "÷":
      if (curr === 0) return "Error";
      result = prev / curr;
      break;
    default:
      return null;
  }
  return String(result);
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CLEAR:
      return initialState;

    case ACTIONS.DELETE_DIGIT: {
      if (state.current === "Error") return initialState;
      if (state.current.length === 1) return { ...state, current: "0" };
      return { ...state, current: state.current.slice(0, -1) };
    }

    case ACTIONS.ADD_DECIMAL: {
      if (state.current === "Error") return { ...state, current: "0." };
      if (state.current.includes(".")) return state;
      return { ...state, current: state.current + "." };
    }

    case ACTIONS.ADD_DIGIT: {
      const digit = action.payload;

      if (state.current === "Error") return { ...state, current: digit };

      // Evitar múltiples ceros al inicio: "0002"
      if (state.current === "0" && digit === "0") return state;
      if (state.current === "0" && digit !== ".") {
        return { ...state, current: digit };
      }

      return { ...state, current: state.current + digit };
    }

    case ACTIONS.CHOOSE_OPERATION: {
      const op = action.payload;

      if (state.current === "Error") return initialState;

      // Si no hay previo, mueve current -> previous
      if (state.previous == null) {
        return { previous: state.current, current: "0", operation: op };
      }

      // Si ya hay previo y current está en 0 recién, solo cambia operación
      if (state.current === "0") {
        return { ...state, operation: op };
      }

      // Si hay previo y current, calcula y encadena
      const computed = evaluate(state);
      return {
        previous: computed,
        current: "0",
        operation: op,
      };
    }

    case ACTIONS.EVALUATE: {
      if (!state.operation || state.previous == null) return state;
      if (state.current === "Error") return initialState;

      const computed = evaluate(state);
      return {
        previous: null,
        operation: null,
        current: computed ?? state.current,
      };
    }

    default:
      return state;
  }
}

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDigit = (digit) =>
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: digit });

  const handleDecimal = () => dispatch({ type: ACTIONS.ADD_DECIMAL });

  const handleOperation = (op) =>
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: op });

  const handleClear = () => dispatch({ type: ACTIONS.CLEAR });

  const handleDelete = () => dispatch({ type: ACTIONS.DELETE_DIGIT });

  const handleEquals = () => dispatch({ type: ACTIONS.EVALUATE });

  return (
    <div className="calculator">
      <Display
        previous={state.previous}
        operation={state.operation}
        current={state.current}
      />

      <Keypad
        onDigit={handleDigit}
        onDecimal={handleDecimal}
        onOperation={handleOperation}
        onClear={handleClear}
        onDelete={handleDelete}
        onEquals={handleEquals}
      />
    </div>
  );
}
