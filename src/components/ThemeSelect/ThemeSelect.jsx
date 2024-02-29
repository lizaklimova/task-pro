
import { useTheme } from 'hooks/useTheme';
import React from 'react';
import Select from 'react-select';
import './ThemeSelect.css';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];

function ThemeSelect() {


  const { theme, setTheme } = useTheme();
  // const [selectedOption, setSelectedOption] = useState(theme);

  const onChangeTheme = (event) => {
    // event.preventDefault();
    console.log(theme);
    setTheme(event.value);
  }
  // useEffect(() => {
  //   setTheme(selectedOption)
  // }, [selectedOption])
  
//   const customTheme = theme => {
//     return {
//       ...theme,
//       colors: {
//         ...theme.colors,
//           primary25: 'inherit',
        
//         //змінюється залежно від вибору теми видылення теми кольором
//         // primary: '#161616', //змінюється залежно від вибору теми
      
//       },
//     };
//   };
//     const colorStyles = {
//       control: style => ({
//         ...style,
//         borderColor: 'none',
//             backgroundColor: 'inherit',
//       }),
//       option: style => ({
//         ...style,
//         backgroundColor: '#161616',
//         color: ' rgba(255, 255, 255, 0.5)',
//         // color: '#bedbb0',
//         // borderColor: '#161616',
//       }),
//     };
    
  return (
    <div >
      <Select
        classNamePrefix='custom-select'
        // defaultValue={selectedOption}
        // onChange={setSelectedOption}
        onChange={event=>{onChangeTheme(event)}}
        options={options}
        placeholder="Theme"
      />
    </div>
  );
}

export default ThemeSelect;
