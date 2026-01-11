// src/components/Keypad.jsx
import Button from "./Button";

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
      <Button variant="secondary" onClick={onClear} label="C" />
      <Button variant="secondary" onClick={onDelete} label="DEL" />
      <Button variant="op" onClick={() => onOperation("÷")} label="÷" />

      <Button onClick={() => onDigit("7")} label="7" />
      <Button onClick={() => onDigit("8")} label="8" />
      <Button onClick={() => onDigit("9")} label="9" />
      <Button variant="op" onClick={() => onOperation("×")} label="×" />

      <Button onClick={() => onDigit("4")} label="4" />
      <Button onClick={() => onDigit("5")} label="5" />
      <Button onClick={() => onDigit("6")} label="6" />
      <Button variant="op" onClick={() => onOperation("-")} label="-" />

      <Button onClick={() => onDigit("1")} label="1" />
      <Button onClick={() => onDigit("2")} label="2" />
      <Button onClick={() => onDigit("3")} label="3" />
      <Button variant="op" onClick={() => onOperation("+")} label="+" />

      <Button className="span-2" onClick={() => onDigit("0")} label="0" />
      <Button onClick={onDecimal} label="." />
      <Button variant="equals" onClick={onEquals} label="=" />
    </div>
  );
}
