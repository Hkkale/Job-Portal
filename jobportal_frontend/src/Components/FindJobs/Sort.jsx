import React, { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box, ActionIcon } from '@mantine/core';

import { HiOutlineAdjustments } from "react-icons/hi";
import {useDispatch} from 'react-redux'
import {updateSort} from "../../Slices/SortSlice"

const jobSort = ['Relevence', 'Most Recent', 'Salary: Low to High','Salary: High to Low'];

const talentSort = ['Relevence',  'Experience: Low to High','Experience: High to Low'];

const Sort= (props) => {
  const [selectedItem, setSelectedItem] = useState('Relevence');


  const dispatch=useDispatch()

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = props.sort=="job"? jobSort.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option> 
  )):talentSort.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
    ));

  return (
    <>
      

      <Combobox
        store={combobox}
        width={130}
        position="bottom-start"
        
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          dispatch(updateSort(val))
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          

          <div onClick={()=>combobox.toggleDropdown()} className='border border-bright-sun-400 flex items-center gap-2 px-2 py-1 rounded-xl cursor-pointer max-[475px]:text-xs max-[475px]:px-1 text-sm' >

            {
              selectedItem
            }

            <ActionIcon color='brightSun.4' variant='transparent' size='xs' aria-label='Settings'>

            <HiOutlineAdjustments className='text-bright-sun-400 h-5 w-5' />

            </ActionIcon>



          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}

export default Sort;
