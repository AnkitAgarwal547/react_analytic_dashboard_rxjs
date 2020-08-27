import React from 'react';
import "@testing-library/jest-dom"
import renderer from 'react-test-renderer'
import Temprature from './temperature'
import AirPressure from './airPressure'
import Humidity from './humidity'


//snapshot testing

it("temperature matches snapshot",()=>{
   const tree = renderer.create(
        <Temprature/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
})

it("pressure matches snapshot",()=>{
    const tree = renderer.create(
         <AirPressure/>
     ).toJSON();
 
     expect(tree).toMatchSnapshot();
 })

 it("humidity matches snapshot",()=>{
    const tree = renderer.create(
         <Humidity/>
     ).toJSON();
 
     expect(tree).toMatchSnapshot();
 })

 
