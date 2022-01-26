import { createSignal } from "solid-js"
const [getValue, setValue] = createSignal(0)

export default () => {
  setValue(getValue() + 1)
  return <div>当前状态：{getValue()}</div>
}