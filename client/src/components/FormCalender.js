import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue({challengeFormData,setChallengeFormData}) {
  const [value, setValue] = React.useState(dayjs());
const updateDate = () =>{
  console.log(value.format('YYYY-MM-DD'));
    setChallengeFormData({...challengeFormData, startDate: value.format('YYYY-MM-DD')})
}


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
 
      
          <DateCalendar value={value} onChange={(newValue) =>{ console.log(newValue)
            setValue(newValue)
            updateDate()
            }} />

    </LocalizationProvider>
  );
}
