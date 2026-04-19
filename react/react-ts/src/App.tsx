import React from 'react'

interface PersonProps {
  name: string,
  content?: React.ReactElement //jsx 类型 //ReactNode
}
function Person(props: PersonProps) {
  return (
    <div>
      <h1>111{props.name}</h1>
      {props.content}
    </div>
  )
}

const Animal: React.FunctionComponent<PersonProps> = (props) => {
  return (
    <div>
      <h1>动物{props.name}</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <h1>hello react-ts</h1>
      <Person name="张三" content={<button>提交</button>/*null*/} />
      <Animal name="动物" />
    </div>
  )
}

export default App