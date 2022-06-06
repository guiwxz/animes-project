import React from 'react';
import { GeneralAnime } from '../../shared/types';

interface FormProps {
  handleSubmit: (payload: GeneralAnime) => void;
}


const Form: React.FC<FormProps> = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    if (!e) {
      console.log("Erro no 'e'");
      return;
    }
    if (!e.target) {
      console.log("Erro no 'e.target'");
      return;
    }
    let obj: GeneralAnime = {} as GeneralAnime;
    for (let i = 0; i <= (e.target.length-2); i++) {
      obj = {
        ...obj,
        [e.target[`${i}`].name]: e.target[`${i}`].value,
      };
      e.target[`${i}`].value = '';
    }
    //console.log(obj)
    return props.handleSubmit(obj);
  }

  // console.log(props.children);
  // if (typeof props.children === 'object') {
  //   for (let i = 0; i<props.children.length; i++) {
  //     let element = props.children[i];
  //     if (element.type.name == 'InputField') {
  //       console.log(element.props)
  //       element.props = {
  //         ...element.props,
  //         defaultValue: 'cu' //Cannot assign to read only property 'props' of object '#<Object>'
  //       }
  //     }
  //   };
  // }


  return (
    <form onSubmit={onSubmit}>
      {props.children}
    </form>
  );
}

export default Form;