import React from "react";
import uuid from 'uuid';

const RenderSpan = ({array}) => (array.map((el, index) => {
   return  index < array.length - 1 ? <span key={uuid()} >{el}, </span> : <span key={uuid()}>{el}</span>
}));

export default RenderSpan;