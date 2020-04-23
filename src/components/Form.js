import React, { useState } from 'react'
import styled from '@emotion/styled'

const FormSection = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

const Label = styled.label`
    flex: 0 0 100px;
`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`

const InputRadio = styled.input`
    margin: 0 1rem;
`

const Button = styled.button`
    background: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background: #26c6da;
        cursor: pointer;
    }
`

const Form = () => {

    const [ data, setData ] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const { brand, year, plan } = data 

    const handleFormInput = ({target}) => {
        setData({
            ...data,
            [target.name] : target.value
        })
    }

    return (
        <form>

            <FormSection>
                <Label>Brand</Label>
                <Select
                    name='brand'
                    value={brand}
                    onChange={handleFormInput}
                >
                    <option value="">-- Select --</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </FormSection>

            <FormSection>
                <Label>Year</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={handleFormInput}
                >
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </FormSection>

            <FormSection>
                <Label>Plan</Label>
                <InputRadio
                    type='radio'
                    name='plan'
                    value='basic'
                    cheked={plan === 'basic'}
                    onChange={handleFormInput}
                /> Basic
                <InputRadio
                    type='radio'
                    name='plan'
                    value='complete'
                    checked={plan === 'complete'}
                    onChange={handleFormInput}
                /> Complete
            </FormSection>

            <Button>Calculate</Button>

        </form>
    )
}

export default Form
