import React from 'react';
import styled from 'styled-components';

const CustomSelectField = ({ placeholder, className }) => {
    return (
        <SelectField placeholder={placeholder} className={className}>
            <option value="group-1">WildFireBoyz</option>
            <option value="group-2">DutchesBoys</option>
            <option value="group-3">RockstarClan</option>
            <option value="group-4">OtherGroupz</option>
        </SelectField>
    )
}
export default CustomSelectField;

const SelectField = styled.select``
