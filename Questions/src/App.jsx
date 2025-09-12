import { useState } from 'react'
import SingleAccordian from './components/singleAccordian'
import MultipleAccordian from './components/multipleAccordian'
import RandomColor from './components/randomColor';
import StarRating  from './components/ratingStar';
import ImageSlider from './components/imageSlider';
import LoadMoreData from './components/loadMoreData';
import TreeView from './components/treeView';
import menus from './components/treeView/data';
import LightDarkMode from './components/lightDarkMode';
import ScrollIndicator from './components/scrollIndicator';
function App() {

  return (
    <>
    {/* Sing;e Accordian */}
    {/* <SingleAccordian /> */}
    {/* Multiple Accordian */}
    {/* <MultipleAccordian /> */}
    {/* Random Color */}
    {/* <RandomColor /> */}
    {/* <StarRating /> */}
    {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} /> */}
    {/* <LoadMoreData /> */}
    {/* <TreeView menus={menus}/> */}
    {/* <LightDarkMode /> */}
    <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
    </>
  )
}

export default App

