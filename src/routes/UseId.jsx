import { useId } from 'react';

function LabelInputPair() {
  const id = useId(); // will give the uniqe Id for us to work on something we don't want same Id
  return (
    <div style={{ marginBottom: '50px' }}>
      <label htmlFor={id}>
        Click on this label and it'll highlight the input {id}
      </label>
      <br />
      <input type="text" id={id} placeholder={`input id ${id}`} />
    </div>
  );
}

export default function UseIdComponent() {
  return (
    <>
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
    </>
  );
}
