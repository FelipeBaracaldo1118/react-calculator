// src/components/Keypad.jsx
export default function Keypad({
  onDigit,
  onDecimal,
  onOperation,
  onClear,
  onDelete,
  onEquals,
}) {
  return (
    <div className="keypad">
      {/* Row 1 */}
      <button className="btn btn-secondary a-c" onClick={onClear} type="button">
        C
      </button>
      <button className="btn btn-secondary a-del" onClick={onDelete} type="button">
        DEL
      </button>
      <button
        className="btn btn-op a-div"
        onClick={() => onOperation("÷")}
        type="button"
      >
        ÷
      </button>
      <button
        className="btn btn-op a-mul"
        onClick={() => onOperation("×")}
        type="button"
      >
        ×
      </button>

      {/* Row 2 */}
      <button className="btn a-seven" onClick={() => onDigit("7")} type="button">
        7
      </button>
      <button className="btn a-eight" onClick={() => onDigit("8")} type="button">
        8
      </button>
      <button className="btn a-nine" onClick={() => onDigit("9")} type="button">
        9
      </button>
      <button
        className="btn btn-op a-sub"
        onClick={() => onOperation("-")}
        type="button"
      >
        −
      </button>

      {/* Row 3 */}
      <button className="btn a-four" onClick={() => onDigit("4")} type="button">
        4
      </button>
      <button className="btn a-five" onClick={() => onDigit("5")} type="button">
        5
      </button>
      <button className="btn a-six" onClick={() => onDigit("6")} type="button">
        6
      </button>
      <button
        className="btn btn-op a-add"
        onClick={() => onOperation("+")}
        type="button"
      >
        +
      </button>

      {/* Row 4 */}
      <button className="btn a-one" onClick={() => onDigit("1")} type="button">
        1
      </button>
      <button className="btn a-two" onClick={() => onDigit("2")} type="button">
        2
      </button>
      <button className="btn a-three" onClick={() => onDigit("3")} type="button">
        3
      </button>

      {/* "=" occupies row 4 + row 5 (tall button) */}
      <button className="btn btn-equals a-eq" onClick={onEquals} type="button">
        =
      </button>

      {/* Row 5 */}
      <button className="btn a-zero" onClick={() => onDigit("0")} type="button">
        0
      </button>
      <button className="btn a-dot" onClick={onDecimal} type="button">
        .
      </button>
    </div>
  );
}
