import { Button as AntdButton } from 'antd'
import type { CommonComponentProps } from '../../interface';

export default function Button({id,type,text,style}: CommonComponentProps) {

  return (
   <AntdButton type={type} style={style}>{text}</AntdButton>
  )
}
