import React, {useState} from 'react';

type exPost = {
    afterPost: string | null;
}

const NextButton = (defaultState: any, { afterPost }: exPost) => {
    const [state, updateState] = useState(afterPost);
    const Button = () => (
      <div>
        <button onClick={e => updateState(state)}
        >{state}</button>
      </div>
    );

    return [Button, updateState];
};

export default NextButton;
