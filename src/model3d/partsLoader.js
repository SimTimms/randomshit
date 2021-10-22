import ModelLoader from './modelLoader';
export default function ModelLoader({ props,attachedPart }) {
  return attachedPart.map(item=><ModelLoader/>)
}
