interface SearchBarProps {
  value: string
  onChange: (newValue: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

export default SearchBar