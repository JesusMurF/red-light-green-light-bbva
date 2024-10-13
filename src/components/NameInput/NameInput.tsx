import './NameInput.scss';

interface NameInputProps {
  isValid: boolean;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
}

/**
 * Name input component
 * @param {NameInputProps} props - Component props
 * @returns {JSX.Element}
 */
export const NameInput: React.FC<NameInputProps> = ({
  isValid,
  placeholder = 'Tu nombre',
  onChange,
  onKeyDown,
  value,
}) => (
  <div className="username-field">
    <input
      type="text"
      className="username-field__input"
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
    {!isValid && value !== '' && (
      <p className="username-field__error">
        El usuario no es válido, introduce solamente carácteres alfanúmericos.
      </p>
    )}
  </div>
);
