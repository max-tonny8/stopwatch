// components/TimezoneSelect.tsx
import React, { useState } from 'react';
import Select from 'react-select';

const TimezoneSelect = ({ selectedOption, handleChange, timezoneOptions }: { selectedOption: Timezone[], handleChange: any, timezoneOptions: Timezone[] }) => {
    return (
        <div className='select-wrapper'>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={timezoneOptions}
                placeholder="Select timezone..."
            />
        </div>
    );
};

export default TimezoneSelect;
